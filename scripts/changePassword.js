document.getElementById("change-password-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorHandling = document.querySelector(".error-handling");
    errorHandling.textContent = "";
    
    const requestData = {
        old_password: oldPassword,
        password: newPassword,
        confirm_password: confirmPassword
    };

    try {
        const response = await fetch("http://localhost:8000/updatepassword", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("session_token")
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "An error occurred");
        }
        alert('Password changed successfully.');
    } catch (error) {
        errorHandling.textContent = error.message;
        errorHandling.style.color = "red";
    }
});
