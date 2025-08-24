export default function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <header className="hero">
        <div className="container hero__wrap">
          <div className="hero__text">
            <p className="eyebrow">Coming soon</p>
            <h1 className="hero__title">Event photos, made easy</h1>
            <p className="hero__sub">
              A private way to collect and share memories with the people who matter most.
            </p>

            {/* Waitlist (no navigation while testing) */}
            <form className="cta" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Join the waitlist (email)"
                className="cta__input"
              />
              <button type="submit" className="cta__btn">Notify me</button>
            </form>

            <p className="hero__note">Early access is limited. Join the waitlist above.</p>
          </div>

          <div className="hero__art">
            <img src="/hero.jpg" alt="Groufie brand artwork" className="hero__img" />
          </div>
        </div>
      </header>

      {/* Subtle value proposition */}
      <section className="value">
        <div className="container text-center">
          <h2 className="value__title">Privacy at the core</h2>
          <p className="value__copy">
            Groufie is built on a simple idea: your memories belong to you.
            Every gallery is private by default, designed for secure sharing with only the people you choose.
            Nothing public, nothing complicated — just peace of mind while you celebrate.
          </p>
        </div>
      </section>

      {/* Footer (no links) */}
      <footer className="footer">
        © 9 Fingers Digital 2025
      </footer>
    </div>
  );
}
