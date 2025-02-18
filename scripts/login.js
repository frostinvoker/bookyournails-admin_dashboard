document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorHandling = document.querySelector(".error-handling");
    
    errorHandling.textContent = "";
    
    const requestData = {
        email: email,
        password: password
    };
    
    try {
        const response = await fetch("http://localhost:8000/login", {
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
        
        // Store session token in localStorage or cookie
        localStorage.setItem("session_token", data.session_token);
        
        alert("Login successful");
        window.location.href = "dashboard.html"; // Redirect after login
    } catch (error) {
        errorHandling.textContent = error.message;
        errorHandling.style.color = "red";
    }
});
 