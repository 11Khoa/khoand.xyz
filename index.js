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
setRandomColor()
setInterval(() => {
    setRandomColor()
}, 5000);