document.querySelector(".logout").addEventListener("click", async function (event) {
    event.preventDefault();

  
    try {
        const response = await fetch("http://localhost:8000/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("session_token")  
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "An error occurred");
        }
        
        localStorage.removeItem("session_token");

        window.location.href = "login.html";
    } catch (error) {
        alert(error.message);
    }
});
