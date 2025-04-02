
// styling of css in js
const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('mouseenter', () => {
        letter.style.transition = 'all 0.3 ease';
        // letter.style.color = getRandomColor();
        letter.style.transform = 'translateY(-10px) rotate(10deg)';
    });

    letter.addEventListener('mouseleave', () => {
        letter.style.color = 'color: hsl(213, 81%, 26%);';
        letter.style.transform = 'translateY(0px) rotate(0deg)';
    });

});

function getRandomColor(){
    const colors = ['#007bff', '#ff5733', '#33ff57', '#ff33a1', '#33a1ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}