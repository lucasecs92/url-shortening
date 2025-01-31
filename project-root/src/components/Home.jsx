import { useState } from 'react';

import '../styles/Home.css';
import imgWork from '../images/illustration-working.svg';
import ShortenedUrlsList from './ShortenedUrlsList';
import UrlField from './UrlField';

function Home() {
    const [shortenedUrls, setShortenedUrls] = useState([]); // Novo estado para armazenar as URLs encurtadas

    const handleCopyUrl = (original, shortened) => {
        navigator.clipboard.writeText(shortened);
        console.log(`Copied URL: ${shortened}`);
    }

    return (
        <>
            <section className="wrap-home">
                <section className="wrap-top">
                    <section className="wrap-top-left">
                        <h2>Encurtador de URL</h2>
                        <p className='description'>
                            Simplifique seus links. Gere links curtos, fáceis de lembrar e de compartilhar.
                        </p>
                    </section>
                    <img
                        className="img-work" 
                        src={imgWork} 
                        alt="Illustration of a person working on a computer" 
                    />
                </section>

                <UrlField 
                    onShorten={(newUrl) => {
                        setShortenedUrls(prevUrls => [...prevUrls, newUrl]);
                    }}
                />
            </section>
            <ShortenedUrlsList urls={shortenedUrls} onCopy={handleCopyUrl}/>
        </>
    );
}

export default Home;