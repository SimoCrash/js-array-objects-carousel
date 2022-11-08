const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const container = document.querySelector(".container");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

for(let i = 0; i < images.length; i++) {
let imgCarusel = document.createElement("img");
imgCarusel.src = `${images[i].image}`;
imgCarusel.classList.add("hidden");

if(i == 0) {
    imgCarusel.classList.add("show");
    imgCarusel.classList.remove("hidden");
}
container.append(imgCarusel);
}

const listImg = document.querySelectorAll(".hidden");
const smallImg = document.querySelectorAll(".img-small");
const firstImg = 0;

btnUp.addEventListener("click", function() {
    listImg[firstImg].classList.remove("show");
    smallImg[firstImg].classList.add("hidden");
    firstImg++;
    if(firstImg == 5) {
        firstImg = 0;
    }
    listImg[firstImg].classList.add("show");
    smallImg[firstImg].classList.remove("hidden");
})

btnDown.addEventListener("click", function() {
    listImg[firstImg].classList.remove("show");
    smallImg[firstImg].classList.add("hidden");
    firstImg--;
    if(firstImg == 0) {
        firstImg = 5;
    }
    listImg[firstImg].classList.add("show");
    smallImg[firstImg].classList.remove("hidden");
})








