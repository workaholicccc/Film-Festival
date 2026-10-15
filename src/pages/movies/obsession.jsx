import obsession from '../../assets/o.jpg';

function Obsession() {
  return (
    <div className="min-h-screen bg-[#101010] px-4 py-8 text-[#f5f2ee] antialiased sm:px-8 md:px-12 md:py-12">
      <div className="mx-auto max-w-[1344px]">
        <header className="flex items-center justify-between border-b border-white/25 pb-5">
          <span className="flex items-center gap-4 text-sm font-extrabold uppercase tracking-[0.22em]">
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-[#e1262f]" />
            Film Festival
          </span>
          <nav aria-label="Main navigation" className="text-xs font-medium uppercase tracking-[0.24em] text-[#bcb6b0]">
            Films&nbsp;&nbsp;&nbsp; About
          </nav>
        </header>

        <main>
          <section className="grid gap-8 py-10 md:grid-cols-[minmax(0,510px)_minmax(0,1fr)] md:items-center md:gap-16 md:py-14">
            <img
              src={obsession}
              alt="Obsession poster"
              className="aspect-[3/2] w-full bg-[#211c1b] object-cover"
            />

            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e1262f]">
                A film by Curry Barker
              </p>

              <h1
                className="text-6xl uppercase leading-[0.9] tracking-[-0.075em] text-[#978782]/60 sm:text-7xl md:text-8xl"
                style={{ fontFamily: '"Inknut Antiqua", Georgia, serif' }}
              >
                Obsession
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#bcb6b0]">
                  Starring
                </span>
                <p className="text-base font-medium sm:text-lg">
                  Michael Johnston <span className="px-1">|</span> Inde Navarrette
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Horror', 'Thriller', 'Psychological'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/30 px-3.5 py-[9px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f5f2ee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://www.youtube.com/results?search_query=Obsession+2025+official+trailer+Curry+Barker"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[11px] bg-[#e1262f] px-6 py-[15px] text-[13px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#bd1e26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e1262f]"
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
              <p className="text-[13px] font-bold uppercase tracking-[0.26em] text-[#e1262f]">
                The story
              </p>
              <h2 className="mt-[18px] text-3xl font-bold leading-[1.05] tracking-[-0.04em]">
                Love can be
                <br />a terrible wish.
              </h2>
            </div>

            <div className="flex flex-col gap-[22px]">
              <p className="text-lg leading-[1.6] text-[#e6e1dc] sm:text-xl">
                A shy young man named Bear acquires a supernatural object called the “One Wish Willow”
                and uses it to make his co-worker and crush, Nikki, fall in love with him. He gets
                exactly what he wished for, but soon discovers that some desires come at a dark and
                sinister price as Nikki&apos;s affection transforms into something terrifying and possessive.
              </p>

              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-0.5 w-[34px] bg-[#e1262f]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bcb6b0]">
                  Directed by Curry Barker
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Obsession;