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
