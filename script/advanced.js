fetch('https://yesno.wtf/api')
.then(response => response.json())
.then(
    data => {
    
    document.getElementById('print-here').innerHTML += 
    '<img src="' + data.image + '"/>'
}
);

let api = document.getElementById("print-here");




let artC = document.getElementById("java");

artC.style.color = "white";
artC.style.backgroundColor = "darkgreen";
artC.style.fontSize = "70px";
artC.style.fontFamily = "Helvetica";

let button1 = document.getElementById("button1");

button1.style.color = "black";
button1.style.backgroundColor = "lightpink";
button1.style.fontSize = "20px";
button1.style.fontFamily = "'BPscript', sans-serif";

let button2 = document.getElementById("button2");

button2.style.color = "black";
button2.style.backgroundColor = "yellow";
button2.style.fontSize = "20px";
button2.style.padding = "15px";
button2.style.margin = "20px";
button2.style.fontWeight = "bold"
button2.style.fontFamily = "'BPscript', sans-serif";

