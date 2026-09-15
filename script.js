// ==========================================
// SCREEN NAVIGATION
// ==========================================

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


// ==========================================
// 🎁 OPEN GIFT
// ==========================================

function openGift() {
    const gift = document.querySelector(".gift-box");

    if (!gift) return;

    gift.classList.add("gift-shake");

    setTimeout(() => {
        gift.classList.remove("gift-shake");
        goToScreen("cake");
    }, 1000);
}


// ==========================================
// 🎂 CAKE CLICK
// ==========================================

function cakeClicked() {
    const cake = document.getElementById("cake-object");

    if (!cake) return;

    cake.style.pointerEvents = "none";

    // Cake disappears
    cake.style.transition = "all 0.8s ease";
    cake.style.transform = "scale(0) rotate(20deg)";
    cake.style.opacity = "0";

    setTimeout(() => {
        cake.style.display = "none";

        // Hide the original cake message
        const cakeMessage =
            document.querySelector("#cake h2");

        if (cakeMessage) {
            cakeMessage.style.display = "none";
        }

        // Start birthday graffiti
        createBirthdayWall();

    }, 800);
}


// ==========================================
// 💗 BIRTHDAY GRAFFITI WALL
// ==========================================

function createBirthdayWall() {

    const cakeScreen =
        document.getElementById("cake");

    if (!cakeScreen) return;

    // Remove previous elements
    const oldWall =
        document.getElementById("birthday-wall");

    const oldConfetti =
        document.getElementById("birthday-confetti");

    const oldContinue =
        document.getElementById("graffiti-continue");

    if (oldWall) oldWall.remove();
    if (oldConfetti) oldConfetti.remove();
    if (oldContinue) oldContinue.remove();


    // ======================================
    // MESSAGE WALL
    // ======================================

    const wall =
        document.createElement("div");

    wall.id = "birthday-wall";

    wall.style.position = "fixed";
    wall.style.inset = "0";
    wall.style.width = "100vw";
    wall.style.height = "100vh";
    wall.style.overflow = "hidden";
    wall.style.zIndex = "100";
    wall.style.pointerEvents = "none";

    cakeScreen.appendChild(wall);


    const messages = [
        "Enjoy your bday beautiful 💗",
        "Mwuahh 💋"
    ];


    for (let i = 0; i < 50; i++) {

        const text =
            document.createElement("div");

        text.textContent =
            messages[
                Math.floor(
                    Math.random() * messages.length
                )
            ];

        text.style.position = "absolute";

        text.style.left =
            Math.random() * 100 + "vw";

        text.style.top =
            Math.random() * 100 + "vh";

        text.style.fontSize =
            (14 + Math.random() * 25) + "px";

        text.style.fontWeight = "800";

        text.style.whiteSpace = "nowrap";

        text.style.textShadow =
            "0 3px 15px rgba(0,0,0,0.25)";

        text.style.transform =
            `translate(-50%, -50%) rotate(${Math.random() * 70 - 35}deg)`;

        text.style.opacity =
            0.6 + Math.random() * 0.4;

        text.style.animation =
            `graffitiFloat ${2 + Math.random() * 3}s ease-in-out infinite`;

        text.style.animationDelay =
            Math.random() * 2 + "s";

        wall.appendChild(text);
    }


    // ======================================
    // 🎉 CONFETTI
    // ======================================

    createConfetti(cakeScreen);


    // ======================================
    // CONTINUE BUTTON
    // ======================================

    setTimeout(() => {

        const continueButton =
            document.createElement("button");

        continueButton.id =
            "graffiti-continue";

        continueButton.textContent =
            "Okay… continue 👀";

        continueButton.style.position =
            "fixed";

        continueButton.style.left =
            "50%";

        continueButton.style.bottom =
            "45px";

        continueButton.style.transform =
            "translateX(-50%)";

        continueButton.style.zIndex =
            "200";

        continueButton.style.padding =
            "15px 25px";

        continueButton.style.border =
            "none";

        continueButton.style.borderRadius =
            "30px";

        continueButton.style.background =
            "white";

        continueButton.style.color =
            "#171027";

        continueButton.style.fontSize =
            "16px";

        continueButton.style.fontWeight =
            "800";

        continueButton.style.cursor =
            "pointer";

        continueButton.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

        continueButton.style.animation =
            "buttonAppear 0.6s ease forwards";


        continueButton.onclick = () => {

            // Remove graffiti elements
            if (wall) wall.remove();

            const confetti =
                document.getElementById(
                    "birthday-confetti"
                );

            if (confetti) {
                confetti.remove();
            }

            continueButton.remove();

            // Go to Magic Button
            goToScreen("finale");

            // Reset finale
            resetFinale();
        };


        cakeScreen.appendChild(
            continueButton
        );

    }, 2500);
}


