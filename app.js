document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    try {
      const response = await fetch("http://localhost:7007/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Send login data
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        alert("page error !");
        document.getElementById("login-form").reset(); // Reset the form
      } else {
        errorMessage.textContent = data.message || "An error occurred!";
      }
    } catch (error) {
      console.error(error);
      errorMessage.textContent = "Failed to connect to the server!";
    }
  });
  