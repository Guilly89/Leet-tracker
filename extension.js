let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let deletebtn = document.getElementById("delete-btn");

deletebtn.addEventListener("dblclick", function(){
    ulEl.innerHTML = ""
    localStorage.clear();
    // console.log(localStorage.getItem("myleads"))
})



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    console.log(myLeads)
})

let x=0;

let printbtn = document.getElementById('print-btn');
printbtn.addEventListener('click', print)



let leadsfromstorage = JSON.parse(localStorage.getItem("myleads"))
if(leadsfromstorage){
    myLeads = leadsfromstorage;
    print();

}

function print(){
    for (let i = x; i < myLeads.length; i++) {
        console.log(myLeads.length)
        console.log(myLeads[i])
        ulEl.innerHTML += "<li><a href='" + myLeads[i] + "' target='_blank'>" + leadsfromstorage[i] + "</a></li>";

       
    }
    x=myLeads.length;
    console.log(x);
}