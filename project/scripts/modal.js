document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("pro-modal");
    const closeBtn = document.getElementById("close-modal");
    const tryProLink = document.querySelector(".try-pro-link");
  
    if (tryProLink) {
      tryProLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        modal.showModal();
      });
    }
  
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  });
  