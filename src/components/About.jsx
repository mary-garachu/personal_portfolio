import { about } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="section two-col" aria-labelledby="about-title">
      <SectionHeading id="about-title">About me</SectionHeading>
      <div className="two-col-content about-body">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
