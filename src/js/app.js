const image = document.querySelectorAll("img");
const x = () => {
    console.log("ok");
}
for (im of image) {
im.addEventListener("click",x );
}