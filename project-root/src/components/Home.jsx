import '../styles/Home.css';
import imgWork from '../images/illustration-working.svg';
import { useState } from 'react';

function Home() {

    // Estado para controlar o valor do campo de busca
    const [inputValue, setInputValue] = useState('');
    // Estado para controlar a exibição da mensagem de erro
    const [error, setError] = useState(false);

    // Função para lidar com o clique no botão
    const handleShortenUrl = () => {
        if (inputValue.trim() === '') {
            setError(true); // Mostra a mensagem de erro
        } else {
            setError(false); // Oculta a mensagem de erro
            // Aqui você pode adicionar a lógica para encurtar a URL
            console.log('Link digitado:', inputValue);
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

            <search className="search">
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

                <button className="search-btn" type="submit" onClick={handleShortenUrl}>
                    Encurtar URL
                </button>
            </search>
            
        </section>
    );
}

export default Home;