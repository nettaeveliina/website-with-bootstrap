
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
artC.style.backgroundColor = "rgba(0, 60, 36, 0.603)";
artC.style.fontSize = "30px";
artC.style.fontFamily = "Helvetica";

let button1 = document.getElementById("button1");

button1.style.color = "white";
button1.style.backgroundColor = "black";
button1.style.fontSize = "20px";
button1.style.fontFamily = "'BPscript', sans-serif";
button1.style.marginLeft = "80px"
button1.style.padding = "10px";

let button2 = document.getElementById("button2");

button2.style.color = "black";
button2.style.backgroundColor = "gray";
button2.style.fontSize = "20px";


button2.style.margin = "20px";
button2.style.fontWeight = "bold"
button2.style.fontFamily = "'BPscript', sans-serif";

let text = document.getElementById("h1");

text.style.color = "black";
text.style.fontSize = "50px";
text.style.fontFamily = "'BPscript', sans-serif";
p3.innerHTML ="This use to just say that this page is only for Advanced JavaScript" + "<br>" 