// ===============================
// SCREEN NAVIGATION
// ===============================

function goToScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);

    if (nextScreen) {
        nextScreen.classList.add("active");
        window.scrollTo(0, 0);
    }
}


// ===============================
// 🎁 GIFT BOX
// ===============================

function openGift() {
    const gift = document.querySelector(".gift-box");

    if (!gift) return;

    // Shake the gift
    gift.classList.add("gift-shake");

    setTimeout(() => {
        gift.classList.remove("gift-shake");
        goToScreen("cake");
    }, 1000);
}


// ===============================
// 🎂 CAKE + GRAFFITI
// ===============================

function createGraffiti() {
    const graffiti = document.querySelector(".graffiti");

    if (!graffiti) return;

    graffiti.innerHTML = "";

    const words = [
        "HAPPY BIRTHDAY 💗",
        "Mwuahh 💋",
        "✨",
        "🎉",
        "💗",
        "🥳",
        "HAPPY BDAY",
        "💯",
        "🎂",
        "✨",
        "Mwuahh 💋",
        "💗"
    ];

    for (let i = 0; i < 35; i++) {
        const item = document.createElement("span");

        item.textContent =
            words[Math.floor(Math.random() * words.length)];

        item.style.left = Math.random() * 100 + "%";
        item.style.top = Math.random() * 100 + "%";

        item.style.fontSize =
            (12 + Math.random() * 25) + "px";

        item.style.transform =
            `rotate(${Math.random() * 60 - 30}deg)`;

        item.style.animationDelay =
            (Math.random() * 2) + "s";

        graffiti.appendChild(item);
    }
}


// ===============================
// 🎂 CAKE CLICK
// ===============================

function cakeClicked() {
    const cake = document.getElementById("cake-object");

    if (!cake) return;

    // Prevent multiple clicks
    cake.style.pointerEvents = "none";

    // Cake shrinks away
    cake.style.transform = "scale(0) rotate(15deg)";
    cake.style.opacity = "0";

    setTimeout(() => {

        cake.style.display = "none";

        // Create the birthday graffiti wall
        createBirthdayWall();

    }, 700);
}


// ===============================
// 💗 BIRTHDAY GRAFFITI WALL
// ===============================

function createBirthdayWall() {
    const cakeScreen = document.getElementById("cake");

    if (!cakeScreen) return;

    // Remove old graffiti
    const oldWall = document.getElementById("birthday-wall");

    if (oldWall) {
        oldWall.remove();
    }

    const wall = document.createElement("div");

    wall.id = "birthday-wall";

    // Make sure it covers the whole screen
    wall.style.position = "absolute";
    wall.style.inset = "0";
    wall.style.overflow = "hidden";
    wall.style.zIndex = "20";
    wall.style.pointerEvents = "none";

    cakeScreen.appendChild(wall);

    const messages = [
        "Enjoy your bday beautiful 💗",
        "Mwuahh 💋"
    ];

    // Lots of floating messages
    for (let i = 0; i < 45; i++) {

        const text = document.createElement("div");

        text.textContent =
            messages[i % messages.length];

        text.style.position = "absolute";

        text.style.left =
            Math.random() * 100 + "%";

        text.style.top =
            Math.random() * 100 + "%";

        text.style.fontSize =
            (12 + Math.random() * 22) + "px";

        text.style.fontWeight = "800";

        text.style.whiteSpace = "nowrap";

        text.style.transform =
            `translate(-50%, -50%) rotate(${Math.random() * 70 - 35}deg)`;

        text.style.opacity =
            0.55 + Math.random() * 0.45;

        text.style.animation =
            `graffitiFloat ${2 + Math.random() * 3}s ease-in-out infinite`;

        text.style.animationDelay =
            Math.random() * 2 + "s";

        wall.appendChild(text);
    }

    // Confetti / sprinkles
    createConfetti(cakeScreen);

    // Show the wall for a while
    setTimeout(() => {

        // Smoothly go to finale
        goToScreen("finale");

    }, 5000);
}


// ===============================
// 🎉 CONFETTI
// ===============================

function createConfetti(container) {

    const oldConfetti =
        document.getElementById("birthday-confetti");

    if (oldConfetti) {
        oldConfetti.remove();
    }

    const confetti =
        document.createElement("div");

    confetti.id = "birthday-confetti";

    confetti.style.position = "absolute";
    confetti.style.inset = "0";
    confetti.style.overflow = "hidden";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "15";

    container.appendChild(confetti);

    const symbols = [
        "✨",
        "💗",
        "🎉",
        "💫",
        "🥳",
        "🎊",
        "•"
    ];

    for (let i = 0; i < 60; i++) {

        const piece =
            document.createElement("span");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.position = "absolute";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.top =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            (10 + Math.random() * 20) + "px";

        piece.style.animation =
            `confettiFloat ${2 + Math.random() * 4}s ease-in-out infinite`;

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.appendChild(piece);
    }
}


// ===============================
// 😈 MAGIC BUTTON
// ===============================

let magicClicks = 0;

