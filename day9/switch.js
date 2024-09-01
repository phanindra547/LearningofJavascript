switch(true){
    case 10>20:
        a="Violet color"

    break;
    case 200<30:
        a="Indigo color"
      

    break;
    case 50>20:
        a="Blue Color"

    break;
    case 100>=100:
        a="Green color"

    break;

    default:
        a= "yellow and orange color"

    break
    

}
document.write("<b>"+a + "</b>"+"<hr>")

//student reults
let first = prompt("Enter your name")
let marks =prompt("Enter your marks")

switch(true){
    case marks>90 && marks<=100:
        result="Congratulations You gained a O Grade"

    break;
    case marks>75 && marks<=90:
        result="Congratulations You gained a  S Grade"

    break;
    case marks>60 && marks <=75:
        result="Congratulations You gained a  A Grade"

    break;
    case marks>45 && marks<=60:
        result="Congratulations You gained a  B Grade"

    break;
    case marks>30 && marks<=45:
        result="Congratulations You gained a  c Grade"

    break;
    default:
        result="Better luck next time you failed"
        break;
    
    

}
document.write("<h2><i>"+result+"</i></h2>")