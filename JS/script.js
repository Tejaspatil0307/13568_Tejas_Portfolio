document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

document.getElementById('cvButton').addEventListener('click', function() {
    alert('CV Downloaded!'); // Replace with actual download functionality
});


