const image = document.querySelectorAll(".photo");


for (let im of image) {
    
im.addEventListener("mousemove", e => {
    image.forEach(a => {
        a.classList.remove("active");
    })
    im.classList.add("active");

} );
}