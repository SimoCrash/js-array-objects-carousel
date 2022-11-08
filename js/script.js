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

const sliderImg = document.querySelector(".container");
const btnTop = document.querySelector(".btn-top");
const btnBottom = document.querySelector(".btn-bottom");


for (let i = 0; i < arrImg.length; i++) {
    const eleImg = document.createElement("img");
    eleImg.src = `${images[i].image}`;
    eleImg.classList.add("slider-img");

    if (images[i].image === 0) {
        eleImg.classList.add("d-block");
    }
    sliderImg.append(eleImg);
}

const listImg = document.querySelectorAll(".slider-img");
const smallImage = document.querySelectorAll(".small-img");
let firstImg = 0;

btnBottom.addEventListener("click", function(){
    listImg[firstImg].classList.remove("d-block");
    smallImage[firstImg].classList.remove("real-img");
    firstImg++;
    if (firstImg == 5) {
        firstImg = 0;
    }
    listImg[firstImg].classList.add("d-block");
    smallImage[firstImg].classList.add("real-img");
})

btnTop.addEventListener("click", function(){
    listImg[firstImg].classList.remove("d-block");
    smallImage[firstImg].classList.remove("real-img");
    if (firstImg == 0) {
        firstImg = 5;
    }
    firstImg--;
    listImg[firstImg].classList.add("d-block");
    smallImage[firstImg].classList.add("real-img");
})






