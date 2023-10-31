let focused = false;
const select = () => {
    if (focused == false){
        focused = true;
        document.getElementById("searchInput").setAttribute("style","background-color: rgba(255,255,255,0.375);")
    }
    else
    {
        focused = false;
        document.getElementById("searchInput").setAttribute("style","background-color: rgba(255,255,255,0.2);")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("autocomplete-input").addEventListener("focus",select);
    document.getElementById("autocomplete-input").addEventListener("focusout",select);
});