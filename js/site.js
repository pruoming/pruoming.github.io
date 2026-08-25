const header = `
  <header class="site-header">
    <div class="container nav-shell">
      <a class="brand" href="index.html" aria-label="Laboratory home">
        <img class="brand-mark" src="https://cdn.websitepublisher.ai/custom/wid26375/images/hku-crest.png" alt="" width="46" height="52" style="width:46px;height:52px;object-fit:contain;background:transparent">
        <span class="brand-copy"><strong>Q-SPEC Lab</strong><span>HKU · Mechanical Engineering</span></span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-navigation"><span></span></button>
      <nav class="nav-links" id="site-navigation" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="research.html">Research</a>
        <a href="people.html">People</a>
        <a href="publications.html">Publications</a>
        <a href="news.html">News</a>
        <a href="gallery.html">Gallery</a>
      </nav>
    </div>
  </header>`;

const footer = `
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <div class="footer-title">Q-SPEC Lab</div>
        <p class="footer-meta">Laboratory of Quantum Sensing and Spectroscopy<br>Department of Mechanical Engineering · The University of Hong Kong<br>7/F, Haking Wong Building · Pokfulam Road · Hong Kong</p>
      </div>
      <ul class="footer-links">
        <li><a href="https://scholar.google.com.hk/citations?user=id7EmzYAAAAJ&amp;hl=zh-CN">Google Scholar</a></li>
        <li><a href="https://mech.hku.hk/">HKU ME</a></li>
      </ul>
    </div>
    <div class="container footer-bottom">© <span data-year></span> Ruoming Peng · The University of Hong Kong</div>
  </footer>`;

document.querySelector("[data-site-header]")?.replaceWith(document.createRange().createContextualFragment(header));
document.querySelector("[data-site-footer]")?.replaceWith(document.createRange().createContextualFragment(footer));

const currentPage = document.body.dataset.page;
document.querySelectorAll(".nav-links a").forEach((link) => {
  const file = new URL(link.href, window.location.href).pathname.split("/").pop() || "index.html";
  const target = file.replace(".html", "");
  if ((currentPage === "home" && target === "index") || currentPage === target) {
    link.setAttribute("aria-current", "page");
  }
});

const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".nav-links");
toggle?.addEventListener("click", () => {
  const open = navigation?.classList.toggle("is-open") || false;
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
