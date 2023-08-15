const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score') 
const machineScore = document.querySelector('#machine-score')

let  humanScoreNumber = 0
let  machineScoreNumber = 0 

const playHuman = (humanChoise) => {

    playTheGame(humanChoise, playMachine())

}
const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + ' maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (
        (human === 'stone' && machine === 'scissors') ||
        (human === 'paper' && machine === 'stone') ||
        (human === 'scissors' && machine === 'paper')
        ) {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            result.innerHTML = 'Você venceu!'
    } else {
        result.innerHTML = 'Você perdeu para a maquina!'
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

    }  
}