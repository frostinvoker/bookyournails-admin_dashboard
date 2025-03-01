document.getElementById("forgot-password-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const errorHandling = document.querySelector(".error-handling");
    errorHandling.textContent = "";
    
    const requestData = {
        email: email,
    };
    
    try {
        const response = await fetch("http://localhost:8000/checkemail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || "An error occurred");
        }
        localStorage.setItem("password_reset_token", data.password_reset_token);
        
        alert('A 4-digit code has been sent to your email.');
        window.location.href = "email_verification.html";
    } catch (error) {
        errorHandling.textContent = error.message;
        errorHandling.style.color = "red";
    }
});



 