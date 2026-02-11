alert("javascript page has been successfully linked!");

console.log("this is a console message");
// window.onload is a function that will run when the page has finished loading
//window.onload is an event listener that listens for the "load" event on the window object. When the "load" event is fired, the function assigned to window.onload will be executed. This is useful for running code that needs to interact with the DOM or perform actions after all resources (like images, scripts, etc.) have been fully loaded.
window.onload = async() => {
    console.log("the page has loaded");
    //retrieves the specific element by its id "important" and assigns it to the variable importantParagraph. This allows you to interact with the paragraph element in your JavaScript code, such as adding event listeners or manipulating its properties.
    document.getElementById("important");

    //manipulate the text of the paragraph element with id "important" by setting its innerText property to "This is important!". This will change the content of the paragraph to display the new text on the webpage.
    document.getElementById("important").innerHTML = "I have changed the text of this paragraph using JavaScript!";

    let importantParagraph = document.getElementById("important");
    // importantParagraph.style.backgroundColor = "red";

    importantParagraph.classList.add("hide");
    importantParagraph.classList.remove("hide");
       
    let newParagraph = document.createElement("p");
    // 4 steps to create a new element and add it to the page
    // 1. Create the element that will be add a child to
    let c = document.getElementById("container");
     // 2. what type of tag will be created
    let i = document.createElement("img");
    // 3. modify the element as needed
    i.src = "Connaught.png";
    // 4. add the new child element to the parent element
    c.appendChild(i);
    // event listener is a function that has 2 parameters: the type of event to listen for, and the function to run when that event occurs. In this case, we are listening for a "click" event on the container element, and when that event occurs, we will run a function that displays an alert with the message "Container clicked!".
    c.addEventListener("click", () => {
        // alert("Container clicked!");
        console.log("Container was clicked!");
        if (importantParagraph.classList.contains("hide")){
            importantParagraph.classList.remove("hide");
        } else {
            importantParagraph.classList.add("hide");
        }
    });
    // use class as the selector
    let blues = document.getElementsByClassName("blue");
    // for (let i = 0; i < blues.length; i++){
    //     blues[i].style.backgroundColor = "lightblue";
    // }
    blues[1].style.backgroundColor = "lightblue";
    blues[0].style.backgroundColor = "lightyellow";

    for (let b of blues){
        b.style.border = "2px solid blue";
    }
    // 1. Create the URLSearchParams object with the desired parameters
    let params = new URLSearchParams({
        apikey: "63cd8a94",
        s: "one battle after another",
        type: "movie",
    });
    let url = "http://www.omdbapi.com/?" + params;
    console.log(url);
    // async function to fetch data from the API
    let response = await fetch(url);
    console.log(response);
    // parse the JSON data from the response
    let data = await response.json();
    console.log(data);
    let movies = data.Search;
    console.log(movies);

    for (let m of movies){
        let div = document.createElement("div");
        div.textContent = m.Title
        let poster = document.createElement("img");
        poster.src = m.Poster;
        c.appendChild(div);
        div.appendChild(poster);
        
    }
}
