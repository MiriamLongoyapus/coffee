// const coffeeItems = document.querySelectorAll('.coffee');

// coffeeItems.forEach(coffee => {
//     const image = coffee.querySelector('img');
//     image.addEventListener('click', () => {
//         coffee.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
//     });
// });


const coffeeItems = document.querySelectorAll('.coffee');

coffeeItems.forEach(coffee => {
    const readMoreBtn = coffee.querySelector('.read-more');

    readMoreBtn.addEventListener('click', () => {
        coffee.classList.toggle('expanded');
        readMoreBtn.textContent = coffee.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
});
function toggleInformation(button) {
    var paragraph = button.previousElementSibling;
    paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
}

