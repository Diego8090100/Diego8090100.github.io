document.getElementById('rollButton').addEventListener('click', function() {
    const diceType = document.getElementById('diceType').value;
    const result = rollDice(diceType);
    
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You rolled: ${result}`;
    
    resultDiv.classList.remove('show');
    void resultDiv.offsetWidth;
    resultDiv.classList.add('show');
});

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}