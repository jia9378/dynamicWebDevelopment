window.onload = () => {
  messageRequest();
};

const messageRequest = async () => {
  // we can use a relative path because we are making the request from the same server
  const response = await fetch("/messages");
  console.log(response);
  const json = await response.json();
  console.log(json);

  let guests = json;
  // create a new paragraph element for each message and name, and add them to the page
    let m = document.getElementById("messages");
    // let n = document.getElementById("names");
  for (let g of guests) {
    let row = document.createElement("div");
    row.className = "messageRow";
    let message = document.createElement("span");
    let name = document.createElement("span");
    message.textContent = g.message;
    name.textContent = "--" + g.name;
    row.appendChild(message);
    row.appendChild(name);
    // n.appendChild(name);
    m.appendChild(row);
  }
};