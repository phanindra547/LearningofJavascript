//we can get values by using id,class,tagname
//query selecter
// . for class in css
//# for id  in css



//document.getElementById("comapany")  below we can see  used by query selctor

const newr=(document.querySelector("#company"))
newr.textContent="nimja"

//document.getElementByClassName("comapany")  below we can see  used by query selctor

const newr1=(document.querySelector(".nav-left"));
newr1.textContent="Flipkart"

//document.getElementByTagName("comapany")  below we can see  used by query selctor

const newr2=(document.querySelector("div"));//slect the first div defaulty
newr2.textContent="ShopsyFlipkart"

const newr21=(document.querySelectorAll(".customers"));//slect the first div defaulty
for(let i=0;i<newr21.length;i++){
    newr21[i].textContent="Employeivjos"

}


