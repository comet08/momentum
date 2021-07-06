const color = localStorage.getItem("bcolor");

if(color !== null)
    document.body.style.backgroundColor = color;