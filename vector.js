
var clear = document.getElementById('clear');
var svg = document.getElementById('svg');

firstCircle = true;

var lastX = 0;
var lastY = 0;

var draw = function(e){
    posX = e.offsetX;
    posY = e.offsetY;
    rad = 20;

    //Draw circle
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle")
    c.setAttribute("cx", posX);
    c.setAttribute("cy", posY);
    c.setAttribute("r", rad);
    c.setAttribute("fill", "blue");

    svg.appendChild(c);

    //Draw line
    if (firstCircle){
	lastX = posX;
	lastY = posY;
    }
    var l = document.createElementNS("http://www.w3.org/2000/svg","line")
    l.setAttribute("x1", posX);
    l.setAttribute("y1", posY);
    l.setAttribute("x2", lastX);
    l.setAttribute("y2", lastY);
    l.setAttribute("stroke", "black");
    lastX = posX;
    lastY = posY;

    svg.appendChild(l);
    firstCircle = false;
}

svg.addEventListener("click",draw);

var clear_can = function(e){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
    firstCircle = true;
}

clear.addEventListener("click", clear_can);
