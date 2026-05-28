import Link from 'next/link'
import { PRODUCTS, STATS, TESTIMONIALS, FAQS } from '@/lib/products'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e293b] bg-[#030712]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">Hermes Store</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#products" className="text-sm text-[#64748b] hover:text-white transition-colors">Products</a>
            <a href="#pricing" className="text-sm text-[#64748b] hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-[#64748b] hover:text-white transition-colors">FAQ</a>
            <button className="btn-primary text-sm !py-2 !px-5">Get Started</button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e293b] bg-[#0d1117] mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse-glow" />
            <span className="text-sm text-[#64748b]">83,000+ Hermes Agents deployed worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-up delay-100" style={{animationFillMode:'both'}}>
            Unlock your<br />
            <span className="gradient-text">Hermes Agent.</span><br />
            Ship faster.
          </h1>

          {/* Sub */}
          <p className="text-xl md:text-2xl text-[#64748b] max-w-2xl mx-auto mb-12 animate-fade-up delay-200" style={{animationFillMode:'both'}}>
            The most advanced SOUL packs, dashboards, and workflows for the most powerful open-source AI agent framework.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300" style={{animationFillMode:'both'}}>
            <button className="btn-primary text-lg !py-4 !px-10">
              Browse Products
            </button>
            <button className="btn-secondary text-lg !py-4 !px-10">
              Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <p className="text-sm text-[#64748b] mt-8 animate-fade-up delay-400" style={{animationFillMode:'both'}}>
            Trusted by 500+ developers and AI teams worldwide
          </p>
        </div>
      </section>

      {/* ─── LOGO GRID ─── */}
      <section className="py-16 px-6 border-y border-[#1e293b]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-[#64748b] mb-8">Powering teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {['Vercel', 'Linear', 'Notion', 'Figma', 'Supabase', 'Cloudflare'].map((brand) => (
              <span key={brand} className="text-lg font-semibold tracking-tight text-white">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-[#64748b]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Everything you need.</h2>
            <p className="text-xl text-[#64748b]">Drop-in products. No config headaches.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <Link
                key={product.id}
                href={product.href}
                className="card group relative flex flex-col p-8 no-underline"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: product.color, color: 'white' }}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{ background: `${product.color}20`, border: `1px solid ${product.color}40` }}>
                  <div className="w-6 h-6 rounded" style={{ background: product.color }} />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-[#64748b] mb-6">{product.tagline}</p>

                {/* Description */}
                <p className="text-sm text-[#94a3b8] mb-8 flex-grow">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.slice(0, 4).map((f) => (
                    <li key={f} className="text-sm text-[#94a3b8] flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-end gap-2 pt-4 border-t border-[#1e293b]">
                  <span className="text-3xl font-black">${product.price}</span>
                  <span className="text-sm text-[#64748b] mb-1">{product.price_note}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 px-6 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Loved by agent builders.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card p-8">
                <p className="text-[#94a3b8] mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full bg-[#1e293b]" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-[#64748b]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">Simple pricing.</h2>
          <p className="text-xl text-[#64748b] text-center mb-16">Start free. Scale when you&rsquo;re ready.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="card p-8">
              <div className="text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-4">Free</div>
              <div className="text-4xl font-black mb-1">$0</div>
              <div className="text-sm text-[#64748b] mb-8">Forever</div>
              <ul className="space-y-3 mb-8">
                {['Hermes Agent (open source)', 'Basic SOUL templates', 'Community Discord', 'GitHub access'].map(f => (
                  <li key={f} className="text-sm text-[#94a3b8] flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary w-full">Get Started Free</button>
            </div>

            {/* Pro */}
            <div className="card glow-ring p-8 relative">
              <div className="text-sm font-semibold text-[#8b5cf6] uppercase tracking-wider mb-4">Pro Bundle</div>
              <div className="text-4xl font-black mb-1">$99</div>
              <div className="text-sm text-[#64748b] mb-8">one-time</div>
              <ul className="space-y-3 mb-8">
                {['SOUL Pack: Pro (all templates)', 'Premium Dashboard (1 month)', 'Private Discord channel', 'Priority email support', 'Future product discounts'].map(f => (
                  <li key={f} className="text-sm text-[#94a3b8] flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Get Pro Bundle</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20 px-6 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Questions?</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-semibold mb-3">{faq.q}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 border-t border-[#1e293b]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-sm text-[#64748b]">Hermes Agent Store — Built on Hermes Agent</span>
          </div>
          <div className="flex gap-6 text-sm text-[#64748b]">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </main>
  )
}