function goToScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }
}


/* GIFT */

function openGift() {
    const gift = document.querySelector(".gift-box");

    gift.style.transform = "scale(1.2) rotate(8deg)";

    setTimeout(() => {
        goToScreen("cake");
    }, 800);
}


/* CAKE */

function cakeClicked() {
    const cake = document.getElementById("cake-object");

    cake.style.transform = "scale(0)";
    cake.style.opacity = "0";

    setTimeout(() => {
        cake.style.display = "none";

        setTimeout(() => {
            goToScreen("finale");
        }, 1800);

    }, 700);
}


/* FINALE */

let magicClicks = 0;

function magicClick() {

    magicClicks++;

    const message = document.getElementById("magicMessage");
    const button = document.getElementById("magicButton");

    if (magicClicks === 1) {

        message.innerHTML =
            "I told you not to click it. 👀";

    } else if (magicClicks === 2) {

        message.innerHTML =
            "Seriously? 😭";

        document.body.style.transform =
            "rotate(1deg)";

    } else if (magicClicks === 3) {

        message.innerHTML =
            "WHY ARE YOU STILL CLICKING IT 💀";

        button.style.transform =
            "scale(1.15)";

    } else if (magicClicks === 4) {

        message.innerHTML =
            "Okay fine... you win. 💯";

    } else {

        goToScreen("bye");

    }
}
