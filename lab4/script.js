// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
let counter = 0;
function thisimiROLLy(){
    dice1 = document.getElementById('dice1');
    dice2 = document.getElementById('dice2');
    setTimeout(function(){
        max = 6
        min = 1
        dice1Value = Math.floor(Math.random() * (max - min + 1)) + min;
        dice2Value = Math.floor(Math.random() * (max - min + 1)) + min;
        dice1.src = `img/dice${dice1Value}.png`;
        dice2.src = `img/dice${dice2Value}.png`;

        sum = dice1Value + dice2Value;
        document.getElementById('sum').textContent = `Dice Sum: ${sum}`;

        counter++;
        document.getElementById('rollCounter').textContent = `Roll Count: ${counter}`;

        if(dice1Value === dice2Value){
            document.getElementById('resultMessage').textContent = "Win!";
        }
        else{
            document.getElementById('resultMessage').textContent = "Loos!";
        }
    });
}