/* Button page à porpos*/


document.getElementById('cvButton').addEventListener('click', function () {
    const image = 'Céleste.png';
    window.open(image);
});

document.getElementById('contactez').addEventListener('click', function () {

    var pageUrl = 'contact.html';  
   
    window.location.href = pageUrl;
});
