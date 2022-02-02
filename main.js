const button = document.querySelector('.buttomShare');
const icon = document.getElementsByClassName('icon');
const showLinks = document.querySelector('.shareLinks');

let a = 0;
button.addEventListener('click', () => {
    button.classList.toggle('buttomClicked');
    if(a == 0){
        icon[0].style.color = 'hsl(210, 46%, 95%)';
        a = 1;
    } else if (a == 1){
        icon[0].style.color = '#6e8098';
        a = 0;
    }
    showLinks.classList.toggle('showLinks');
    return a;
});
