import { MapPin, ExternalLink, Sparkles, Phone, PartyPopper } from "lucide-react";
import { event } from "../data/event";
import Countdown from "./Countdown";

const mapsUrl = event.venue.mapsUrl;

export default function Details({ onCelebrate }) {
  return (
    <section className="details-panel rise">
      <div className="details-ornament" aria-hidden="true">✦</div>
      <p className="eyebrow">A DAY TO REMEMBER</p>
      <h2>Until we celebrate</h2>
      <Countdown />
      <div className="details-divider"><span>❧</span></div>
      <div className="venue-detail">
        <span className="detail-icon"><MapPin size={20} /></span>
        <div><p className="venue-label">JOIN US AT</p><strong>{event.venue.name}</strong><p>{event.venue.address}</p></div>
      </div>
      <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-button">
        <MapPin size={17} /> Get directions <ExternalLink size={15} />
      </a>
      <a href={`tel:${event.contact}`} className="contact-card">
        <span className="detail-icon"><Phone size={18} /></span>
        <span className="contact-copy"><small>FOR ENQUIRIES</small><strong>{event.contact}</strong></span>
        <span className="contact-call">Call <span aria-hidden="true">↗</span></span>
      </a>
      <p className="details-note"><Sparkles size={14} /> Your presence will make our celebration complete</p>
      <button className="celebrate-button" onClick={onCelebrate}>
        <PartyPopper size={18} /> Celebrate with us <span aria-hidden="true">✦</span>
      </button>
    </section>
  );
}
