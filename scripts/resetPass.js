document.getElementById("forgot-password-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const errorHandling = document.querySelector(".error-handling");
    errorHandling.textContent = "";
    
    const requestData = {
        password: password,
        confirm_password: confirm_password
    };

    try {
        const response = await fetch("http://localhost:8000/resetpassword", {
            method: "PUT",
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

        localStorage.removeItem('password_reset_token');
        alert('Password changed successfully. Redirecting to Login page.');
        window.location.href = "login.html";
    } catch (error) {
        errorHandling.textContent = error.message;
        errorHandling.style.color = "red";
    }
});
