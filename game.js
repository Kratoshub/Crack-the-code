let secretCode = generateSecretCode();

function setDynamicColors() {
    const colors = [
        { background: '#3498db', text: 'white', hint: '#a3d8f4' },
        { background: '#e74c3c', text: 'white', hint: '#f7b7b7' },
        { background: '#2ecc71', text: 'black', hint: '#a9e7b6' },
        { background: '#9b59b6', text: 'white', hint: '#d6b8e7' }
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColors = colors[randomIndex];
    
    document.body.style.backgroundColor = selectedColors.background;
    document.body.style.color = selectedColors.text;
    document.querySelectorAll('.hint-box').forEach(hint => {
        hint.style.backgroundColor = selectedColors.hint;
    });
}

function generateSecretCode() {
    const digit1 = Math.floor(Math.random() * 10);
    const digit2 = Math.floor(Math.random() * 10);
    const digit3 = Math.floor(Math.random() * 10);
    updateHints(digit1, digit2, digit3);
    return [digit1, digit2, digit3];
}

function updateHints(d1, d2, d3) {
    const hintsDiv = document.getElementById('hints');
    hintsDiv.innerHTML = `
        <div class="hint-box">Hint 1: The first digit is ${d1 % 2 === 0 ? 'even' : 'odd'} and ${d1 > 5 ? 'greater than 5' : '5 or less'}.</div>
        <div class="hint-box">Hint 2: The second digit is ${d2 % 2 === 0 ? 'even' : 'odd'} and ${d2 > 5 ? 'greater than 5' : '5 or less'}.</div>
        <div class="hint-box">Hint 3: The third digit is ${d3 % 3 === 0 ? 'a multiple of 3' : 'not a multiple of 3'} and ${d3 > 4 ? 'greater than 4' : '4 or less'}.</div>
    `;
    setDynamicColors(); // Apply dynamic colors
}

function checkCode() {
    const digit1 = parseInt(document.getElementById('digit1').value) || 0;
    const digit2 = parseInt(document.getElementById('digit2').value) || 0;
    const digit3 = parseInt(document.getElementById('digit3').value) || 0;

    if (digit1 === secretCode[0] && digit2 === secretCode[1] && digit3 === secretCode[2]) {
        document.getElementById('message').textContent = 'Congratulations! You cracked the code!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Wrong code. Try again!';
        document.getElementById('message').style.color = 'red';
    }
}

function resetGame() {
    secretCode = generateSecretCode();
    document.getElementById('message').textContent = '';
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
}