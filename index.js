let nickName = 'Marcos'
let xp = 0
let nivel


for(let i = 0; i < 10; i++){
    xp += 300
}


    if (xp > 1000 && xp <= 2000) {
        nivel = "Bronze"
    }else if (xp > 2000 && xp <= 5000) {
        nivel = "Prata"
    }else if(xp > 5000 && xp <= 7000) {
        nivel = "Ouro"
    }else if(xp > 7000 && xp <= 8000) {
        nivel = "Platina"
    }else if(xp > 8000 && xp <= 9000) {
        nivel = "Ascendente"
    }else if(xp > 9000 && xp <= 10000){
        nivel = "Imortal"
    }else if (xp > 10000){
        nivel = "Radiante"
    }else {
        nivel = "Ferro"
    }



console.log("O Herói de nome " + nickName + " está no nível de " + nivel)