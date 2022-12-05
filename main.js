let images = [
    "./images/wrestling.webp",
    "./images/cricket.webp",
    "./images/cycling.webp",
    "./images/f1.webp",
    "./images/football.webp",
    "./images/nfl.webp",
    "./images/tennis.webp"
];

let currentIndex = 0;

//variables
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let img = document.getElementById('img');


//event listeners

nextButton.addEventListener('click',nextImage);
prevButton.addEventListener('click',prevImage);



//functions
function nextImage(){
    currentIndex++;
    if(currentIndex == images.length){
        currentIndex = 0;
    }
    img.src = images[currentIndex];
}


function prevImage(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length-1;
    }
    img.src = images[currentIndex];
}