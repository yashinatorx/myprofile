const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal");

const openModal=()=>{
    console.log("MOdal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};