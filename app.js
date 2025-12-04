// Load the shared header
fetch('content/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('top-navbar').innerHTML = html;
  })
  .catch(err => console.error("Error loading header:", err));

// Load footer
fetch("content/footer.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector(".site-footer").innerHTML = data;
  })
  .catch(err => console.error("Error loading footer:", err));
