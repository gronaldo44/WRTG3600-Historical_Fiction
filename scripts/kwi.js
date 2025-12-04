
// Load initial main content
fetch("content/kwi-intro.html")
  .then(resp => resp.text())
  .then(html => { mainContent.innerHTML = html; });


// Sidebar links: dynamically load content
const links = document.querySelectorAll('.sidebar a');
const mainContent = document.getElementById('main-content');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = e.target.dataset.page;

    fetch(`content/${page}.html`)
      .then(resp => resp.text())
      .then(html => {
        mainContent.innerHTML = html;
        // Scroll to top of content
        mainContent.scrollTop = 0;
      })
      .catch(err => {
        mainContent.innerHTML = `<p>Error loading content: ${err}</p>`;
      });
  });
});
