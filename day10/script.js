function rideBike(){
    document.write("<u><h1><i><b> Riding a Bike at high speed</b></i></h1></u><hr>")
    console.log("Speed thrils but kills")

}
rideBike()
rideBike()

//scope
//global scope variables used everywhere
var round1="aptitude";
let round2="coding";
const round3="interview"
function job(){
    document.write(round1+"<br>")
    document.write(round2+"<br>")
    document.write(round3+"<br>")
}
job()

//function scope the variable used only inside the function block
function intent(){
    var x="Placed";
    document.write(x+"<hr>")
}
intent()

//block scope  within the block varaible only in function
 //but var keyword doesnot obey this block where as let and const are obey for block scope

function sports(){
    if(10<20){
        var current="placed"
        document.write(current)
              
        let present="unplaced"
        

    }
    document.write(current)
    document.write(presnet)
    
    

}
sports()