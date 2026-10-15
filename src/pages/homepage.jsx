import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NewsTicker from '../components/NewsTicker';

import obsession from '../assets/o.jpg' ;
import backrooms from '../assets/b.jpg' ;
import no_other_choice from '../assets/n.jpg' ;

const images=[
    { src: obsession, path: '/movies/obsession', title: 'Obsession' },
    { src: backrooms, path: '/movies/backrooms', title: 'Backrooms' },
    { src: no_other_choice, path: '/movies/no-other-choice', title: 'No Other Choice' }
    
];

function HomePage(){

        const [index, setIndex] = useState(0);
        const [menuOpen, setMenuOpen] = useState(false);
        const navigate = useNavigate();

        const themeColors = [
            { navBg: "#f6e2dd", navText: "#681b18", indicatorBg: "#dc2626" },
            { navBg: "#e4e5c4", navText: "#353819", indicatorBg: "#747a36" },
            { navBg: "#e5edf8", navText: "#34445f", indicatorBg: "#52698f" },
            ];

        const currentTheme = themeColors[index % themeColors.length];


        useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval); // cleanup on unmount
        }, []);

        useEffect(() => {
            if (!menuOpen) return undefined;

            const closeOnEscape = (event) => {
                if (event.key === "Escape") setMenuOpen(false);
            };

            window.addEventListener("keydown", closeOnEscape);
            return () => window.removeEventListener("keydown", closeOnEscape);
        }, [menuOpen]);


    return (
        <div className= "relative w-full  h-screen flex justify-center">
             
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img.src}
                    alt=""
                    onClick={() => navigate(img.path)}
                    className={`absolute inset-0 w-full h-full object-cover  transition-opacity duration-1000 ${
                        i === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                />
            ))}


            {/*header*/}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <NewsTicker />
                <div className="px-5 pt-8 sm:px-8 sm:pt-10 lg:px-10">
                    <div className="mx-auto w-full max-w-[438px]">
                        <nav
                            aria-label="Main navigation"
                            className="pointer-events-auto grid h-16 grid-cols-3 items-center rounded-b px-3 transition-colors duration-1000 sm:px-4"
                            style={{ backgroundColor: currentTheme.navBg, color: currentTheme.navText }}
                        >
                            <button
                                type="button"
                                aria-label="Open menu"
                                aria-expanded={menuOpen}
                                onClick={() => setMenuOpen(true)}
                                className="flex items-center gap-2 justify-self-start bg-transparent text-inherit"
                            >
                                <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
                                    <span className="h-px w-6 bg-current" />
                                    <span className="h-px w-6 bg-current" />
                                </span>
                                <span className="text-[10px] tracking-[0.12em]">MENU</span>
                            </button>
                            <div className="justify-self-center whitespace-nowrap text-lg font-black tracking-[-0.08em]">
                                IIF
                            </div>
                            <div className="hidden items-center gap-3 justify-self-end text-[9px] tracking-[0.12em] sm:flex">
                                <span>FILMS</span>
                                <span>ABOUT</span>
                                <span>SEARCH</span>
                            </div>
                        </nav>
                        <button
                            type="button"
                            aria-label={`View ${images[index].title}`}
                            onClick={() => navigate(images[index].path)}
                            className="pointer-events-auto flex h-14 w-full items-center gap-3 rounded-b bg-black px-3 text-left"
                        >
                            <img
                                src={images[index].src}
                                alt=""
                                className="h-10 w-16 shrink-0 object-cover"
                            />
                            <span className="flex min-w-0 flex-1 flex-col">
                                <span
                                    className="text-[10px] font-semibold tracking-[0.08em]"
                                    style={{ color: currentTheme.indicatorBg }}
                                >
                                    CURRENTLY SHOWING
                                </span>
                                <span className="truncate text-xs text-white">{images[index].title}</span>
                            </span>
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4 shrink-0"
                                style={{ color: currentTheme.indicatorBg }}
                            >
                                <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </button>
                        </div>
                </div>

                {menuOpen && (
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-label="Main menu"
                        className="pointer-events-auto absolute inset-0 z-20 flex min-h-full flex-col overflow-y-auto px-5 py-6 sm:px-8 sm:py-10 lg:px-10"
                        style={{ backgroundColor: currentTheme.navBg, color: currentTheme.navText }}
                    >
                        <header className="grid h-20 shrink-0 grid-cols-3 items-center rounded px-4 sm:h-24 sm:px-8">
                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-4 justify-self-start bg-transparent text-inherit"
                            >
                                <span aria-hidden="true" className="relative h-7 w-7">
                                    <span className="absolute left-0 top-1/2 h-px w-8 -rotate-45 bg-current" />
                                    <span className="absolute left-0 top-1/2 h-px w-8 rotate-45 bg-current" />
                                </span>
                                <span className="text-xs tracking-[0.16em]">CLOSE</span>
                            </button>
                            <div className="justify-self-center text-xl font-black tracking-[-0.08em] sm:text-2xl">IIF</div>
                            <div className="hidden items-center gap-7 justify-self-end text-xs tracking-[0.16em] sm:flex">
                                <span>FILMS</span>
                                <span>ABOUT</span>
                                <span>SEARCH</span>
                            </div>
                        </header>

                        <div className="flex flex-1 flex-col px-1 pt-10 sm:px-8 sm:pt-12">
                            <p className="mb-9 text-xs tracking-[0.16em] sm:mb-10">EXPLORE IIF</p>
                            <div className="flex flex-1 flex-col">
                                {["Films", "Coming soon", "About", "Journal"].map((item, i) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setMenuOpen(false)}
                                        className="grid min-h-28 flex-1 grid-cols-[42px_1fr_28px] items-center border-t bg-transparent text-left last:border-b"
                                        style={{ borderColor: `${currentTheme.navText}66` }}
                                    >
                                        <span className="self-start pt-5 text-[10px] tracking-[0.12em]">{`0${i + 1}`}</span>
                                        <span className="text-4xl font-normal tracking-[-0.06em] sm:text-6xl lg:text-[5.5rem]">{item}</span>
                                        <span aria-hidden="true" className="justify-self-end text-3xl">→</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <footer
                            className="flex flex-col justify-between gap-2 border-t pt-2 text-[9px] tracking-[0.14em] sm:flex-row"
                            style={{ borderColor: `${currentTheme.navText}66` }}
                        >
                            <span>NEW YORK · LOS ANGELES</span>
                            <span>INDEPENDENT STORIES, VIVIDLY TOLD.</span>
                        </footer>
                    </section>
                )}
            </div>
        </div>
    )
}

export default HomePage