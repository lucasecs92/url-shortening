import { useState } from 'react';
import '../styles/Home.css';
import imgWork from '../images/illustration-working.svg';
import axios from 'axios'; // Importamos axios para fazer requisições HTTP

function Home() {

    // Estado para controlar o valor do campo de busca
    const [inputValue, setInputValue] = useState('');
    // Estado para controlar a exibição da mensagem de erro
    const [error, setError] = useState(false);
    const [shortenedUrls, setShortenedUrls] = useState([]); // Novo estado para armazenar as URLs encurtadas
    const [loading, setLoading] = useState(false);

    // Função para lidar com o clique no botão
    const handleShortenUrl = async () => {
        if (inputValue.trim() === '') {
            setError(true); // Mostra a mensagem de erro
        } else {
            setError(false); // Oculta a mensagem de erro
            setLoading(true);
            try {
                const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputValue)}`);
                
                setShortenedUrls([...shortenedUrls, { original: inputValue, shortened: response.data }]);
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
        <section className="wrap-home">
            <section className="wrap-top">
                <section className="wrap-top-left">
                    <h2>Encurtador de URL</h2>
                    <p>
                        Simplifique seus links. Gere links curtos, fáceis de lembrar e de compartilhar.
                    </p>
                </section>
                <img
                    className="img-work" 
                    src={imgWork} 
                    alt="Illustration of a person working on a computer" 
                />
            </section>

            <section className="search">
                <section className="search-field-container">
                    <input
                        className={`search-field ${error ? 'error-border' : ''}`}
                        id="search-field"
                        type="search"
                        placeholder="Cole o link aqui..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado com o valor digitado
                    />
                    {/* Exibe a mensagem de erro se o estado "error" for true */}
                    {error && (
                        <span className="error-message">
                            Por favor, adicione um link
                        </span>
                    )}
                </section>

                <button 
                    className="search-btn" 
                    type="submit" 
                    onClick={handleShortenUrl} 
                    disabled={loading}
                >
                    {loading ? 'Encurtando...' : 'Encurtar'}
                </button>
            </section>
            
            {/* Renderizamos as URLs encurtadas */}
            {shortenedUrls.length > 0 && (
                <div className="shortened-urls">
                    <h3>URLs Encurtadas:</h3>
                    {shortenedUrls.map((url, index) => (
                        <div key={index} className="url-item">
                            <p>Original: {url.original}</p>
                            <p>Encurtado: <a href={url.shortened} target="_blank" rel="noopener noreferrer">{url.shortened}</a></p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Home;