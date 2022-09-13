const header = document.querySelector("header")
const closeModal = document.querySelector(".close-modal")
const modal = document.querySelector(".modal-container")


let tracker

window.addEventListener("scroll", function () {

    if (this.pageYOffset < tracker) {
        header.style.opacity = 1
    }
    else {
        header.style.opacity = 0
    }
    tracker = this.pageYOffset;
})

// setTimeout(function(){
//     modal.classList.remove("deactivate-modal")
// }, 10000)

closeModal.addEventListener("click", function () {
    modal.classList.add("deactivate-modal")
})


document.addEventListener("click", function (e) {
    if (e.target.getAttribute("data-modal") == "modal") {
        if (!modal.classList.contains("deactivate-modal")) {
            modal.classList.add("deactivate-modal")
        }
    }
})

document.addEventListener("keypress", function (e) {
    if (!modal.classList.contains("deactivate-modal") && e.key == "c") {
        modal.classList.add("deactivate-modal")
    }
})