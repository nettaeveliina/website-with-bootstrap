
//Left side Column

let artC = document.getElementById("java");

artC.style.color = "white";
artC.style.backgroundColor = "rgba(0, 60, 36, 0.603)";
artC.style.fontSize = "30px";
artC.style.fontFamily = "Helvetica";

//Button1 (Home)

let button1 = document.getElementById("button1");

button1.style.color = "white";
button1.style.backgroundColor = "black";
button1.style.fontSize = "20px";
button1.style.fontFamily = "'BPscript', sans-serif";
button1.style.marginLeft = "510px"


//Button2 (Instagram)

let button2 = document.getElementById("button2");

button2.style.color = "black";
button2.style.backgroundColor = "gray";
button2.style.fontSize = "20px";
button2.style.margin = "20px";
button2.style.fontWeight = "bold"
button2.style.fontFamily = "'BPscript', sans-serif";


//Button3 (Rest Api)

let button3 = document.getElementById("button3");

button3.style.color = "white";
button3.style.backgroundColor = "black";
button3.style.fontSize = "15px";
button3.style.marginLeft = "120px"
button3.style.padding = "10px";
button3.innerHTML ="Rest Api Button"
button3.style.border = "none";

//H1 Headline

let text = document.getElementById("h1");

text.style.color = "black";
text.style.fontSize = "50px";
text.style.textAlign  = "center";
text.style.fontFamily = "'BPscript', sans-serif";
text.style.marginTop = "20px"

text.classList.toggle("shading");

//p
let p = document.getElementById("p3")

p3.innerHTML ="I manipulated this text..." + "<br>" 
p.style.textAlign  = "center";
p.style.fontFamily = "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
p.style.fontSize = "40px"


//Image Event (Colors and text change when you click the buttons)

function before() {
    document.getElementById("image1")
    .src="../images/java_page_image.jpg";
    document.getElementById("image2")
    .src="../images/java_page_image2.jpg";
    document.getElementById("message")
    .innerHTML="One Foggy Evening...Cool";
}
function afterr() {
    document.getElementById("image1")
    .src="../images/java_page_image3.jpg";
    document.getElementById("image2")
    .src="../images/java_page_image4.jpg";
    document.getElementById("message")
    .innerHTML="One Foggy Evening...Warm";
}


