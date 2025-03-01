document.getElementById("forgot-password-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const code = document.getElementById("code").value;
    const errorHandling = document.querySelector(".error-handling");
    errorHandling.textContent = "";
    
    const requestData = {
        code:code
    };

    try {
        const response = await fetch("http://localhost:8000/checkresetcode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("password_reset_token")  
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "An error occurred");
        }
        alert('Code verified.');
        window.location.href = "reset_password.html";
    } catch (error) {
        errorHandling.textContent = error.message;
        errorHandling.style.color = "red";
    }
});
