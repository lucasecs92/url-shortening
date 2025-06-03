import { useState } from 'react';
import axios from 'axios';
import '../styles/UrlField.css';
import PropTypes from 'prop-types';

const UrlField = ({ onShorten }) => {
    // Prop types validation
    UrlField.propTypes = {
        onShorten: PropTypes.func.isRequired,
    };

    // Estado para controlar o valor do campo de busca
    const [inputValue, setInputValue] = useState('');
    // Estado para controlar a exibição da mensagem de erro
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setError(false);
    };

    // Função para lidar com o clique no botão
    const handleShortenUrl = async () => {
        if (inputValue.trim() === '') {
            setError(true);
        } else {
            setError(false);
            setLoading(true);
            try {
                const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputValue)}`); // api pública: não requer cadastro ou chave

                onShorten({ original: inputValue, shortened: response.data });
                setInputValue('');
            } catch (error) {
                console.error('Erro ao encurtar URL:', error.message);
                setError(true);
            } finally {
                setLoading(false);
            }
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
                />
                {error && (
                    <span className="error-message">
                        Por favor, adicione um link
                    </span>
                )}
            </section>
            
            <button
                className="url-btn"
                type="submit"
                onClick={handleShortenUrl}
                disabled={loading}
            >
                {loading ? 'Encurtando...' : 'Encurtar'}
            </button>
        </section>
    );
};

export default UrlField;