document.getElementById('cvButton').addEventListener('click', function () {
    const image = 'Céleste.png';
    window.open(image);
});

document.getElementById('contactez').addEventListener('click', function () {
    // URL de la page HTML de destination
    var pageUrl = 'contact.html';  // Remplace par le nom de la page de destination
    // Redirection vers la nouvelle page
    window.location.href = pageUrl;
});
