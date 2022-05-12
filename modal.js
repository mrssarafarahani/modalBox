const showModal = document.querySelector(".openModal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop")
const close = document.querySelector(".close")
const confirmModal = document.querySelector(".confirm")

function closeModal() {
    modal.style.opacity = "0";
    modal.style.transform = ("translateY(-100vh)");
    backDrop.style.display = "none";
}

showModal.addEventListener("click", () => {
    modal.style.opacity = "1";
    modal.style.transform = ("translateY(10vh)");
    backDrop.style.display = "block";

})
close.addEventListener("click", closeModal);
backDrop.addEventListener("click", closeModal);
confirmModal.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "اطلاعات با موفقیت ثبت شد . "
    document.querySelector("body").appendChild(p);
    closeModal();
});