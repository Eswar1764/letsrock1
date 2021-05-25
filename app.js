// Setting time interval
setInterval(checkBackground,200);

function checkBackground(){
    generateRandomColor();
    checkBackgroundColor();
    checkBackgroundText();
}

// Generating random color
function generateRandomColor(){
    return '#'+Math.floor(Math.random() *16777215).toString(16);
}

// Changing background color
function checkBackgroundColor(){
    const colorBg = document.getElementById("color-overlay")
    colorBg.style.backgroundColor=generateRandomColor();
}

// Changing background text
function changeBackgroundColorText(){
    const textBg = document.getElementById("text.bg")
    if(textBg.innerHTML=="LETS ROCK AND ROLL")
    textBg.innerHTML="ON THE FLOOR BABY";
    else if(textBg.innerHTML="ON THE FLOOR BABY")
    textBg.innerHTML="HIT IT HARD";
    else if (textBg.innerHTML="HIT IT HARD")
    textbg.innerHTML="ROCK THE PARTY BABY";
else if(textbg.innerHTML=="ROCK THE PARTY BABY")
textbg.innerHTML="LETS ROCK AND ROLL";
}
