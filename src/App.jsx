import { useRef, useState } from "react";
import { Music2, Pause, Volume2, MapPin, Phone, Share2 } from "lucide-react";
import InviteCard from "./components/InviteCard";
import Details from "./components/Details";
import { event } from "./data/event";

const reverieTrack = "https://www.scottbuckley.com.au/library/wp-content/uploads/2020/03/sb_reverie.mp3";

function PalaceGate({ opening, onOpen }) {
  return (
    <section className={`gate-scene ${opening ? "gate-scene-opening" : ""}`} aria-label="Palace entrance">
      <div className="gate-sky" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span></div>
      <svg className="gate-palace" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="rose-stone" x1="0" x2="1"><stop stopColor="#d4b8d5"/><stop offset=".18" stopColor="#f9edf4"/><stop offset=".48" stopColor="#e7d2e4"/><stop offset=".78" stopColor="#fcf0f5"/><stop offset="1" stopColor="#d1b2d3"/></linearGradient>
          <linearGradient id="pillar-light" x1="0" x2="1"><stop stopColor="#a57ea6"/><stop offset=".16" stopColor="#f5e5f1"/><stop offset=".44" stopColor="#d5b5d5"/><stop offset=".74" stopColor="#fff5f8"/><stop offset="1" stopColor="#9b749f"/></linearGradient>
          <linearGradient id="arch-night" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#553b61"/><stop offset=".52" stopColor="#9b709b"/><stop offset="1" stopColor="#392c4b"/></linearGradient>
          <linearGradient id="floor-glow" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ead9e7" stopOpacity="0"/><stop offset=".25" stopColor="#d9c5df" stopOpacity=".7"/><stop offset="1" stopColor="#9e81a8" stopOpacity=".86"/></linearGradient>
          <radialGradient id="lantern-glow"><stop stopColor="#fff5d6" stopOpacity=".95"/><stop offset="1" stopColor="#fff5d6" stopOpacity="0"/></radialGradient>
          <filter id="palace-soft-shadow" x="-30%" y="-20%" width="160%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="13"/><feOffset dy="12"/><feComponentTransfer><feFuncA type="linear" slope=".25"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="stone-grain"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="2" seed="9"/><feColorMatrix values=".3 0 0 0 .65 .3 0 0 0 .43 .3 0 0 0 .65 0 0 0 .13 0"/></filter>
          <g id="jharokha" fill="none" stroke="#956e9b" strokeWidth="3">
            <path d="M-76 0V-86Q-76-149 0-184Q76-149 76-86V0M-58 0V-81Q-58-130 0-159Q58-130 58-81V0"/>
            <path d="M-82-3H82M-69-40H69M-58-72H58M-45-99H45"/>
            <path d="M-64-3V-40M-43-3V-40M-21-3V-40M0-3V-40M21-3V-40M43-3V-40M64-3V-40" strokeWidth="2"/>
            <path d="M-37-159Q0-193 37-159M-22-171Q0-188 22-171" stroke="#bd91b7"/>
          </g>
          <g id="pillar" filter="url(#palace-soft-shadow)">
            <path d="M-38 0V-246Q-38-275 0-275Q38-275 38-246V0Z" fill="url(#pillar-light)" stroke="#a17da5" strokeWidth="3"/>
            <path d="M-48-273H48V-251H-48ZM-45-246H45V-235H-45ZM-45-12H45V0H-45Z" fill="url(#rose-stone)" stroke="#9b759f" strokeWidth="3"/>
            <path d="M-24-232V-27M23-232V-27" stroke="#fff8fa" strokeOpacity=".55" strokeWidth="3"/>
            <path d="M-35-270Q0-306 35-270" fill="none" stroke="#b58bb0" strokeWidth="5"/>
          </g>
          <g id="lantern" stroke="#765a77" strokeWidth="3" fill="none">
            <path d="M0 0V28M-17 28H17M-13 31L-21 67Q0 80 21 67L13 31ZM-11 43H11M-15 58H15M0 31V72"/>
            <path d="M-10 27Q0 16 10 27M-7 7L0 0 7 7"/>
          </g>
        </defs>
        <g opacity=".72" fill="url(#rose-stone)" stroke="#a27da5" strokeWidth="3">
          <path d="M95 790V366Q95 316 146 316Q197 316 197 366V790Z"/><path d="M1240 790V366Q1240 316 1291 316Q1342 316 1342 366V790Z"/>
          <path d="M228 786V340Q228 303 264 303Q300 303 300 340V786ZM1140 786V340Q1140 303 1176 303Q1212 303 1212 340V786Z"/>
          <path d="M41 365H251M1189 365H1399M179 328H349M1091 328H1261"/>
        </g>
        <g fill="#e8d5e8" stroke="#a27da5" strokeWidth="3" opacity=".85">
          <path d="M63 316Q146 177 229 316Z"/><path d="M1208 316Q1291 177 1374 316Z"/>
          <path d="M204 303Q264 203 324 303Z"/><path d="M1116 303Q1176 203 1236 303Z"/>
          <path d="M145 180V140M1291 180V140M264 208V173M1176 208V173" strokeWidth="4"/>
          <path d="M145 140l-13 17h26zM1291 140l-13 17h26zM264 173l-12 15h24zM1176 173l-12 15h24z"/>
        </g>
        <g opacity=".63" fill="none" stroke="#a17aa2" strokeWidth="5">
          <path d="M351 789V373Q351 191 720 114Q1089 191 1089 373V789"/>
          <path d="M384 789V378Q384 224 720 151Q1056 224 1056 378V789" stroke="#f7e9f3" strokeWidth="3"/>
          <path d="M421 786V390Q421 259 720 190Q1019 259 1019 390V786" stroke="#c39bc1" strokeWidth="2"/>
        </g>
        <g opacity=".7" fill="url(#pillar-light)" stroke="#9e7aa2" strokeWidth="3">
          <path d="M344 782V408Q344 387 365 387Q386 387 386 408V782Z"/><path d="M1054 782V408Q1054 387 1075 387Q1096 387 1096 408V782Z"/>
          <path d="M329 399H401V414H329ZM1039 399H1111V414H1039Z"/>
        </g>
        <g opacity=".82"><use href="#jharokha" transform="translate(146 571) scale(1.02)"/><use href="#jharokha" transform="translate(1291 571) scale(1.02)"/><use href="#jharokha" transform="translate(264 514) scale(.8)"/><use href="#jharokha" transform="translate(1176 514) scale(.8)"/></g>
        <g opacity=".75" fill="none" stroke="#a57da7" strokeWidth="2"><path d="M78 632H321M1119 632H1362M56 702H335M1105 702H1384M201 582H329M1111 582H1239"/><path d="M190 680q-35-58 0-116 35 58 0 116ZM1250 680q-35-58 0-116 35 58 0 116Z"/></g>
        <g opacity=".7"><ellipse cx="313" cy="603" rx="65" ry="102" fill="url(#lantern-glow)"/><ellipse cx="1127" cy="603" rx="65" ry="102" fill="url(#lantern-glow)"/><use href="#lantern" transform="translate(313 515) scale(1.15)"/><use href="#lantern" transform="translate(1127 515) scale(1.15)"/></g>
        <g transform="translate(720 900)" opacity=".86"><use href="#pillar" transform="translate(-470 0) scale(1.45)"/><use href="#pillar" transform="translate(-340 0) scale(1.45)"/><use href="#pillar" transform="translate(340 0) scale(1.45)"/><use href="#pillar" transform="translate(470 0) scale(1.45)"/></g>
        <rect y="700" width="1440" height="200" fill="url(#floor-glow)"/>
        <path d="M720 690L310 900M720 690L480 900M720 690L960 900M720 690L1130 900M0 785H1440M0 835H1440M0 872H1440" stroke="#f7e8f3" strokeOpacity=".37" strokeWidth="2"/>
        <rect x="130" y="270" width="1180" height="570" filter="url(#stone-grain)" opacity=".2"/>
      </svg>
      <div className="gate-portal">
        <div className="portal-arch"><div className="portal-light"><span className="portal-glow">✧</span><span className="portal-hint">A celebration awaits within</span></div></div>
        <button className="gate-door door-left" onClick={onOpen} aria-label="Open the left palace gate"><svg className="door-carving" viewBox="0 0 150 360" aria-hidden="true"><path d="M14 354V94Q14 32 75 14Q136 32 136 94V354M25 354V98Q25 44 75 27Q125 44 125 98V354M34 350V102Q34 55 75 39Q116 55 116 102V350"/><path d="M35 118Q75 68 115 118M35 272Q75 325 115 272M46 145Q75 103 104 145Q75 174 46 145ZM46 246Q75 205 104 246Q75 275 46 246Z"/><path d="M75 132C46 151 46 185 75 198C104 185 104 151 75 132ZM75 193C46 212 46 237 75 255C104 237 104 212 75 193Z"/><path d="M75 139v51m0 11v48M55 160q20 14 40 0M55 220q20-15 40 0M25 303h100M25 86h100"/><circle cx="75" cy="73" r="4"/><circle cx="75" cy="294" r="4"/></svg><span className="door-medallion">✦</span><span className="door-handle"/></button>
        <button className="gate-door door-right" onClick={onOpen} aria-label="Open the right palace gate"><svg className="door-carving" viewBox="0 0 150 360" aria-hidden="true"><path d="M14 354V94Q14 32 75 14Q136 32 136 94V354M25 354V98Q25 44 75 27Q125 44 125 98V354M34 350V102Q34 55 75 39Q116 55 116 102V350"/><path d="M35 118Q75 68 115 118M35 272Q75 325 115 272M46 145Q75 103 104 145Q75 174 46 145ZM46 246Q75 205 104 246Q75 275 46 246Z"/><path d="M75 132C46 151 46 185 75 198C104 185 104 151 75 132ZM75 193C46 212 46 237 75 255C104 237 104 212 75 193Z"/><path d="M75 139v51m0 11v48M55 160q20 14 40 0M55 220q20-15 40 0M25 303h100M25 86h100"/><circle cx="75" cy="73" r="4"/><circle cx="75" cy="294" r="4"/></svg><span className="door-medallion">✦</span><span className="door-handle"/></button>
        {!opening && <button className="gate-invitation-button" onClick={onOpen}><span className="button-sparkle">✧</span> Open the palace gates <span className="button-arrow">→</span></button>}
      </div>
      <div className="gate-welcome"><span className="gate-kicker">YOU ARE CORDIALLY INVITED</span><h1>Step into a royal celebration</h1><p>Tap the gates to enter</p><span className="gate-flourish">❧ &nbsp; ✦ &nbsp; ❧</span></div>
    </section>
  );
}

