const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const about = document.querySelector(".about")
const skills = document.querySelector(".skills");
const lineBars = document.querySelectorAll(".line_bar");

var header = document.querySelector("header");
hamburger.addEventListener("click", mobilemenu);



function mobilemenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})




// for contact

const inputs = document.querySelectorAll("input")
const labels = document.querySelectorAll("label");
const btn = document.querySelector("#btn")
const textArea = document.querySelector("textarea");
function addClass(value) {
    for(let i=1; i<inputs.length; i++) {
        if(inputs[i].value.length > 0) {
            labels[i-1].classList.add("done")
        }else {
            labels[i-1].classList.remove("done")
        }
    }
}

btn.addEventListener('click', function(e) {
    if(inputs[1].value.length > 0 &&
        inputs[2].value.length > 0 &&
        inputs[3].value.length > 0 &&
        textArea.value.length > 0) {
        setTimeout(()=> {
            window.stop();
            Swal.fire({
                title: "Message has been sent",
                text: "Click Ok",
                icon: "success"
            });
            inputs[1].value = "";
            inputs[2].value = "";
            inputs[3].value = "";
            textArea.value = "";
        }, 2000)
    }else {
        setTimeout(()=> {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required to be filled out",
            footer: ''
        }, 2000);
        })
    }
}) 

// for animation scroll

// about animation count
const boxes = document.querySelectorAll('.box h5');
const interval = 4000;
window.addEventListener("scroll", function() {
    if(window.scrollY <= about.offsetTop - 350) {
        boxes.forEach((box)=> {
            let start = 0;
            let end = parseInt(box.getAttribute("data-target"));
            let duration = Math.floor(interval / end);
            let counter = this.setInterval(()=> {
                start += 1;
                box.textContent = `+${start}`;
                if(start === end) {
                    this.clearInterval(counter)
                }
            }, duration)
        })
    }
})


const contactMe = document.querySelector(".contactMe");
const inputContainer = document.querySelectorAll(".contactMe .formContainer div");

window.onscroll = function() {
    // skills animation
    if(window.scrollY > skills.offsetTop - 350) {
        lineBars.forEach(()=> {
            lineBars[0].style.width = "95%"
            lineBars[1].style.width = "90%"
            lineBars[2].style.width = "85%"
            lineBars[3].style.width = "70%"
            lineBars[4].style.width = "70%"
            lineBars[5].style.width = "80%"
            lineBars[6].style.width = "80%"
            lineBars[7].style.width = "60%"
            lineBars[8].style.width = "60%"
        });
    };


    // contact animation
    if(window.scrollY > contactMe.offsetTop - 750) {
        inputContainer.forEach((div)=> {
            div.style.transform = 'translateX(0px)';
        })
    };
};