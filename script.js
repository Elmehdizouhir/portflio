// pour backgroundImages de les projetc
const backgroundImages = [
  'img/mcdbackground.jpg',
  'img/backCoffe.jpeg',
  'img/chickandclick.avif'
];

document.addEventListener("DOMContentLoaded", function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    console.log(card);
    card.style.backgroundImage = `url(${backgroundImages[index]})`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
  });
});
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Phone number copied!");
}
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display ='flex'
}
function hedeSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display ='none'
}