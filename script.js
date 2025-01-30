const numberInput = document.getElementById("numberInput");
        const countDisplay = document.getElementById("count");
        const incrementBtn = document.getElementById("increment");
        const decrementBtn = document.getElementById("decrement");
        const sendBtn = document.getElementById("sendBtn");

        sendBtn.addEventListener("click", () => {
            const value = parseInt(numberInput.value) || 0;
            countDisplay.textContent = value;
        });

        incrementBtn.addEventListener("click", () => {
            let current = parseInt(countDisplay.textContent) || 0;
            countDisplay.textContent = current + 1;
        });

        decrementBtn.addEventListener("click", () => {
            let current = parseInt(countDisplay.textContent) || 0;
            countDisplay.textContent = current - 1;
        });