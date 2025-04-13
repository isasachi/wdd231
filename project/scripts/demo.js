document.getElementById('ai-generate').addEventListener('click', async function () {
    const userInput = document.getElementById('ai-input').value;
    const output = document.getElementById('ai-output');
  
    if (userInput.trim() === "") {
      alert("Please enter a prompt.");
      return;
    }
  
    output.innerHTML = "Loading...";
  
    try {
      const response = await fetch("https://wdd231-backend.onrender.com/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: userInput })
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }
  
      const data = await response.json();
      const aiMessage = data.message || "No response generated.";
      output.innerHTML = aiMessage;
    } catch (error) {
      console.error("Error:", error);
      output.innerHTML = "An error occurred while fetching the AI response.";
    }
  });
  