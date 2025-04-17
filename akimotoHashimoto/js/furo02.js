
    const navbutton01 = document.getElementById("drawerButton");
    const navlist = document.querySelector("header nav ul");

    function downbotton() {
        navlist.classList.toggle("open");
        navbutton01.classList.toggle("redesign");
    }

    navbutton01.addEventListener("click", downbotton);
