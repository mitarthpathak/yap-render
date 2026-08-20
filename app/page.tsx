'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  AudioLines,
  Check,
  Globe2,
  Hand,
  Menu,
  Mic,
  Move3d,
  Play,
  Sparkles,
  X,
} from 'lucide-react'

const features = [
  { icon: Mic, title: 'Speak naturally', text: 'Yap captures the rhythm, intent, and nuance of everyday speech.' },
  { icon: Move3d, title: 'See every sign', text: 'Render turns language into expressive Indian Sign Language in real time.' },
  { icon: Globe2, title: 'Reach more people', text: 'Make classrooms, clinics, and conversations feel open to everyone.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Yap and Render home">
          <span className="brand-mark"><Hand size={18} strokeWidth={2.5} /></span>
          <span>yap<span className="brand-slash">/</span>render</span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#why-it-matters" onClick={() => setMenuOpen(false)}>Why it matters</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <a className="nav-cta" href="#try-it">Try the demo <ArrowRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-dot" /> Language, without limits</p>
          <h1>Say it.<br /><em>See it.</em><br />Share it.</h1>
          <p className="hero-lede">Yap & Render translates spoken language into Indian Sign Language, so more people can be part of the conversation.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#try-it">See it in action <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#how-it-works">Explore the idea <ArrowRight size={15} /></a>
          </div>
          <p className="hero-note"><Sparkles size={14} /> Built with and for the Indian Deaf community</p>
        </div>

        <div className="avatar-stage reveal" id="try-it">
          <div className="stage-label"><span className="live-dot" /> Live translation</div>
          <div className="stage-grid" aria-hidden="true" />
          <div className="avatar-orbit orbit-one" aria-hidden="true" />
          <div className="avatar-orbit orbit-two" aria-hidden="true" />
          <div className="avatar-placeholder" role="img" aria-label="3D avatar preview placeholder">
            <div className="avatar-halo" />
            <div className="avatar-head"><div className="avatar-face"><span /><span /></div></div>
            <div className="avatar-neck" />
            <div className="avatar-body"><div className="avatar-shirt-mark">Y<span>/</span>R</div></div>
            <div className="avatar-hand left-hand"><Hand size={52} /></div>
            <div className="avatar-hand right-hand"><Hand size={45} /></div>
          </div>
          <div className="stage-caption"><span>Namaste</span><small>नमस्ते</small></div>
          <div className="stage-controls">
            <button onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? 'Pause demo' : 'Play demo'} className="control-play">{isPlaying ? <span className="pause-bars" /> : <Play size={15} fill="currentColor" />}</button>
            <div className="control-line"><span style={{ width: isPlaying ? '68%' : '32%' }} /></div>
            <span className="control-time">0:08</span>
          </div>
          <div className="stage-canvas-note"><Move3d size={13} /> 3D avatar canvas</div>
        </div>
      </section>

      <section className="marquee-band" aria-label="Product promise"><div>VOICE <span>→</span> SIGN <span>→</span> UNDERSTANDING <span>→</span> BELONGING <span>→</span> VOICE <span>→</span> SIGN</div></section>

      <section className="intro section-pad reveal" id="how-it-works">
        <div className="section-kicker">The simple idea</div>
        <div className="intro-content"><h2>Communication should never need a <em>middle ground.</em></h2><div><p>Most translation tools move between languages. We are building a bridge between ways of communicating.</p><a className="text-link" href="#why-it-matters">Why we&apos;re building this <ArrowRight size={15} /></a></div></div>
      </section>

      <section className="feature-section section-pad" id="why-it-matters">
        <div className="feature-heading reveal"><p className="eyebrow"><span className="eyebrow-dot" /> From yap to render</p><h2>One conversation.<br /><em>Two ways to be heard.</em></h2></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text }, index) => <article className="feature-card reveal" key={title}><span className="feature-number">0{index + 1}</span><div className="feature-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="proof-band reveal"><div><strong>01</strong><span>shared language</span></div><div><strong>∞</strong><span>possibilities to connect</span></div><div><strong>100%</strong><span>human at the centre</span></div></section>

      <section className="final-cta section-pad reveal" id="about"><div className="cta-symbol"><AudioLines size={28} /></div><p className="eyebrow">A more connected future</p><h2>Let&apos;s make room<br />for <em>every voice.</em></h2><p>We&apos;re early, curious, and building in the open.</p><a className="button button-coral" href="mailto:hello@yapandrender.com">Say hello <ArrowRight size={17} /></a></section>

      <footer className="footer"><a className="brand" href="#top"><span className="brand-mark"><Hand size={16} /></span><span>yap<span className="brand-slash">/</span>render</span></a><span>Made for more ways to connect.</span><span>© 2026 Yap & Render</span></footer>
    </main>
  )
}