function MusicButton({ playing, onToggle }) {
  return <div className="music-control-wrap">
    <button className="music-button" onClick={onToggle} aria-pressed={playing} aria-label={playing ? "Pause wedding music" : "Play wedding music"}>
      {playing ? <Pause size={15} /> : <Music2 size={15} />}
      <span>{playing ? "Pause the melody" : "Play a soft melody"}</span>
      {playing && <span className="sound-waves" aria-hidden="true"><i/><i/><i/></span>}
      {!playing && <Volume2 size={14} className="music-volume" />}
    </button>
    <a className="music-attribution" href="https://www.scottbuckley.com.au/library/reverie/" target="_blank" rel="noreferrer">“Reverie” by Scott Buckley · released under CC-BY 4.0 · scottbuckley.com.au</a>
  </div>;
}

function MobileActionBar() {
  const [shareState, setShareState] = useState("Share");
  const shareInvite = async () => {
    const invite = { title: "Vaibhav & Shrinkhala · Wedding Invitation", text: "Join us for Vaibhav and Shrinkhala’s wedding celebration.", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(invite);
      else {
        await navigator.clipboard.writeText(invite.url);
        setShareState("Link copied");
        window.setTimeout(() => setShareState("Share"), 2200);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        try {
          await navigator.clipboard.writeText(invite.url);
          setShareState("Link copied");
          window.setTimeout(() => setShareState("Share"), 2200);
        } catch { /* The share sheet is optional; keep the invitation usable if unavailable. */ }
      }
    }
  };

  return <nav className="mobile-action-bar" aria-label="Invitation quick actions">
    <a href={event.venue.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18}/><span>Directions</span></a>
    <a href={`tel:${event.contact}`}><Phone size={18}/><span>Call family</span></a>
    <button onClick={shareInvite}><Share2 size={18}/><span>{shareState}</span></button>
  </nav>;
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [opening, setOpening] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(reverieTrack);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.32;
    }
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const enterPalace = () => {
    if (opening) return;
    setOpening(true);
    playMusic();
    window.setTimeout(() => setEntered(true), 1050);
  };

  const toggleMusic = () => {
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
    } else {
      playMusic();
    }
  };

  return (
    <main className={`page-shell ${entered ? "page-entered" : ""}`}>
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      {!entered && <PalaceGate opening={opening} onOpen={enterPalace} />}
      {entered && <div className="invitation-experience">
        <MusicButton playing={playing} onToggle={toggleMusic} />
        <div className="invitation-wrap"><InviteCard /><Details /></div>
        <MobileActionBar />
      </div>}
    </main>
  );
}
