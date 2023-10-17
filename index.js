function balanceOfWins(winnings, defeats) {
    return winnings - defeats;
}

let playerBalance = balanceOfWins(41, 12);
let playerRating;

if (playerBalance <= 10){
    playerRating = "Ferro";
} else if (playerBalance >= 11 && playerBalance <= 20){
    playerRating = "Bronze";
} else if (playerBalance >= 21 && playerBalance <= 50){
    playerRating = "Prata";
} else if (playerBalance >= 51 && playerBalance <= 80){
    playerRating = "Ouro";
} else if (playerBalance >= 81 && playerBalance <= 90){
    playerRating = "Diamante";
} else if (playerBalance >= 91 && playerBalance <= 100){
    playerRating = "Lendário";
} else {
    playerRating = "Imortal";
}

console.log(`O Herói tem de saldo ${playerBalance} vitórias e está no nível ${playerRating}.`);



