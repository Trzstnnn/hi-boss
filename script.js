const messages = [
    "Are you sure?",
    "Sige di mo nako crush!",
    "Aba! Oky ouch...",
    "Sure na ba yan? :(",
    "Just think about it!",
    "Sige isa pa, iiyak talaga ako!!",
    "Ge iiyak ako sige ka:(",
    "I will be very very very sad!!!!!",
    "Ok dwg! Titigilan na kita...",
    "joke lang, sige na please! 🥺"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
