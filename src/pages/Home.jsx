export default function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-14 text-center">
          <p className="uppercase tracking-[0.2em] opacity-90 mb-3">Coming soon</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Event photos, made easy
          </h1>
          <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            A private way to collect and share memories with the people who matter most.
          </p>

          {/* Waitlist (test mode, no real submit) */}
          <form className="mt-6 flex w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Join the waitlist (email)"
              className="flex-grow px-4 py-3 rounded-l-xl bg-white/95 text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-r-xl bg-gray-900 text-white font-medium hover:opacity-90"
            >
              Notify me
            </button>
          </form>

          <p className="text-white/80 mt-3">
            Early access is limited. Join the waitlist above.
          </p>
        </div>
      </header>

      {/* Value proposition */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Privacy at the core
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Groufie is built on a simple idea: your memories belong to you.
            Every gallery is private by default, designed for secure sharing with only the people you choose.
            Nothing public, nothing complicated — just peace of mind while you celebrate.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center text-sm text-gray-500 py-8">
        © 9 Fingers Digital 2025
      </footer>
    </div>
  );
}
