import PropTypes from 'prop-types';
import '../styles/ShortenedUrlsList.css';

function ShortenedUrlsList({ urls, onCopy }) {

    return (
        <>
            <section className="container-shortened">
                {/* Renderizamos as URLs encurtadas */}
                <div className="shortened-urls">
                    {urls.length > 0 && (
                        <>
                            {urls.map((url, index) => (
                                <div key={index} className="url-item">
                                    <span>
                                        <a href={url.shortened} target="_blank" rel="noopener noreferrer">{url.shortened}</a>
                                        <button onClick={() => onCopy(url.original, url.shortened)} className="copy-btn">Copiar</button>
                                    </span>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

ShortenedUrlsList.propTypes = {
    urls: PropTypes.arrayOf(
      PropTypes.shape({
        original: PropTypes.string.isRequired,
        shortened: PropTypes.string.isRequired,
      })
    ).isRequired,
    onCopy: PropTypes.func.isRequired,
};

export default ShortenedUrlsList;