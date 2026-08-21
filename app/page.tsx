'use client'

import { type FormEvent, useEffect, useRef, useState } from 'react'
import { AvatarPlayer } from '@/components/avatar/AvatarPlayer'
import {
  ArrowDownRight,
  ArrowRight,
  AudioLines,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Hand,
  LayoutDashboard,
  LogOut,
  Maximize2,
  Menu,
  Mic,
  Minimize2,
  Move3d,
  Play,
  Square,
  Sparkles,
  MicOff,
  LogIn,
  UserPlus,
  UserRound,
  X,
} from 'lucide-react'

type SpeechRecognitionResult = ArrayLike<{ transcript: string }> & { isFinal?: boolean }
type SpeechRecognitionConstructor = new () => {
  continuous: boolean
  interimResults: boolean
  lang: string
  onstart: (() => void) | null
  onend: (() => void) | null
  onerror: (() => void) | null
  onresult: ((event: { resultIndex: number; results: ArrayLike<SpeechRecognitionResult> }) => void) | null
  start: () => void
  stop: () => void
  abort: () => void
}

type LocalAccount = { name: string; email: string }

const features = [
  { icon: Mic, title: 'Speak naturally', text: 'Yap captures the rhythm, intent, and nuance of everyday speech.' },
  { icon: Move3d, title: 'See every sign', text: 'Render turns language into expressive Indian Sign Language in real time.' },
  { icon: Globe2, title: 'Reach more people', text: 'Make classrooms, clinics, and conversations feel open to everyone.' },
]

