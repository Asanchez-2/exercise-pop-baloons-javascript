let ballonsMap = []; //Declaramos e inicializamos un Array vacio para luego darle valor

const GetRandomPosition = () => {
    for (i = 0; i < 20; i++) {
        ballonsMap[i] = '#' + Math.floor(Math.random() * 16777215).toString(16); //recorro el arreglo BallonsMap y lo voy rellenando en la posición i, durante 20 veces.
    }
};

GetRandomPosition();//Hasta que no invoquemos a la función flecha GetRandomPOsition no se ejecuta

let activeBalloons = ballonsMap.length; //Valor inicial del contador de globos es igual a la longitud del array, 20 (la longitud la marcamos en el bucle for)

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    console.log("Hello World");
    // set the color to null on the balloon position
    ballonsMap[position] = null;
    activeBalloons -= 1;//Cuando se explota un globo se va restando en 1 unidad de la variable activeBallons
    render(); //Invocamos a la función render, la cual ejecuta el código de la función flecha de más abajo.
}

const render = () => {

    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        if (color == null) {
            return `<div class="balloon popped" id="${position}" onClick="popBalloon(${position})"></div>`; //con $ inyectamos a la variable position del arreglo ballonsMap la posición
        }

        else {
            return `<div class="balloon active" style="background: ${color};" id="${position}" onClick="popBalloon(${position})"></div>`;
        }
        // <--- render each balloon
    });

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- rende the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if (activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();