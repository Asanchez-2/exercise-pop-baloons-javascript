// we declare a new global variable containing an array that represents the ballons map
var allBalloons = ['green', 'purple', 'grey', 'pink', 'brown', 'red', 'green', 'grey', 'pink', 'blue', 'red', 'brown', 'purple', 'green', 'red', 'grey', 'pink', 'purple', 'orange', 'red']
var ballonsMap = ['green'];
var activeBalloons = 20;

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    if (color == null) {
    } render();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        return `<div class="balloon active" id=ballon-1></div><div class="balloon active" id=ballon-2></div><div class="balloon active" id=ballon-3></div><div class="balloon active" id=ballon-4></div><div class="balloon active" id=ballon-5></div><div class="balloon active" id=ballon-6></div><div class="balloon active" id=ballon-7></div><div class="balloon active" id=ballon-8></div><div class="balloon active" id=ballon-9></div><div class="balloon active" id=ballon-10></div><div class="balloon active" id=ballon-11></div><div class="balloon active" id=ballon-12></div><div class="balloon active" id=ballon-13></div><div class="balloon active" id=ballon-14></div><div class="balloon active" id=ballon-15></div><div class="balloon active" id=ballon-16></div><div class="balloon active" id=ballon-17></div><div class="balloon active" id=ballon-18></div><div class="balloon active" id=ballon-19></div><div class="balloon active" id=ballon-20></div>`; // <--- render each balloon
    });

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- rende the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();