// ==========================================
// 🎉 CONFETTI
// ==========================================

function createConfetti(container) {

    const confetti =
        document.createElement("div");

    confetti.id =
        "birthday-confetti";

    confetti.style.position =
        "fixed";

    confetti.style.inset =
        "0";

    confetti.style.width =
        "100vw";

    confetti.style.height =
        "100vh";

    confetti.style.overflow =
        "hidden";

    confetti.style.pointerEvents =
        "none";

    confetti.style.zIndex =
        "150";

    container.appendChild(confetti);


    const symbols = [
        "✨",
        "💗",
        "🎉",
        "💫",
        "🥳",
        "🎊",
        "💖",
        "⭐"
    ];


    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("span");

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.position =
            "absolute";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            Math.random() * 100 + "vh";

        piece.style.fontSize =
            (12 + Math.random() * 22) + "px";

        piece.style.animation =
            `confettiFloat ${2 + Math.random() * 4}s ease-in-out infinite`;

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.appendChild(piece);
    }
}


// ==========================================
// 😈 MAGIC BUTTON
// ==========================================

let magicClicks = 0;


function resetFinale() {

    magicClicks = 0;

    const message =
        document.getElementById("magicMessage");

    const button =
        document.getElementById("magicButton");

    if (message) {
        message.innerHTML = "";
    }

    if (button) {

        button.style.display =
            "inline-block";

        button.style.transform =
            "scale(1)";

        button.textContent =
            "DO NOT CLICK";

        button.onclick =
            magicClick;
    }

    const oldHeart =
        document.getElementById("hidden-heart");

    if (oldHeart) {
        oldHeart.remove();
    }
}


function magicClick() {

    magicClicks++;

    const message =
        document.getElementById("magicMessage");

    const button =
        document.getElementById("magicButton");


    if (magicClicks === 1) {

        message.innerHTML =
            "I told you not to click it. 👀";

        button.textContent =
            "CLICK AGAIN 😈";
    }


    else if (magicClicks === 2) {

        message.innerHTML =
            "Seriously? 😭";

        button.textContent =
            "ONE MORE";

        document.body.style.transform =
            "rotate(1deg)";
    }


    else if (magicClicks === 3) {

        message.innerHTML =
            "WHY ARE YOU STILL CLICKING IT 💀";

        button.textContent =
            "OKAY FINE";

        button.style.transform =
            "scale(1.15)";
    }


    else if (magicClicks === 4) {

        message.innerHTML =
            "Okay fine... you win. 💯";

        button.textContent =
            "WAIT... 👀";

        button.style.transform =
            "scale(1)";
    }


    else {

        document.body.style.transform =
            "none";

        // Remove button
        button.style.display =
            "none";

        // Start hidden heart
        showHiddenHeart();
    }
}


// ==========================================
// 💗 HIDDEN HEART
// ==========================================

