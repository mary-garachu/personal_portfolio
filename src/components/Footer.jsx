import { useEffect, useState } from "react";

// The page is pre-rendered at build time, so the year in the HTML is the
// build year; update it in the browser in case the build is older.
const buildYear = new Date().getFullYear();

export default function Footer() {
  const [year, setYear] = useState(buildYear);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="site-footer-bar">
      <span>© {year} Mary Garachu</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