function magicClick() {

    magicClicks++;

    const message =
        document.getElementById("magicMessage");

    const button =
        document.getElementById("magicButton");

    if (!message || !button) return;


    if (magicClicks === 1) {

        message.innerHTML =
            "I told you not to click it. 👀";

        button.innerHTML =
            "CLICK AGAIN 😈";

    }

    else if (magicClicks === 2) {

        message.innerHTML =
            "Seriously? 😭";

        button.innerHTML =
            "ONE MORE";

        document.body.style.transform =
            "rotate(1deg)";

    }

    else if (magicClicks === 3) {

        message.innerHTML =
            "WHY ARE YOU STILL CLICKING IT 💀";

        button.innerHTML =
            "OKAY FINE";

        button.style.transform =
            "scale(1.15)";

    }

    else if (magicClicks === 4) {

        message.innerHTML =
            "Okay fine... you win. 💯";

        button.innerHTML =
            "WAIT... 👀";

        button.style.transform =
            "scale(1)";
    }

    else {

        // Reset the tiny screen rotation
        document.body.style.transform =
            "none";

        // Start hidden-heart section
        createHiddenHeart();

    }
}


// ===============================
// 💗 HIDDEN HEART
// ===============================

function createHiddenHeart() {

    const finale =
        document.getElementById("finale");

    if (!finale) return;

    // Hide the button
    const button =
        document.getElementById("magicButton");

    if (button) {
        button.style.display = "none";
    }

    const message =
        document.getElementById("magicMessage");

    if (message) {
        message.innerHTML =
            "Wait... something is hiding here. 👀<br><br>Find it.";
    }

    // Create hidden heart
    const heart =
        document.createElement("div");

    heart.id = "hidden-heart";

    heart.textContent = "💗";

    heart.style.position = "absolute";

    heart.style.left =
        (10 + Math.random() * 80) + "%";

    heart.style.top =
        (15 + Math.random() * 70) + "%";

    heart.style.fontSize =
        "28px";

    heart.style.cursor =
        "pointer";

    heart.style.opacity =
        "0.15";

    heart.style.transition =
        "all 0.4s ease";

    heart.style.zIndex =
        "100";

    heart.title =
        "You found me 👀";

    finale.appendChild(heart);


    // Make it slightly noticeable
    setTimeout(() => {

        heart.style.opacity =
            "0.35";

    }, 1500);


    // Click / tap
    heart.addEventListener("click", () => {

        heart.style.transform =
            "scale(4)";

        heart.style.opacity =
            "1";

        if (message) {

            message.innerHTML =
                "YOU FOUND IT 💗<br><br>" +
                "Okay... NOW we're actually done. 😭";

        }

        createFinalCelebration();

    });
}


// ===============================
// 🎉 FINAL CELEBRATION
// ===============================

function createFinalCelebration() {

    const finale =
        document.getElementById("finale");

    if (!finale) return;

    const celebration =
        document.createElement("div");

    celebration.style.position =
        "absolute";

    celebration.style.inset =
        "0";

    celebration.style.pointerEvents =
        "none";

    celebration.style.zIndex =
        "50";

    finale.appendChild(celebration);


    const symbols = [
        "🎉",
        "💗",
        "✨",
        "🥳",
        "🎂",
        "💫",
        "💋"
    ];


    for (let i = 0; i < 50; i++) {

        const item =
            document.createElement("span");

        item.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        item.style.position =
            "absolute";

        item.style.left =
            Math.random() * 100 + "%";

        item.style.top =
            "-30px";

        item.style.fontSize =
            (15 + Math.random() * 25) + "px";

        item.style.animation =
            `finalFall ${2 + Math.random() * 3}s linear forwards`;

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        celebration.appendChild(item);
    }


    // Go to Bye screen after celebration
    setTimeout(() => {

        goToScreen("bye");

    }, 5500);
}


// ===============================
// ✨ ADD REQUIRED ANIMATIONS
// ===============================

const animationStyle =
    document.createElement("style");

animationStyle.innerHTML = `

@keyframes graffitiFloat {

    0%, 100% {
        transform:
            translate(-50%, -50%)
            rotate(-8deg)
            scale(1);
    }

    50% {
        transform:
            translate(-50%, -55%)
            rotate(8deg)
            scale(1.08);
    }
}


@keyframes confettiFloat {

    0% {
        transform:
            translateY(-10px)
            rotate(0deg);
    }

    50% {
        transform:
            translateY(15px)
            rotate(180deg);
    }

    100% {
        transform:
            translateY(-10px)
            rotate(360deg);
    }
}


@keyframes finalFall {

    0% {
        transform:
            translateY(-30px)
            rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(110vh)
            rotate(360deg);
        opacity: 0.9;
    }
}


.gift-shake {

    animation:
        giftShake 0.15s ease-in-out 5;
}


@keyframes giftShake {

    0% {
        transform: rotate(0deg) scale(1);
    }

    25% {
        transform: rotate(-8deg) scale(1.05);
    }

    50% {
        transform: rotate(8deg) scale(1.1);
    }

    75% {
        transform: rotate(-6deg) scale(1.05);
    }

    100% {
        transform: rotate(0deg) scale(1);
    }
}

`;

document.head.appendChild(animationStyle);
