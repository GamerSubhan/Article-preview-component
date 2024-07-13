const shareButton = document.getElementById('shareButton');
const shareIcon = document.getElementById('shareIcon');
const shareCanvas = document.getElementById('shareCanvas');

let isClicked = false;

shareButton.addEventListener('click', ()=> {
    if(!isClicked) {
        shareCanvas.style.display = 'block';
        shareIcon.style.fill = 'white';
        shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)';
        isClicked = true;
    }
    else
    {
        isClicked = false;
        shareCanvas.style.display = 'none';
        shareIcon.style.fill = '#6E8098';
        shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
    }
    
});

