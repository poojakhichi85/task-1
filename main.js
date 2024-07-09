      const scrollRevealOption = {
      distance: "70px",
      origin: "bottom",
      duration: 1500,
        };
           ScrollReveal().reveal(".content h1", {
            duration: 1000,
            });
      
            ScrollReveal().reveal(".content p", {
            ...scrollRevealOption,
            delay:500,
            });
          
            // ScrollReveal().reveal(".grid", {
            // ...scrollRevealOption, 
            // delay: 500,
            // });
          


     ScrollReveal().reveal(".about-im", { 
     ...scrollRevealOption,
     delay: 500,
     });

     ScrollReveal().reveal(".about_cont", {   
     duration: 1000,
     });

     ScrollReveal().reveal(".header h2", {
     ...scrollRevealOption,
     delay:500,
     });
    
     ScrollReveal().reveal(".grid", {
     ...scrollRevealOption, 
     delay: 500,
      });
    
     ScrollReveal().reveal(".card", { 
     ...scrollRevealOption,
     delay: 500,
     });


         ScrollReveal().reveal(".footer-section h3", { 
         ...scrollRevealOption,
         delay: 500,
         });
 
         ScrollReveal().reveal(".footer-section p", {   
         duration: 1000,
         });
 
          
   document.addEventListener('DOMContentLoaded', () => {
   const projects = document.querySelectorAll('.project');
      
   projects.forEach(project => {
   project.addEventListener('click', () => {
   const info = project.querySelector('.project-info');
   info.style.display = info.style.display === 'block' ? 'none' : 'block';
   });
   });
   });


   ScrollReveal().reveal(".projects-section h2", { 
    ...scrollRevealOption,
    delay: 500,
    });

    ScrollReveal().reveal(".project", {   
    duration: 1000,
    });

    ScrollReveal().reveal(".projecr-info h3", {
    ...scrollRevealOption,
    delay:500,
    });
   
    ScrollReveal().reveal(".project-info p", {
    ...scrollRevealOption, 
    delay: 500,
     });
   


document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('navbar a');
  
      function changeActiveLink() {
          let index = sections.length;
  
          while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
          navLinks.forEach((link) => link.classList.remove('active'));
          navLinks[index].classList.add('active');
      }
  
      changeActiveLink();
      window.addEventListener('scroll', changeActiveLink);
  });
  

  
      