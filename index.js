// alert("abc")
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setRandomColor() {
    var item = document.querySelectorAll("li")
    item.forEach(element => {
        element.style.backgroundColor = getRandomColor();
    });
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

setRandomColor()
var li=document.querySelectorAll('li')
li.forEach(element => {
    setInterval(() => {
        element.style.transform = `scale(${getRandomInt(-1,1)},${getRandomInt(-1,1)})`
        setRandomColor()
    }, 2500);
});
