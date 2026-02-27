
window.onload = function() {
    init();
}

const init = async () => {
    const request = await fetch("/all-posts");
    const data = await request.json();
    console.log(data);

    // for (let post of data.posts) {
    
}