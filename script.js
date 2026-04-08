document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  const isDevToolsShortcut =
    key === "f12" || // F12
    (e.ctrlKey && e.shiftKey && key === "i") || // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && key === "j") || // Ctrl+Shift+J
    (e.ctrlKey && e.shiftKey && key === "c") || // Ctrl+Shift+C
    (e.ctrlKey && key === "u") || // Ctrl+U (view source)
    (e.metaKey && e.altKey && key === "i"); // Cmd+Option+I (Mac)

  if (isDevToolsShortcut) {
    e.preventDefault();
    return false;
  }
});

// scroll button
document.addEventListener('DOMContentLoaded', function() {
  
  // anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  
  // smooth scroll
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Check if the link has a hash
      if (this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;
        const target = document.querySelector(hash);
        
        if (target) {
          // target scroll
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // fade in
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
  
});
