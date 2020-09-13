//create a webpage containing an image and three buttons
//A. on click of the second button a change the existing image to a  new image
//B. on click  of the third button chane it once again
//on click of first,the first image should be come back

function changeimage() {
    const ele =document.getElementById("image");
    const url="https://live.staticflickr.com/65535/50275263083_8771deb8b9_n.jpg"
    ele.src=url;

}

function againchange() {
    const im= document.getElementById("image");
    const newurl="https://live.staticflickr.com/4144/5173020241_865829d562_n.jpg"
    im.src=newurl;

}

function getback() {
    const get= document.getElementById("image");
    const first="https://live.staticflickr.com/7158/6538511435_7ed7cf60ca_n.jpg"
    get.src=first;
}
