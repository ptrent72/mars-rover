const dots = document.querySelectorAll(".dot");


dots.forEach(function (dot) {
    dot.addEventListener("click", function (e) {
        e.preventDefault();
        const this_dot = e.target;
        this_dot.classList.add("active");
    });
});

const close_buttons = document.querySelectorAll(".close");

close_buttons.forEach(function (close_button) {
    close_button.addEventListener("click", function (e) {
        e.preventDefault(); 
            e.stopPropagation();
    
        const this_close_button = e.target;
        const this_dot = this_close_button.closest(".dot");
    
        this_dot.classList.remove("active");
    });
});