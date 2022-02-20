document.querySelectorAll(".image-gallery img").forEach(Image => {
    Image.onclick = () => {
        document.querySelector(".image-popup").style.display = "block";
        document.querySelector(".image-popup img").src = Image.getAttribute("src");
    }
});

document.querySelector(".image-popup span").onclick = () => {
    document.querySelector(".image-popup").style.display = "none";
}