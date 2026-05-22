export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Productivity Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Visualize Your Discord<br />
          <span className="text-[#58a6ff]">Role Permissions</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Interactive diagrams of role hierarchies, permission overlaps, and security gaps. Audit your server in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $12/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#58a6ff]">D3.js</div>
              <div className="text-sm text-[#8b949e]">Interactive graphs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#58a6ff]">OAuth</div>
              <div className="text-sm text-[#8b949e]">Discord login</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#58a6ff]">Export</div>
              <div className="text-sm text-[#8b949e]">PNG / SVG / PDF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited servers",
              "Interactive permission diagrams",
              "Role hierarchy visualization",
              "Security gap detection",
              "Export PNG, SVG, PDF",
              "Discord OAuth login"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Discord server?",
              a: "You authenticate via Discord OAuth. We request read-only permissions to fetch your server's roles and permission data — we never modify anything."
            },
            {
              q: "What kind of security gaps does it detect?",
              a: "It flags roles with administrator privileges, permission escalation paths, overlapping dangerous permissions, and roles that bypass channel restrictions."
            },
            {
              q: "Can I export the diagrams?",
              a: "Yes. Every visualization can be exported as PNG, SVG, or PDF for use in reports, documentation, or team presentations."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Role Permission Visualizer. All rights reserved.
      </footer>
    </main>
  );
}
