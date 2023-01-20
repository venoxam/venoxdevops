/* istanbul ignore file */
try {
    const { isEmpty, checkGamerTag } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        feedbackMessageText = isEmpty(gamerTagValue) && checkGamerTag(gamerTagValue)
            ? "Gamer tag doesnt match"
            : "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
