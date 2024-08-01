document.getElementById('learnMoreButton').addEventListener('click', function() {
  window.location.href = '#about';
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  this.reset();
});