function showHiddenHeart() {

    const finale =
        document.getElementById("finale");

    const message =
        document.getElementById("magicMessage");

    if (!finale) return;


    if (message) {

        message.innerHTML =
            "Okay... one last thing. 👀<br><br>" +
            "<strong>Find the hidden heart.</strong>";
    }


    // Create heart
    const heart =
        document.createElement("div");

    heart.id =
        "hidden-heart";

    heart.textContent =
        "💗";

    heart.style.position =
        "fixed";

    heart.style.left =
        (10 + Math.random() * 80) + "vw";

    heart.style.top =
        (15 + Math.random() * 65) + "vh";

    heart.style.fontSize =
        "32px";

    heart.style.cursor =
        "pointer";

    heart.style.zIndex =
        "500";

    heart.style.opacity =
        "0.3";

    heart.style.filter =
        "blur(0.5px)";

    heart.style.transition =
        "all 0.4s ease";

    heart.style.animation =
        "heartPulse 1.5s ease-in-out infinite";


    // Make it easier to notice when cursor is near
    heart.addEventListener(
        "mouseenter",
        () => {

            heart.style.opacity =
                "1";

            heart.style.transform =
                "scale(1.35)";
        }
    );


    heart.addEventListener(
        "mouseleave",
        () => {

            heart.style.opacity =
                "0.3";

            heart.style.transform =
                "scale(1)";
        }
    );


    // Mobile tap
    heart.addEventListener(
        "click",
        heartFound
    );


    finale.appendChild(heart);
}


// ==========================================
// 💗 HEART FOUND
// ==========================================

function heartFound() {

    const heart =
        document.getElementById(
            "hidden-heart"
        );

    const message =
        document.getElementById(
            "magicMessage"
        );


    if (heart) {

        heart.style.animation =
            "heartFound 0.8s ease forwards";

        heart.style.opacity =
            "1";
    }


    if (message) {

        message.innerHTML =
            "YOU FOUND IT 💗<br><br>" +
            "Okay... NOW we're actually done. 😭";
    }


    createFinalCelebration();
}


// ==========================================
// 🎊 FINAL CELEBRATION
// ==========================================

function createFinalCelebration() {

    const finale =
        document.getElementById("finale");

    if (!finale) return;


    const celebration =
        document.createElement("div");

    celebration.id =
        "final-celebration";

    celebration.style.position =
        "fixed";

    celebration.style.inset =
        "0";

    celebration.style.pointerEvents =
        "none";

    celebration.style.zIndex =
        "600";

    finale.appendChild(
        celebration
    );


    const symbols = [
        "🎉",
        "💗",
        "✨",
        "🥳",
        "🎂",
        "💫",
        "💋",
        "🎊"
    ];


    for (let i = 0; i < 60; i++) {

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
            Math.random() * 100 + "vw";

        item.style.top =
            "-40px";

        item.style.fontSize =
            (15 + Math.random() * 25) + "px";

        item.style.animation =
            `finalFall ${2 + Math.random() * 3}s linear forwards`;

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        celebration.appendChild(item);
    }


    // Go to Bye ONLY after the heart is found
    setTimeout(() => {

        goToScreen("bye");

    }, 5000);
}


// ==========================================
// ✨ ANIMATIONS
// ==========================================

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

    0%, 100% {
        transform:
            translateY(0)
            rotate(0deg);
    }

    50% {
        transform:
            translateY(-18px)
            rotate(180deg);
    }
}


@keyframes buttonAppear {

    from {
        opacity: 0;
        transform:
            translateX(-50%)
            translateY(20px);
    }

    to {
        opacity: 1;
        transform:
            translateX(-50%)
            translateY(0);
    }
}


@keyframes heartPulse {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}


@keyframes heartFound {

    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(3);
    }

    100% {
        transform: scale(8);
        opacity: 0;
    }
}


@keyframes finalFall {

    0% {
        transform:
            translateY(-40px)
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
        opacity: 1;
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

document.head.appendChild(
    animationStyle
);
