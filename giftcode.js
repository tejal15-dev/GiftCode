// Function to save the gift code in Local Storage (Accessible to All Users)
function saveGiftCode() {
    var code = document.getElementById("giftCodeInput").value.trim();
    if (code === "") {
        alert("Please enter a valid gift code.");
        return;
    }
    localStorage.setItem("giftCode", code); // Save globally
    alert("Gift Code Saved Successfully!");
    location.reload(); // Refresh the page to update the user panel
}

// Function to get the gift code from Local Storage
function getGiftCodeFromStorage() {
    return localStorage.getItem("giftCode") || null;
}

// Function to update the displayed gift code for users
function updateGiftCodeDisplay() {
    var code = getGiftCodeFromStorage();
    var codeDisplay = document.getElementById("codeDisplay");
    if (code) {
        codeDisplay.textContent = code;
    } else {
        codeDisplay.textContent = "No code available";
    }
}

// Function to copy the gift code
function copyCode() {
    var codeDisplay = document.getElementById("codeDisplay");
    var code = codeDisplay.textContent;
    if (code === "No code available") {
        alert("No gift code available to copy!");
        return;
    }

    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    alert("Gift code copied!");
}

// On page load, display saved gift code
window.onload = function () {
    updateGiftCodeDisplay();
};

// ** Wapkiz: Hide Admin Panel for Users (Only Admin Feature) **
var isAdmin = false; // Change this to `true` for admin mode
if (!isAdmin) {
    document.getElementById("adminPanel").style.display = "none";
}
