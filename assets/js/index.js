var sections = [];
var colors = ["#81ecec", "#fab1a0", "#fdcb6e", "#74b9ff", "#55efc4"]
sections.push(document.getElementById("about"));
sections.push(document.getElementById("education"));
sections.push(document.getElementById("skills"));
sections.push(document.getElementById("projects"));
sections.push(document.getElementById("positions"));

function goToSection(x) {
    for (let i = 0; i < sections.length; i++) {
        const element = sections[i];
        if(i==x) element.style.display = "flex";
        else element.style.display="none";
    }
}