import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/UrlField.css';

const UrlField = ({ onShorten }) => {
    // Estado para controlar o valor do campo
    const [inputValue, setInputValue] = useState('');

    // Estado para controlar a mensagem de erro
    const [error, setError] = useState(false);

    // Estado para controlar o carregamento
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setError(false);
    };

    // Função para encurtar a URL
    const handleShortenUrl = async () => {
        if (inputValue.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setLoading(true);

        try {
            const response = await axios.get(
                `https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputValue.trim())}`
            );

            onShorten({
                original: inputValue.trim(),
                shortened: response.data,
            });

            setInputValue('');
        } catch (error) {
            console.error('Erro ao encurtar URL:', error.message);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="url">
            <section className="url-field-container">
                <input
                    className={`url-field ${error ? 'error-border' : ''}`}
                    id="url-field"
                    type="text"
                    placeholder="Cole o link aqui..."
                    value={inputValue}
                    onChange={handleInputChange}
                    aria-invalid={error}
                    aria-describedby={error ? 'url-error' : undefined}
                />

                {error && (
                    <span id="url-error" className="error-message">
                        Não foi possível encurtar o link. Verifique a URL e tente novamente.
                    </span>
                )}
            </section>

            <button
                className="url-btn"
                type="button"
                onClick={handleShortenUrl}
                disabled={loading}
            >
                {loading ? 'Encurtando...' : 'Encurtar'}
            </button>
        </section>
    );
};

UrlField.propTypes = {
    onShorten: PropTypes.func.isRequired,
};

export default UrlField;