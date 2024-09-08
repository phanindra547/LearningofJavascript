//Function Expression
//Anonymous Function
//Function with parameters and retuen value

//function expression assign a varaible to the function
var a=function app(){
    document.write("Fuction Expressionnn22 <br>")
}
a();

//from above function if we remove the name of the function then it will be a Anonymous function

var a1=function(){
    document.write("Anonymous Expressionnn22 <br>")
}
a1();

//giving parametrs in the function
function a2(q,w){
    return q+w+"<hr>"
}
document.write(a2(12,3))
document.write(a2(100,3))
document.write(a2(12,30))


var userName =prompt("please Enter Your Name")
function jusr(myFriend){
    return document.write("hello Welcome "+myFriend)
}
jusr(userName)