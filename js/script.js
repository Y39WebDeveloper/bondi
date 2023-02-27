let switcherLinks = document.querySelectorAll("#switchers li");
let imgs = Array.from(document.querySelectorAll("#workGallery .all"));

switcherLinks.forEach((link) => {
    link.addEventListener("click", switchActive);
    link.addEventListener("click", manageImg);
});

function switchActive(){
    switcherLinks.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
        this.classList.add("rounded-pill");
    });
}


function manageImg(){
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block";
    })
}