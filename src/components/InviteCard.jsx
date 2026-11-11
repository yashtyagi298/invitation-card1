import { event } from "../data/event";
import { FloralCluster, GoldSprig } from "./Floral";

const date = new Date(event.date);
const fmt = (options) => date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", ...options });
const month = fmt({ month: "long" }).toUpperCase();
const weekday = fmt({ weekday: "long" }).toUpperCase();
const day = fmt({ day: "numeric" });
const year = fmt({ year: "numeric" });
const time = fmt({ hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase();

function PalaceIllustration() {
  return (
    <svg className="palace-art" viewBox="0 0 520 200" role="img" aria-label="Illustration of a royal palace">
      <path d="M28 188h464M60 177h400M88 165h344" className="palace-line" />
      <path d="M104 165V96q0-32 35-48 35 16 35 48v69M346 165V96q0-32 35-48 35 16 35 48v69" className="palace-dome" />
      <path d="M126 91q13-35 26 0v74h-26zM368 91q13-35 26 0v74h-26z" className="palace-fill" />
      <path d="M90 99h88M332 99h88M138 49V34m0 0-8 8m8-8 8 8m242 7V34m0 0-8 8m8-8 8 8" className="palace-line" />
      <path d="M150 165V119q0-22 22-22h176q22 0 22 22v46M172 165v-44q0-12 12-12h152q12 0 12 12v44" className="palace-line" />
      <path d="M215 165v-33q0-34 45-54 45 20 45 54v33M232 165v-31q0-20 28-34 28 14 28 34v31" className="palace-dome" />
      <path d="M260 78V58m0 0-8 8m8-8 8 8M208 165v-28q0-18 17-18v46m87 0v-46q17 0 17 18v28" className="palace-line" />
      <path d="M36 185c22-18 42-17 62 0m324 0c20-17 40-18 62 0" className="palace-flower" />
      <circle cx="70" cy="172" r="3" className="palace-dot"/><circle cx="450" cy="172" r="3" className="palace-dot" />
    </svg>
  );
}

export default function InviteCard() {
  return (
    <article className="invite-card rise">
      <div className="card-pattern" aria-hidden="true" />
      <div className="card-frame" aria-hidden="true"><span /><span /></div>
      <FloralCluster className="card-floral floral-left" />
      <FloralCluster className="card-floral floral-right" />
      <GoldSprig className="card-sprig sprig-left" />
      <GoldSprig className="card-sprig sprig-right" />

      <div className="invitation-copy">
        <div className="crest"><span>✦</span><b>ॐ</b><span>✦</span></div>
        <p className="eyebrow">TOGETHER WITH THEIR FAMILIES</p>
        <span className="invitation-ribbon">THE WEDDING OF</span>
        <h1 className="couple-names"><span>{event.name1}</span><em>&amp;</em><span>{event.name2}</span></h1>
        <div className="gold-divider"><i />❧<i /></div>
        <p className="invite-message">cordially invite you to join them<br />for their joyful celebration</p>

        <p className="event-month">{month}</p>
        <div className="date-row">
          <span className="date-side">{weekday}</span>
          <strong>{day}</strong>
          <span className="date-side">AT {time}</span>
        </div>
        <p className="event-year">{year}</p>

        <div className="venue-block">
          <p className="venue-label">THE WEDDING CELEBRATION</p>
          <p className="venue-name">{event.venue.name}</p>
          <p className="venue-address">{event.venue.address}</p>
        </div>
        <p className="family-signoff">{event.family}</p>
        <PalaceIllustration />
      </div>
      <span className="floating-petal petal-one" aria-hidden="true">✿</span>
      <span className="floating-petal petal-two" aria-hidden="true">✿</span>
    </article>
  );
}
