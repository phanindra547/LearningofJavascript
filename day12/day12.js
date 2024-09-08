//array Methods
let sub =["java","c","python",4,true,{ passedout:"firstclass"}]
//push() =("add one or more elements to the end of an array and returns the newlength")

let sports=["Cricket","FootBall"]
sports.push("Scooer",67,"Hockey")
document.write(sports+"<br>")
document.write(sports.length+"<br>")

//pop()=("removes the last from existing array")
sports.pop()
document.write(sports+"<br>")
document.write(sports.length+"<br>")
//to know the which variable is delted for that we use variable and printing it seen below

let rest=sports.pop()
document.write(sports+"<br>")
document.write(sports.length+"<br>")
document.write("delete element printing here" +rest+"<br>")

//shift()=("removes the first element from a array ");
sports.shift()
document.write(sports+"<br>")
document.write(sports.length+"<br>")

//unshift()=("this method adds one or more elements to the beginning of an array and  returns the new length")

let scores =[22,67,89,98,45,"jamer"]
scores.unshift("key","score","uni")
document.write(scores+"<br>")
document.write(scores.length+"<br>")

//contact()=["combines two or more arrays and retuns a new array"]
let scores1 =[22,67,89,98,45,"jamer"]
let sub1 =["java","c","python",4,true,{ passedout:"firstclass"}]
let newplay =scores1.concat(sub1)
document.write(newplay+"<br>")
document.write(newplay.length+"<br>")

//join()="creates a new string by concatenating all the elements of an array and returns a string by a specified separator"
var score =[22,67,89,98,45,"jamer"]
var myteam = score.join("#")
document.write(score+"<br>")
document.write(myteam+"<br>")


//slice()=["returns a shallow copy of aportion of an array into a new array"]
let sub12 =["java","c","python",4,true,{ passedout:"firstclass"}]
let jasub = sub12.slice(0,4)
document.write(jasub+"<br>")
document.write(jasub.length+"<br>")


//splice()={"Changes the contents of an array by removing ,replacing or adding elements"}
//removing
let scor =[22,67,89,98,45,"jamer"]
let neer = scor.splice(0,4)
document.write(scor+"<br><hr>")
document.write(neer+"<br><hr>")
//replacing  
let neer1 =[22,67,89,98,45,"jamer"]
let newneer = neer1.splice(4,1,"adding some numbers")
document.write(newneer+"<br>")
document.write(newneer.length+"<br>")

//indexOf()=("returns the first index at which a given element can be found in an array or -1 if it is not present.")
let comapins =["Tata","Delotiee","HCL","Genpact","Infosys"];
document.write(comapins+"<br>")
document.write(comapins.indexOf("Tata")+"<br>")
document.write(comapins.indexOf("Google")+"<br>")

var news =comapins.indexOf("alpha")
if(news==-1){
    comapins.push("alpha")
}
document.write(comapins+"<br>")

//forEach() = ("Excutes a provided function once for each array element.")
let scum = [10,20,30,40,50,60,70,80,90];
let scam =["ten","twenty","thirty","forty","fifty","sixty","seventy","eigthy","ninety"]
scam.forEach(function(item,index){
    document.write(index+1+"-"+item+"<br>")
})