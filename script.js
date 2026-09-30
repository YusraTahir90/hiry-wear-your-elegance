const button = document.getElementById("btn");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        button.innerHTML =
        '<i class="fa-solid fa-sun fa-bounce fa-xl" style="color: #f5d76e;"></i>';

    } else {

        button.innerHTML =
        '<i class="fa-solid fa-moon fa-bounce fa-xl" style="color: rgb(122, 57, 75);"></i>';

    }

});

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});