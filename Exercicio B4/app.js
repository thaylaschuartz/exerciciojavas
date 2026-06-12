const pontos = 75;

const placar = document.querySelector('#placar');

placar.textContent = pontos;
console.log(pontos);

if (pontos >= 0 && pontos <= 49) {

    placar.style.backgroundColor = "#fde8e8";
    placar.style.color= "red";
    console.log(placar.textContent);

} else if (pontos >= 50 && pontos <= 74) {

    placar.style.backgroundColor = "#fef3e2";
    placar.style.color= "orange";
    console.log(placar.textContent);

} else if (pontos >= 75 && pontos <= 100) {
    placar.style.backgroundColor = "#eafaf1";
    placar.style.color= "blue";
}