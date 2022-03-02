let imgTag = [];
let titleTag = [];
let captionTag = [];
let imageList = [];
let image;
let openList = "<li class='gallery'>";
let closeList = "</li>";
let galleryArr;


let getGallery = (galleryData) => {
    galleryArr = galleryData;
    for (let i = 0; i < galleryData.length; i++) {
        imgTag.push(`<img src='Images/${galleryData[i].img}' alt='${galleryData[i].alt}'>`);
        titleTag.push(`<div class='title' id="${i}" onclick="openCard(this.id)">${galleryData[i].title}</div>`);
        captionTag.push(`<div class='caption'>${galleryData[i].caption}</div>`);
        image = openList + imgTag[i] + titleTag[i] + captionTag[i] + closeList;
        imageList.push(image);
    }
}

fetch("galleryData.json")
    .then(response => response.json())
    .then(json => getGallery(json))
    .finally(i => document.getElementById("album").innerHTML = imageList.join(""));

let openCard = (i) => {
    document.getElementById("card").style.display = "unset";
    document.getElementById("card-title").innerHTML = `<h2>${galleryArr[i].caption}</h2>`;
    document.getElementById("card-text").innerHTML = galleryArr[i].description;
}

let closeCard = () => {
    document.getElementById("card").style.display = "none";
}