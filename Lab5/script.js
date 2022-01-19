function newWindow() {
    const width = document.getElementById("width").value;
    const height = document.getElementById('height').value;
    const left = document.getElementById('left').value;
    const top = document.getElementById('top').value;
    const size = "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
    var mywindow = window.open("", "", size);
    mywindow.document.write("This window is opened on clicking of the New Window button");

}
function reset() {
    document.querySelectorAll('input[type="text"]')
        .forEach(el => el.textContent = false);
}