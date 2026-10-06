// The only script on the site: keep the footer year current.
// The HTML already contains a year, so the page reads fine without JS.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
