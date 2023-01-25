const view1 = document.getElementById("view1");
console.log(view1)
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

// to select all divs
const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs)

// to select all even divs
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs);
// to select all odd divs
const oddDivs = view1.querySelectorAll("div:nth-of-type(odd)")
console.log(oddDivs);

//loooping through the odd divs to change its css 
for (let i=0; i < oddDivs.length; i++) {
    oddDivs[i].style.backgroundColor = "#fff";
    oddDivs[i].style.color = "black";
}

// to change h1 inside the navbar
const changeNavText = document.querySelector("nav h1")
console.log(changeNavText);
changeNavText.textContent = "BobbyDre"

//to change the nav element with another html
const insertNavElement = document.querySelector("nav")
console.log(insertNavElement);
insertNavElement.innerHTML = "<h1>BobbyDre</h1><P>Welcome to JS</P>";
insertNavElement.style.justifyContent = "flex-between"


// Display view2
view1.style.display ="none"
view2.style.display ="flex"
view2.style.flexDirection ="row"
view2.style.flexWrap ="wrap"
view2.style.margin ="10px"


// to remove/delete everything in a page lastchild using loop

while(view2.lastChild){
    view2.lastChild.remove()
}

//to create a new element in a page
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "pink";
    newDiv.style.color = "#000";
    newDiv.style.fontWeight = "bold";
    newDiv.style.fontSize = "1.5rem";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv)
}

// create page content using loop
for(let i = 1; i <= 12; i++){
    createDivs(view2, i);
}






