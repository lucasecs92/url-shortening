import '../styles/Home.css';
import imgWork from '../images/illustration-working.svg';

function Home() {
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
                <input
                    className="search-field"
                    id="search-field"
                    type="search"
                    placeholder="Cole o link aqui..."
                />

                <button className="search-btn" type="submit">
                    Encurtar URL
                </button>
            </search>
        </section>
    );
}

export default Home;