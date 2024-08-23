document.addEventListener('DOMContentLoaded', function() {
    const chatElements = document.querySelectorAll('.chat > div, .chat > img');
    
    function checkScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
  
      chatElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        
        
        const showTrigger = scrollY + windowHeight * 0.8;
  
        
        if (elementTop < showTrigger && elementTop > scrollY) {
          element.classList.add('show');
        }
      });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
  });

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.bio-table tr');
    
    function checkScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
  
      rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        const rowTop = rect.top;
        const rowBottom = rect.bottom;
        
        
        const showTrigger = windowHeight * 0.9;
  
        
        if (rowTop < showTrigger && rowBottom > 0) {
          row.classList.add('show');
        } 
        
        else {
          row.classList.remove('show');
        }
      });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.like-image-container');
    
    containers.forEach(container => {
        const trigger = container.querySelector('.like-image-trigger');
        
        trigger.addEventListener('click', function() {
            container.classList.toggle('flipped');
        });
    });
});

document.querySelectorAll('.back-page').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const nextPage = this.href;
      document.documentElement.classList.add('slide-out');
      setTimeout(function() {
          window.location.href = nextPage;
      }, 250);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-group');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              form.classList.add('visible');
              observer.unobserve(form);
          }
      });
  }, {
      threshold: 0.1
  });

  observer.observe(form);
});