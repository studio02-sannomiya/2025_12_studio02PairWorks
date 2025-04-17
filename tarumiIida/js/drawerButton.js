const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("#nav nav ul");
const drawerMenuContent = document.getElementById("drawerMenuContent");
const navElement = document.querySelector("#nav nav");

function openDrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("open");
    drawerMenuContent.classList.toggle("open");

    if (drawerButton.classList.contains("open")) {
        drawerButton.style.backgroundImage = "url(images/close.png)";
        navElement.classList.add("hidden"); // ドロワーメニューが開いたときのみhiddenクラスを追加
        fetch("drawer menu.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(html => {
                const temp = document.createElement("div");
                temp.innerHTML = html;
                const drawerContent = temp.querySelector("#drawerMenuContent").innerHTML;
                const li = document.createElement("li");
                li.innerHTML = drawerContent;
                drawerMenu.appendChild(li);
            })
            .catch(error => {
                console.error("There has been a problem with your fetch operation:", error);
            });
    } else {
        drawerButton.style.backgroundImage = "url(images/menu.png)";
        drawerMenu.innerHTML = "";
        navElement.classList.remove("hidden"); // ドロワーメニューが閉じたときのみhiddenクラスを削除
    }
}

drawerButton.addEventListener("click", function() {
    openDrawer();
});