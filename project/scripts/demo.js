const OPENROUTER_API_KEY = "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";

document.getElementById('ai-generate').addEventListener('click', async function () {
    const userInput = document.getElementById('ai-input').value;
    const output = document.getElementById('ai-output');
  
    if (userInput.trim() === "") {
      alert("Please enter a prompt.");
      return;
    }
  
    output.innerHTML = "Loading...";
  
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat:free",
          messages: [
            {
              role: "user",
              content: userInput
            }
          ]
        })
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }
  
      const data = await response.json();
      const aiMessage = data.choices?.[0]?.message?.content || "No response generated.";
      output.innerHTML = aiMessage;
    } catch (error) {
      console.error("Error:", error);
      output.innerHTML = "An error occurred while fetching the AI response.";
    }
  });
  