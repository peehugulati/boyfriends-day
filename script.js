const screenOne = document.getElementById("screenOne");
const screenTwo = document.getElementById("screenTwo");

const gamingButton = document.getElementById("gamingButton");
const meButton = document.getElementById("meButton");

const choiceMessage = document.getElementById("choiceMessage");

let gamingClicks = 0;
let movingToScreenTwo = false;


/* =========================
   SHOW MESSAGE
========================= */

function showMessage(mainText, subText = "") {

    choiceMessage.classList.remove("show");

    choiceMessage.innerHTML = `
        <div class="message-main">
            ${mainText}
        </div>

        ${
            subText
                ? `
                    <div class="message-sub">
                        ${subText}
                    </div>
                `
                : ""
        }
    `;

    void choiceMessage.offsetWidth;

    choiceMessage.classList.add("show");
}


/* =========================
   GO TO SCREEN 2
========================= */

function goToScreenTwo() {

    if (movingToScreenTwo) {
        return;
    }

    movingToScreenTwo = true;

    screenOne.classList.add("fade-out");

    setTimeout(() => {

        screenOne.style.display = "none";

        screenTwo.style.display = "block";

        screenTwo.classList.add("fade-in");

        window.scrollTo(0, 0);

    }, 650);
}


/* =========================
   GAMING BUTTON
========================= */

gamingButton.addEventListener("click", () => {

    gamingClicks++;

    /* First click */

    if (gamingClicks === 1) {

        showMessage(
            "FOR SURE 😭",
            "NOW TRY THAT AGAIN"
        );

        return;
    }


    /* Second click */

    if (gamingClicks === 2) {

        showMessage(
            "OKAY FINE 😭",
            "YOU GET A PASS BECAUSE YOU PLAY WITH ME 💗"
        );

        setTimeout(() => {
            goToScreenTwo();
        }, 1500);
    }

});


/* =========================
   ME BUTTON
========================= */

meButton.addEventListener("click", () => {

    showMessage(
        "I KNEW YOU'D MAKE THE RIGHT CHOICE 🥹💗"
    );

    setTimeout(() => {
        goToScreenTwo();
    }, 1100);

});