import './NewsTicker.css';

const headlines = ['Welcome to Independent Film Festival !', '5 days remaining'];

function NewsTicker() {
    return (
        <div
            aria-label={headlines.join('. ')}
            className="relative mb-4 h-8 overflow-hidden bg-black text-white"
        >
            {headlines.map((headline, index) => (
                <span
                    key={headline}
                    aria-hidden="true"
                    className={`news-ticker-headline${index === 1 ? ' news-ticker-headline-delayed' : ''}`}
                >
                    {headline}
                </span>
            ))}
        </div>
    );
}

export default NewsTicker;
