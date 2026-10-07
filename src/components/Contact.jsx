import { contact } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-dot" aria-hidden="true" />
        <h2 id="contact-title" className="contact-title">
          {contact.title}
        </h2>
        <p className="contact-lede">{contact.lede}</p>
        <a href={`mailto:${contact.email}`} className="btn btn-primary contact-email">
          {contact.email}
        </a>
        <div className="contact-links">
          {contact.links.map((link) =>
            link.download ? (
              <a key={link.label} href={link.url} download="Mary-Muthoni-Resume.pdf" className="contact-pill">
                {link.label}
              </a>
            ) : (
              <a key={link.label} href={link.url} target="_blank" rel="noopener" className="contact-pill">
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
