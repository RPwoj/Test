const image = document.querySelectorAll(".photo");


for (let im of image) {
im.addEventListener("click", e => {
    im.classList.add("active");
    console.log("ii");
} );
}