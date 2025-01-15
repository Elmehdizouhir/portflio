function name() {
    // Récupère le formulaire par son ID
    const form = document.getElementById('contact-form');
  
    // Ajoute un écouteur d'événements pour l'envoi du formulaire
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche l'envoi traditionnel du formulaire
  
      // Récupère les valeurs des champs du formulaire
      const email = document.getElementById('email').value;
  
      // Affiche les valeurs dans la console (vous pouvez effectuer une action réelle ici)
      console.log('Email:', email);
  
      // Réinitialise le formulaire après soumission
      form.reset();
  
      // Affiche un message de confirmation
      alert('Merci pour votre message, ' + email + ' ! Je vous répondrai bientôt.');
    });
  }
  
  // Appeler la fonction 'name' pour initialiser l'écouteur d'événement
  name();
   
// pour backgroundImages de les projetc
  const backgroundImages = [
    'img/mcdbackground.jpg',
    'img/backCoffe.jpeg',
    'img/chickandclick.avif'
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      card.style.backgroundImage = `url('${backgroundImages[index]}')`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';
    });
  });
  