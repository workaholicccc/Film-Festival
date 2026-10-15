import noOtherChoice from '../../assets/n.jpg';

function NoOtherChoice() {
  return (
    <div className="min-h-screen bg-[#052E3317] px-4 py-8 text-[#f5f2ee] antialiased sm:px-8 md:px-12 md:py-12">
      <div className="mx-auto max-w-[1344px]">
        <header className="flex items-center justify-between border-b border-white/25 pb-5">
          <a
            href="/"
            className="flex items-center gap-4 text-sm font-extrabold uppercase tracking-[0.22em]"
          >
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-[#978782]" />
            <span className="text-[#17517b]">Film Festival</span>
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
              src={noOtherChoice}
              alt="No Other Choice film artwork"
              className="aspect-[3/2] w-full bg-[#211c1b] object-cover"
            />

            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#17517b]">
                A film by Park Chan-wook
              </p>

              <h1
                className="text-6xl uppercase leading-[0.9] tracking-[-0.075em] text-[#978782] sm:text-7xl md:text-8xl"
                style={{ fontFamily: '"Inknut Antiqua", Georgia, serif' }}
              >
                No Other Choice
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#978782]">
                  Starring
                </span>
                <p className="text-base font-medium text-[#978782] sm:text-lg">
                  Lee Byung-hun <span className="px-1">|</span> Son Ye-jin
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Drama', 'Thriller', 'Dark Comedy'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/30 px-3.5 py-[9px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#17517b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://www.youtube.com/results?search_query=No+Other+Choice+Park+Chan-wook+official+trailer"
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
              <p className="text-[13px] font-bold uppercase tracking-[0.26em] text-[#17517b]">
                The story
              </p>
              <h2 className="mt-[18px] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#978782]">
                No job.
                <br />
                No other choice.
              </h2>
            </div>

            <div className="flex flex-col gap-[22px]">
              <p className="text-lg leading-[1.6] text-[#978782] sm:text-xl">
                After 25 years of loyal service, Man-soo is abruptly laid off from his job at a
                paper company. Desperate to support his family, he realizes he is competing against
                more qualified applicants for the few available positions. Driven to extremes, he
                decides to take drastic measures to eliminate his rivals and secure a future for
                his family.
              </p>

              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-0.5 w-[34px] bg-[#17517b]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#978782]">
                  Directed by Park Chan-wook
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default NoOtherChoice;