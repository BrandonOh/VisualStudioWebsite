// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function MoveIcon() {
    let id = null;
    const elem = document.getElementById("myAnimation")
    let pos = 4;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 550) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}