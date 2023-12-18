// Hide Loader
function removeLoader(){
    document.querySelector(".loader").style.display = "none";
}

// Smooth Scrolling
let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

  
// Navigation Bar in mobile
var open = false;
const nav = document.querySelector(".nav");

const navIcon = document.querySelector(".navIcon")

function toggleNav() {
    if(!open){
        nav.style.transform = "translateX(0px)";
        navIcon.style.background = "transparent";
    }
    else{
        nav.style.transform = "translateX(-300px)";
        navIcon.style.background = "rgba(3, 3, 60, 0.3)";
    }
    open = open^1;
}

// Switching section

var sections = [];
// var colors = ["#81ecec", "#fab1a0", "#fdcb6e", "#74b9ff", "#55efc4"];
var colors = ["white", "white", "white", "white", "white"];
// var colors = ["#74b9ff", "#74b9ff", "#74b9ff", "#74b9ff", "#74b9ff"]
var links = document.querySelectorAll(".navLink");
sections.push(document.getElementById("about"));
sections.push(document.getElementById("education"));
sections.push(document.getElementById("skills"));
sections.push(document.getElementById("projects"));
sections.push(document.getElementById("positions"));

var main = document.getElementById("main");
var windowNav = document.getElementById("window-nav");

var mp = [0,1,2,3,4]


async function goToSection(x) {
    mainContainer.style.opacity=1;
    mainContainer.style.transform="scale(1)";
    main.style.opacity=1;
    windowNav.style.opacity=1;
    nav.style.transform = "";
    open = false;
    setTimeout(() => {
        for (let i = 0; i < sections.length; i++) {
            const element = sections[i];
            if(i==x){
                // element.style.display = "flex";
                links[mp[i]].style.color="#fff";
                // links[i].style.transform = "scale(1.1)";
            }
            else{
                // element.style.display="flex";
                links[mp[i]].style.color = "#ccf";
                // links[i].style.transform = "scale(1)";
            }
            main.style.background = colors[x];
        }
    }, 0);
}

// Maximize button

var isMaximized = false;
const mainContainer = document.getElementById("mainContainer");

function maximize() {
    if(!isMaximized){
        mainContainer.style.position = "absolute";
        mainContainer.style.zIndex = 1000;
        mainContainer.style.left = 0;
        mainContainer.style.top = 0;
        mainContainer.style.width = "100vw";
        mainContainer.style.height = "100vh";
        windowNav.style.width = "100%";
        main.style.width = "100%";
        main.style.height = "100%";
        windowNav.style.borderRadius="0px"
        mainContainer.style.borderRadius="0px"
        main.style.borderRadius="0px";
    }
    else{
        mainContainer.style.position = "relative";
        // mainContainer.style.width = "100%";
        // mainContainer.style.height = "100%";
        windowNav.style.width = "90%";
        main.style.width = "90%";
        main.style.height = "80%";
        windowNav.style.borderRadius = "10px 10px 0px 0px";
        main.style.borderRadius = " 0px 0px 10px 10px";
    }
    isMaximized = isMaximized^1;
}


// Exit button

function exit() {
    mainContainer.style.transform = "scale(0)";
}




// For typer effect
var text="";
const fullText1 = "< Competetive Programmer_/>";
const fullText2 = "< Full Stack Developer _/>";
const fullText3 = "< Machine Learning Enthusiast_/>";
const texts=[""];
for (let i = 1; i <= fullText1.length; i++) {
    text=fullText1.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText1);
}
for (let i = fullText1.length; i >= 0; i=i-2) {
    text=fullText1.slice(0,i);
    texts.push(text);
}
for (let i = 1; i <= fullText2.length; i++) {
    text=fullText2.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText2);
}
for (let i = fullText2.length; i >= 0; i=i-2) {
    text=fullText2.slice(0,i);
    texts.push(text);
}
for (let i = 1; i <= fullText3.length; i++) {
    text=fullText3.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText3);
}
for (let i = fullText3.length; i >= 0; i=i-2) {
    text=fullText3.slice(0,i);
    texts.push(text);
}



var i=0,j=0, j2=0;
const arrayLen = texts.length;
function Screen() {
   setInterval(function () {
       if (i==arrayLen) {
           i=0;
       }
       text = texts[i++];
        document.getElementById("text").innerText=text;
   },100)
   setInterval(function(){
       if(j==0){
           document.getElementById("span").style.opacity=0;
       }
       if(j==1){
           document.getElementById("span").style.opacity=0.25;
       }
       if(j==2){
           document.getElementById("span").style.opacity=0.5;
       }
       if(j==3){
           document.getElementById("span").style.opacity=1;
       }
       if(j==4){
           document.getElementById("span").style.opacity=0.5;
       }
       if(j==5){
           document.getElementById("span").style.opacity=0.25;
       }
       if (j==6) {
          document.getElementById("span").style.opacity=0;
       }
       j++;
       if (j==7) {
        j=0;
       }
   },100);
}

Screen();


// Skills Toggle
const toggleSkill = (index) => {
    if(index==0){
        document.getElementById("technical").style.display = "flex";
        document.getElementById("soft").style.display = "none";

        document.getElementById("switch-to-tech").style.color = "#1B4242";
        document.getElementById("switch-to-tech").style.backgroundColor = "#D6D5A8";

        document.getElementById("switch-to-soft").style.color = "#D6D5A8";
        document.getElementById("switch-to-soft").style.backgroundColor = "#1B4242";
    }
    else{
        document.getElementById("technical").style.display = "none";
        document.getElementById("soft").style.display = "flex";

        document.getElementById("switch-to-soft").style.color = "#1B4242";
        document.getElementById("switch-to-soft").style.backgroundColor = "#D6D5A8";

        document.getElementById("switch-to-tech").style.color = "#D6D5A8";
        document.getElementById("switch-to-tech").style.backgroundColor = "#1B4242";
    }
}