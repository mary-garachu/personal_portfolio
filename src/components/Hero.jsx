import { hero, resumeUrl } from "../data.js";

export default function Hero({ showPortrait = true }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
        <span className="tag tag-accent-2">{hero.tag}</span>
        <h1 id="hero-title" className="hero-title">
          {hero.title}
        </h1>
        <p className="hero-lede">{hero.lede}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            See my work
          </a>
          <a href={resumeUrl} download="Mary-Muthoni-Resume.pdf" className="btn btn-secondary">
            Download resume
          </a>
        </div>
      </div>
      {showPortrait && (
        <div className="hero-portrait">
          <div className="hero-dot hero-dot--top" aria-hidden="true" />
          <div className="hero-dot hero-dot--bottom" aria-hidden="true" />
          <div className="hero-photo washed">
            <img src={hero.portrait.src} alt={hero.portrait.alt} width="560" height="560" />
          </div>
        </div>
      )}
    </section>
  );
}
