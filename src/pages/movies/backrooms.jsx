import backrooms from '../../assets/b.jpg';

function Backrooms() {
  return (
    <div className="min-h-screen bg-[#BABE2A9C] px-4 py-8 text-[#f5f2ee] antialiased sm:px-8 md:px-12 md:py-12">
      <div className="mx-auto max-w-[1344px]">
        <header className="flex items-center justify-between border-b border-white/25 pb-5">
          <a
            href="/"
            className="flex items-center gap-4 text-sm font-extrabold uppercase tracking-[0.22em]"
          >
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-[#978782]" />
            Film Festival
          </a>
          <nav
            aria-label="Main navigation"
            className="text-xs font-medium uppercase tracking-[0.24em] text-[#bcb6b0]"
          >
            <a href="/">Films</a>
            <span aria-hidden="true" className="px-3">
              About
            </span>
          </nav>
        </header>

        <main>
          <section className="grid gap-8 py-10 md:grid-cols-[minmax(0,510px)_minmax(0,1fr)] md:items-center md:gap-16 md:py-14">
            <img
              src={backrooms}
              alt="A woman stands in a dim, endless yellow hallway"
              className="aspect-[3/2] w-full bg-[#211c1b] object-cover"
            />

            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5f2ee]">
                A film by Kane Parsons
              </p>

              <h1
                className="text-6xl uppercase leading-[0.9] tracking-[-0.075em] text-[#978782] sm:text-7xl md:text-8xl"
                style={{ fontFamily: '"Inknut Antiqua", Georgia, serif' }}
              >
                Backrooms
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#978782]">
                  Starring
                </span>
                <p className="text-base font-medium text-[#978782] sm:text-lg">
                  Chiwetel Ejiofor <span className="px-1">|</span> Renate Reinsve
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Horror', 'Science Fiction', 'Mystery'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/30 px-3.5 py-[9px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f5f2ee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://www.youtube.com/results?search_query=Backrooms+Kane+Parsons+official+trailer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[11px] bg-[#978782] px-6 py-[15px] text-[13px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#80716c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#978782]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className="h-3 w-3"
                >
                  <path d="M3 1.5v9L10 6 3 1.5Z" />
                </svg>
                Play trailer
              </a>
            </div>
          </section>

          <section className="grid gap-8 border-t border-white/25 pt-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-[70px]">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.26em] text-[#f5f2ee]">
                The story
              </p>
              <h2 className="mt-[18px] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#978782]">
                Some doors
                <br />
                should stay closed.
              </h2>
            </div>

            <div className="flex flex-col gap-[22px]">
              <p className="text-lg leading-[1.6] text-[#978782] sm:text-xl">
                Based on the viral internet phenomenon, this film follows Clark, a man whose life
                is falling apart. He discovers a mysterious doorway in the basement of his
                furniture store that leads him into the Backrooms—a vast, labyrinthine dimension of
                endless yellow rooms. As he tries to escape, his therapist, Mary, must confront the
                horrors of this liminal space to save him.
              </p>

              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-0.5 w-[34px] bg-[#f5f2ee]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#978782]">
                  Directed by Kane Parsons
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Backrooms;