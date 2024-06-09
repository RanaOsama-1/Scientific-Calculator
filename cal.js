// theme mood

// theme mood end
let oprand=(name)=>{
    document.querySelector("#result_box").value+=name;
} 
let operators=(op)=>{
    document.querySelector("#result_box").value+=op
}
let calculation=()=>{
    let data=document.querySelector("#result_box").value
    let result=eval(data);
    document.querySelector("#result_box").value = result;
}
let clearAll =()=>{
    document.querySelector("#result_box").value="";
}
let sqrt = () => {
    let data = document.querySelector("#result_box").value;
    let result = Math.sqrt(parseFloat(data));
    document.querySelector("#result_box").value = result;
}

let log10 = () => {
    let data = document.querySelector("#result_box").value;
    let result = Math.log10(parseFloat(data));
    document.querySelector("#result_box").value = result;
}

let square = () => {
    let data = document.querySelector("#result_box").value;
    let result = Math.pow(parseFloat(data), 2);
    document.querySelector("#result_box").value = result;
}
let cube = () => {
    let data = document.querySelector("#result_box").value;
    let result = Math.pow(parseFloat(data), 3);
    document.querySelector("#result_box").value = result;
}

let deleteLast = () => {
    let data = document.querySelector("#result_box").value;
    document.querySelector("#result_box").value = data.slice(0, -1);
}



function setLightTheme() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}

function setDarkTheme() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
}




