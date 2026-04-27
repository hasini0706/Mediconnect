
function sendMessage() {
    let input = document.getElementById("msgInput");
    let chat = document.getElementById("chatArea");

    let msg = input.value;
    if (!msg) return;

    chat.innerHTML += `<p class="user"><b>You:</b> ${msg}</p>`;

    input.value = "";

    setTimeout(() => {
        chat.innerHTML += `<p class="doctor"><b>Doctor:</b> ${getReply(msg)}</p>`;
    }, 800);
}

function getReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("fever")) {
        return "Take rest and drink water. Use paracetamol if needed.";
    }

    if (msg.includes("cold")) {
        return "Drink warm fluids and steam inhalation helps.";
    }

    if (msg.includes("headache")) {
        return "Rest properly and avoid screen time.";
    }

    return "Please describe your symptoms clearly.";
}

// 🔐 LOGIN FUNCTION
function login() {
    let name = document.getElementById("username").value;

    if (!name) {
        alert("Please enter your name");
        return;
    }

    // save user
    localStorage.setItem("user", name);

    // redirect to dashboard
    window.location.href = "index.html";
}