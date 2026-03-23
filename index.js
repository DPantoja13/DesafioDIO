let nomePlayer = "Daniel";
let exp = 0;

switch (true) {
    case exp < 1000:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Ferro")   ;
        break;
    
    case exp >= 1001 && exp <= 2000:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Bronze");
        break;

    case exp >= 2001 && exp <= 5000:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Prata");
        break;

    case exp >= 5001 && exp <= 7000:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Ouro");
        break;

    case exp >= 7001 && exp <= 8000:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Platina");
        break;

    case exp >= 8001 && exp <= 9000:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Ascendente");
        break;

    case exp >= 9001 && exp <= 10000:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Imortal");
        break;

    case exp > 10001:
        console.log("O Heroi de nome " + nomePlayer + " está no nível de " + "Radiante");
        break;
}