const quickPhrases = ['YOU', 'HOME', 'TIME', 'PERSON', 'HELLO', 'HELP', 'THANK YOU', 'YES', 'NO', 'PLEASE', 'SORRY', 'WELCOME', 'GOOD', 'BAD', 'STOP', 'WAIT', 'COME', 'GO', 'WANT', 'NEED', 'LIKE', 'KNOW', 'UNDERSTAND', 'ASK', 'DRINK', 'EAT', 'WATER', 'GIVE', 'TAKE', 'SHOW', 'LOOK', 'SEE', 'LISTEN', 'TALK', 'START', 'FINISH', 'AGAIN', 'SLEEP', 'TOILET', 'DOCTOR', 'HOSPITAL', 'PAIN', 'SCHOOL', 'CLASS', 'TEACHER', 'STUDENT', 'BOOK']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [translation, setTranslation] = useState('YOU HOME')
  const [avatarPhrase, setAvatarPhrase] = useState('YOU HOME')
  const [avatarModel, setAvatarModel] = useState<'default' | 'human'>('default')
  const [requestId, setRequestId] = useState(0)
  const [stopId, setStopId] = useState(0)
  const [resetId, setResetId] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [avatarState, setAvatarState] = useState<'loading' | 'ready' | 'signing'>('loading')
  const [speechSupported, setSpeechSupported] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [liveMode, setLiveMode] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [account, setAccount] = useState<LocalAccount | null>(null)
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const [dashboardOpen, setDashboardOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const recognitionRef = useRef<InstanceType<SpeechRecognitionConstructor> | null>(null)
  const liveModeRef = useRef(false)
  const quickPhrasesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const savedAccount = window.localStorage.getItem('yap-render-account')
    if (savedAccount) setAccount(JSON.parse(savedAccount) as LocalAccount)
  }, [])

  useEffect(() => {
    if (!isMaximized) return
    const exitMaximizedView = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMaximized(false)
    }
    window.addEventListener('keydown', exitMaximizedView)
    return () => window.removeEventListener('keydown', exitMaximizedView)
  }, [isMaximized])

  useEffect(() => {
    const speechWindow = window as typeof window & {
      SpeechRecognition?: SpeechRecognitionConstructor
      webkitSpeechRecognition?: SpeechRecognitionConstructor
    }
    const SpeechRecognition = speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition
    if (!SpeechRecognition) return

    setSpeechSupported(true)
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-IN'
    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => {
      setIsListening(false)
      if (liveModeRef.current) window.setTimeout(() => {
        try { recognition.start() } catch { /* The recognizer is already restarting. */ }
      }, 220)
    }
    recognition.onerror = () => setIsListening(false)
    recognition.onresult = (event) => {
      let transcript = ''
      for (let index = 0; index < event.results.length; index += 1) transcript += event.results[index][0]?.transcript || ''
      setTranslation(transcript.trim())
      if (!liveModeRef.current) return
      let finalChunk = ''
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        if (event.results[index].isFinal) finalChunk += event.results[index][0]?.transcript || ''
      }
      if (finalChunk.trim()) {
        setAvatarPhrase(finalChunk.trim())
        setRequestId((current) => current + 1)
      }
    }
    recognitionRef.current = recognition

    return () => {
      recognition.abort()
      recognitionRef.current = null
    }
  }, [])

  const runTranslation = () => {
    if (translation.trim()) {
      setAvatarPhrase(translation)
      setRequestId((current) => current + 1)
    }
  }

  const toggleVoiceInput = () => {
    const recognition = recognitionRef.current
    if (!recognition) return
    if (isListening) recognition.stop()
    else recognition.start()
  }

  const toggleLiveMode = () => {
    const nextMode = !liveMode
    liveModeRef.current = nextMode
    setLiveMode(nextMode)
    const recognition = recognitionRef.current
    if (!recognition) return
    if (nextMode && !isListening) recognition.start()
    if (!nextMode && isListening) recognition.stop()
  }

  const stopTranslation = () => {
    liveModeRef.current = false
    setLiveMode(false)
    if (isListening) recognitionRef.current?.stop()
    setStopId((current) => current + 1)
  }

  const scrollQuickPhrases = (direction: -1 | 1) => {
    quickPhrasesRef.current?.scrollBy({ left: direction * 260, behavior: 'smooth' })
  }

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setAuthOpen(true)
  }

  const submitAuth = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email') || '')
    const name = authMode === 'signup' ? String(data.get('name') || '') : email.split('@')[0]
    const nextAccount = { name: name || 'Member', email }
    window.localStorage.setItem('yap-render-account', JSON.stringify(nextAccount))
    setAccount(nextAccount)
    setAuthOpen(false)
  }

  const signOut = () => {
    window.localStorage.removeItem('yap-render-account')
    setAccount(null)
    setAccountMenuOpen(false)
    setDashboardOpen(false)
    setAuthOpen(false)
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Yap and Render home">
          <span className="brand-mark"><img src="/yap-render-logo-mark.png" alt="" /></span>
          <span>yap &amp; render</span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#why-it-matters" onClick={() => setMenuOpen(false)}>Why it matters</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <div className="auth-actions">
          {account ? <div className="account-menu"><button className="account-button" onClick={() => setAccountMenuOpen((open) => !open)} aria-expanded={accountMenuOpen} aria-haspopup="menu"><UserRound size={15} /> {account.name}</button>{accountMenuOpen && <div className="account-dropdown" role="menu"><button type="button" role="menuitem" onClick={() => { setAccountMenuOpen(false); setDashboardOpen(true) }}><LayoutDashboard size={15} /> Dashboard</button><button type="button" role="menuitem" onClick={signOut}><LogOut size={15} /> Sign out</button></div>}</div> : <><button className="auth-link" onClick={() => openAuth('signin')}>Sign in</button><button className="nav-cta" onClick={() => openAuth('signup')}>Sign up <UserPlus size={15} /></button></>}
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {authOpen && <div className="auth-backdrop" role="presentation" onMouseDown={() => setAuthOpen(false)}>
        <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="auth-close" onClick={() => setAuthOpen(false)} aria-label="Close account dialog"><X size={18} /></button>
          <span className="auth-mark"><Hand size={18} /></span>
          <p className="eyebrow">Yap / Render account</p>
          <h2 id="auth-title">{account ? 'You are signed in.' : authMode === 'signup' ? 'Create your account.' : 'Welcome back.'}</h2>
          {account ? <><p className="auth-copy">Signed in as {account.email}</p><button className="auth-submit" onClick={signOut}>Sign out</button></> : <form onSubmit={submitAuth} className="auth-form">
            {authMode === 'signup' && <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>}
            <label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
            <label>Password<input name="password" type="password" required minLength={6} autoComplete={authMode === 'signup' ? 'new-password' : 'current-password'} placeholder="At least 6 characters" /></label>
            <button className="auth-submit" type="submit">{authMode === 'signup' ? 'Create account' : 'Sign in'} <LogIn size={15} /></button>
          </form>}
          {!account && <button className="auth-switch" onClick={() => setAuthMode(authMode === 'signup' ? 'signin' : 'signup')}>{authMode === 'signup' ? 'Already have an account? Sign in' : 'New here? Create an account'}</button>}
        </section>
      </div>}

      {dashboardOpen && account && <div className="auth-backdrop dashboard-backdrop" role="presentation" onMouseDown={() => setDashboardOpen(false)}>
        <section className="dashboard-modal" role="dialog" aria-modal="true" aria-labelledby="dashboard-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="auth-close" onClick={() => setDashboardOpen(false)} aria-label="Close dashboard"><X size={18} /></button>
          <div className="dashboard-heading"><span className="auth-mark"><LayoutDashboard size={18} /></span><div><p className="eyebrow">Your dashboard</p><h2 id="dashboard-title">Hello, {account.name}.</h2></div></div>
          <div className="dashboard-profile"><span className="dashboard-avatar">{account.name.charAt(0).toUpperCase()}</span><div><strong>{account.name}</strong><span>{account.email}</span></div></div>
          <div className="dashboard-stats" aria-label="Account status"><div><span>Account</span><strong>Active</strong></div><div><span>Translator</span><strong>Ready</strong></div><div><span>Voice language</span><strong>English (IN)</strong></div></div>
          <div className="dashboard-details"><p>Account details</p><dl><div><dt>Name</dt><dd>{account.name}</dd></div><div><dt>Email</dt><dd>{account.email}</dd></div></dl></div>
          <button className="auth-submit" onClick={() => { setDashboardOpen(false); document.getElementById('try-it')?.scrollIntoView({ behavior: 'smooth' }) }}>Open translator <ArrowDownRight size={15} /></button>
        </section>
      </div>}

      <section className={isMaximized ? 'hero section-pad is-demo-maximized' : 'hero section-pad'} id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-dot" /> Language, without limits</p>
          <h1 className="hero-title"><span>Say it.</span><span><em>See it.</em></span><span>Share it.</span></h1>
          <p className="hero-lede">Yap & Render translates spoken language into Indian Sign Language, so more people can be part of the conversation.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#try-it">See it in action <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#how-it-works">Explore the idea <ArrowRight size={15} /></a>
          </div>
          <div className="hero-highlights" aria-label="Yap and Render highlights"><span>ISL-first</span><span>Real-time signs</span><span>Human connection</span></div>
          <p className="hero-note"><Sparkles size={14} /> Built with and for the Indian Deaf community</p>
        </div>

        <div className="avatar-stage reveal" id="try-it">
          <div className="terminal-window" aria-label="Yap and Render live translation workspace">
            <div className="terminal-chrome"><span className="chrome-dot red" /><span className="chrome-dot yellow" /><span className="chrome-dot green" /><span className="terminal-title">yap / render</span><button
              type="button"
              className="terminal-maximize-toggle"
              onClick={() => setIsMaximized((maximized) => !maximized)}
              aria-label={isMaximized ? 'Restore avatar canvas size' : 'Maximize avatar canvas'}
              aria-pressed={isMaximized}
              title={isMaximized ? 'Restore size (Esc)' : 'Maximize canvas'}
            >
              {isMaximized ? <Minimize2 size={16} strokeWidth={1.7} /> : <Maximize2 size={16} strokeWidth={1.7} />}
            </button></div>
            <div className={isMaximized ? 'terminal-body avatar-terminal-body is-maximized' : 'terminal-body avatar-terminal-body'}>
              <div className="avatar-workspace">
              <div
                className={isMaximized ? 'avatar-canvas-shell is-maximized' : 'avatar-canvas-shell'}
                aria-label="Interactive 3D avatar canvas ready for Indian Sign Language playback"
                onTransitionEnd={(event) => {
                  if (event.propertyName === 'height') window.dispatchEvent(new Event('resize'))
                }}
              >
                <AvatarPlayer phrase={avatarPhrase} requestId={requestId} model={avatarModel} appendToQueue={liveMode} stopId={stopId} resetId={resetId} speed={speed} onStateChange={setAvatarState} />
                <span className="canvas-badge"><span className="live-dot" /> ISL AVATAR · {avatarState}</span>
                <div className="avatar-selector" role="group" aria-label="Choose avatar"><span>AVATAR</span><button type="button" className={avatarModel === 'default' ? 'is-selected' : ''} onClick={() => setAvatarModel('default')} aria-pressed={avatarModel === 'default'}>Default</button><button type="button" className={avatarModel === 'human' ? 'is-selected' : ''} onClick={() => setAvatarModel('human')} aria-pressed={avatarModel === 'human'}>Human</button></div>
              </div>
              <aside className="avatar-command-panel" aria-label="Avatar playback and sign commands">
                <div className="avatar-command-input">
                  <input value={translation} onChange={(event) => setTranslation(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && runTranslation()} aria-label="Text to translate into Indian Sign Language" placeholder="Type a message…" />
                  <button type="button" onClick={toggleVoiceInput} className={isListening ? 'voice-input is-listening' : 'voice-input'} aria-label={isListening ? 'Stop voice input' : 'Start voice input'} disabled={!speechSupported}>{isListening ? <MicOff size={15} /> : <Mic size={15} />}<span>{isListening ? 'Listening' : 'Voice'}</span></button>
                  <button type="button" onClick={toggleLiveMode} className={liveMode ? 'live-translation is-active' : 'live-translation'} disabled={!speechSupported}><span /> Live</button>
                </div>
                <div className="avatar-command-actions"><button type="button" onClick={stopTranslation} className="terminal-play terminal-stop" aria-label="Stop translation" title="Stop translation"><Square size={11} fill="currentColor" /></button><button type="button" onClick={() => setResetId((c) => c + 1)} className="terminal-play terminal-stop" aria-label="Reset avatar" title="Reset avatar to rest pose"><span aria-hidden="true">↺</span></button><label className="avatar-speed" title="Animation speed">Speed<input type="range" min="0.5" max="3" step="0.25" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />{speed}×</label></div>
                <div className="avatar-command-list" aria-label="Try a supported sign">
                  {quickPhrases.map((word) => <button type="button" key={word} onClick={() => { setTranslation(word); setAvatarPhrase(word); setRequestId((current) => current + 1) }}>{word}</button>)}
                </div>
              </aside>
              </div>
              <div className="translator-controls">
                <input value={translation} onChange={(event) => setTranslation(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && runTranslation()} aria-label="Text to translate into Indian Sign Language" placeholder="Type a message…" />
                <button type="button" onClick={toggleVoiceInput} className={isListening ? 'voice-input is-listening' : 'voice-input'} aria-label={isListening ? 'Stop voice input' : 'Start voice input'} title={speechSupported ? (isListening ? 'Stop listening' : 'Speak your message') : 'Voice input is not supported in this browser'} disabled={!speechSupported}>
                  {isListening ? <MicOff size={15} /> : <Mic size={15} />}
                  <span>{isListening ? 'Listening' : 'Voice'}</span>
                </button>
                <button type="button" onClick={toggleLiveMode} className={liveMode ? 'live-translation is-active' : 'live-translation'} disabled={!speechSupported} title="Continuously convert final speech into ISL"><span /> Live</button>
              </div>
              <div className="terminal-footer terminal-footer-live"><button type="button" onClick={stopTranslation} className="terminal-play terminal-stop" aria-label="Stop translation"><Square size={11} fill="currentColor" /></button><button type="button" onClick={() => setResetId((c) => c + 1)} className="terminal-play terminal-stop" aria-label="Reset avatar" title="Reset avatar to rest pose" style={{marginLeft: '4px'}}>↺</button><span>{liveMode ? 'live translation is listening' : avatarState === 'signing' ? 'translation in progress' : avatarState === 'loading' ? 'loading avatar' : 'ready — words or A–Z fingerspelling'}</span><label style={{display:'flex',alignItems:'center',gap:'4px',fontSize:'11px',opacity:0.7,marginLeft:'auto'}} title="Animation speed">Speed<input type="range" min="0.5" max="3" step="0.25" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} style={{width:'60px',accentColor:'currentColor'}} />{speed}×</label><span className="terminal-time">ISL</span></div>
              <div className="quick-phrases" aria-label="Try a supported sign">
                <button type="button" className="quick-phrases-arrow" onClick={() => scrollQuickPhrases(-1)} aria-label="Show previous signs"><ChevronLeft size={15} /></button>
                <div ref={quickPhrasesRef} className="quick-phrases-track">
                  {quickPhrases.map((word) => <button key={word} onClick={() => { setTranslation(word); setAvatarPhrase(word); setRequestId((current) => current + 1) }}>{word}</button>)}
                </div>
                <button type="button" className="quick-phrases-arrow" onClick={() => scrollQuickPhrases(1)} aria-label="Show more signs"><ChevronRight size={15} /></button>
              </div>
              <div className="terminal-footer"><span className="terminal-play">{avatarState === 'signing' ? <Square size={11} fill="currentColor" /> : <Play size={14} fill="currentColor" />}</span><span>{avatarState === 'signing' ? 'translation in progress' : avatarState === 'loading' ? 'loading avatar' : 'ready — words or A–Z fingerspelling'}</span><span className="terminal-time">ISL</span></div>
            </div>
          </div>
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

      <section className="final-cta section-pad reveal" id="about"><div className="cta-symbol"><AudioLines size={28} /></div><p className="eyebrow">A more connected future</p><h2>Let&apos;s make room<br />for <em>every voice.</em></h2><p>We&apos;re early, curious, and building in the open.</p><a className="button button-coral" href="mailto:mpathak6207@gmail.com?subject=Yap%20%26%20Render%20hello">Say hello <ArrowRight size={17} /></a></section>

      <footer className="footer"><a className="brand" href="#top" aria-label="Yap and Render home"><span className="brand-mark"><img src="/yap-render-logo-mark.png" alt="" /></span><span>yap &amp; render</span></a><span>Made for more ways to connect.</span><span>© 2026 Yap & Render</span></footer>
    </main>
  )
}
