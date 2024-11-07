let barButton = document.querySelector('.bar-btn');
let dropDown = document.querySelector('.dropdown');
let listBtn = document.querySelectorAll('.listBtn');


let viewCv = document.getElementById("viewCvBtn");
viewCv.addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = 'IHSAN.pdf'; // Path to your CV PDF file
    link.download = 'IHSAN.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

//   close all list items when any one is clicked in mobile mode
listBtn.forEach((items)=>{
    items.addEventListener("click", ()=>{
            dropDown.classList.remove('show-height')
            barButton.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})

//  toggle button
barButton.addEventListener('click', () => {
    if(dropDown.classList.contains('show-height')){
        dropDown.classList.remove('show-height')
        barButton.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
    else{
        dropDown.classList.add('show-height')
        // barButton.classList.add('rotate')
        barButton.innerHTML = `<i class="fa-solid fa-xmark rotate"></i>`
        // After a delay, remove the rotate class to stop rotation
        setTimeout(() => {
            barButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`; // Remove rotate class after 1 rotation
        }, 1000);
    }

})

// scroll reveal effects

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.reveal-top', { origin: 'top' });
  ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom' });


// Get the button element
var scrollButton = document.querySelector('.fixed-button');

// Function to toggle button visibility based on scroll position
function toggleScrollButton() {
    if (window.scrollY > 500) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// Attach the toggle function to the scroll event
window.addEventListener('scroll', toggleScrollButton);

// Trigger the toggle function initially to handle the initial state
toggleScrollButton();



