document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        // Set initial state
        button.dataset.state = "off";
        button.textContent = button.dataset.off || "Toggle";

        // Add click event listener
        button.addEventListener("click", () => {
            // Toggle state
            const currentState = button.dataset.state;
            const newState = currentState === "on" ? "off" : "on";
            button.dataset.state = newState;
            button.textContent = button.dataset[newState];

            // Perform action based on `data-action`
            const action = button.dataset.action;
            const target = document.querySelector(button.dataset.target);

            if (action === "alert") {
                alert(button.dataset.message || "Button clicked!");
            } else if (action === "toggle" && target) {
                target.style.display = target.style.display === "none" ? "block" : "none";
            } else if (action === "customAction" && target) {
                target.style.color = target.style.color === "blue" ? "red" : "blue";
            }
        });
    });
});
