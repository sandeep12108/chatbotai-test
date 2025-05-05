document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chatMessages");
    const userInput = document.getElementById("userInput");

    function sendMessage() {
        if (userInput.value.trim() !== "") {
            // Create and append user message
            const userMessageDiv = document.createElement("div");
            userMessageDiv.className = "message user-message";
            userMessageDiv.textContent = userInput.value;
            chatMessages.appendChild(userMessageDiv);

            // Simulate bot response after a delay
            setTimeout(() => {
                const botMessageDiv = document.createElement("div");
                botMessageDiv.className = "message bot-message";
                botMessageDiv.textContent = generateBotResponse(userInput.value);
                chatMessages.appendChild(botMessageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
            }, 500);

            userInput.value = ""; // Clear input
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
        }
    }

    function generateBotResponse(userMessage) {
        // Customize this function to create more dynamic responses
        const responses = [
            "💖 Aww! That's adorable! How can I help you today?",
            "🌟 Hi there! What can TestBot do for you?",
            "😊 I'm here to chat with you! Ask me anything.",
            "🐾 You're amazing! What do you want to talk about?",
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Attach event listener to send button
    document.querySelector("button").addEventListener("click", sendMessage);

    // Allow sending messages using the Enter key
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
