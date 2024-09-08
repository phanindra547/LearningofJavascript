
//for single targeted tags
// const tagest = document.getElementsByTagName("p")[3]
// tagest.textContent="Can you change the paragraph"

// const tagest1 = document.getElementsByTagName("p")[2]
// tagest1.innerHTML="<h5>Can you change the paragraph</h5>"
//for all tags
const tagest = document.getElementsByTagName("p")
// tagest.textContent="Can you change the paragraph"
for(let i=0;i<tagest.length;i++){
    tagest[i].textContent="Can you cahnge the paragarph"

}
