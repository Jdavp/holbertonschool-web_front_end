function changeMode(size, weight, transform, background, color){
    return function (){
        
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
    
}

function main() {
    let spooky =  changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    
    var para = document.createElement("p");
    var node = document.createTextNode('Welcome Holberton!');
    para.appendChild(node);
    document.body.appendChild(para)
    
    var btn = document.createElement("button");
    btn.innerHTML = "Spooky";   
    document.body.appendChild(btn)
    btn.onclick = function () {
        spooky();
    }
    
    var btn1 = document.createElement("button");
    btn1.innerHTML = "Dark mode";
    document.body.appendChild(btn1)
    btn1.onclick = function () {
        darkMode();
    }
    
    var btn2 = document.createElement("button");
    btn2.innerHTML = "Scream mode";
    document.body.appendChild(btn2)
    btn2.onclick = function () {
        screamMode();
    }
}
window.onload = function(){ 
  main(); 
};