//EVENT LISTENER


// Display view2
view1.style.display ="none"
view2.style.display ="flex"
view2.style.flexDirection ="row"
view2.style.flexWrap ="wrap"
view2.style.margin ="10px"

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
})

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        // view.classList.add("purple");
        // view.classList.remove("darkblue"); 
        view.classList.toggle("yellow");
        view.classList.toggle("darkblue"); 
    }, false);

    div.addEventListener("click", (event) => {
        // div.style.backgroundColor = "blue";
        div.classList.toggle("green");
        div.classList.toggle("black"); 
    }, false);

    h2.addEventListener("click", (event) => {
        const h2Text = event.target.textContent;
        h2Text === "My 2nd View" 
        ? (event.target.textContent = "clicked")
        : (event.target.textContent = "My 2nd View")
        // event.target.textContent = "Clicked";
    }, false);

    const navBar = document.querySelector("nav");

    navBar.addEventListener("mouseover", (event) => {
        navBar.classList.add("increaseheight");
});

// to make nav return to original height after moving mouse out
navBar.addEventListener("mouseout", (event) => {
    navBar.classList.remove("increaseheight");
});
}
