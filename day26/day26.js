const openNav = document.getElementById("open")
const closeNav = document.getElementById("close")

const sideNavBar = document.querySelector(".sidenav")

closeNav.addEventListener('click', closeSideNavBar)

function closeSideNavBar() {
    sideNavBar.classList.toggle("mango")
}


const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"

}

function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function() {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function() {
    document.querySelector("#company").textContent = "Company"
}

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white"
}

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "red"
}
const loginButton = document.getElementById("loginBtn")
const loginModal = document.getElementById("loginSection")
const sideNavBar1 = document.querySelector(".sidenav")
const mainSection = document.querySelectorAll(".main .section")

loginButton.onclick=showLogin
function showLogin(){
    sideNavBar1.style.display="none";
    mainSection.forEach(function(item){
        item.style.display="none"
    })
    loginModal.style.display="block"
}

document.getElementById("closeBtn").addEventListener('click',hideLogin)
    function hideLogin(){
    sideNavBar.style.display="block";
    mainSection.forEach(function(item){
        item.style.display="block"
    })
    loginModal.style.display="none"
}
document.getElementById("loginSubmit").addEventListener('mouseover',function(){
    this.style.background='green'
})
document.getElementById("loginSubmit").addEventListener('mouseout',function(){
    
    this.style.background='#1768AC'
})
const addBorder=document.getElementById("add-border")
addBorder.addEventListener("click",addingBorder)

function addingBorder(){
    document.querySelector("header").style.border="5px solid black"
}

if(10>20){
    addBorder.removeEventListener("click",addingBorder)
}