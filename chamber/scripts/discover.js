document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("places-grid");
    const sidebar = document.getElementById("sidebar");
  
    // Cargar JSON
    if (window.location.href.startsWith('https://isasachi.github.io/')) {
      fetch("/wdd231/chamber/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((place, index) => {
          const card = document.createElement("div");
          card.classList.add("place-card");
          card.style.gridArea = `card${index + 1}`;
  
          card.innerHTML = `
            <img src="${"/wdd231" + place.image}" alt="${place.title}">
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <small>${place.location}</small>
          `;
          grid.appendChild(card);
        });
      });
    } else {
      fetch("/chamber/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((place, index) => {
          const card = document.createElement("div");
          card.classList.add("place-card");
          card.style.gridArea = `card${index + 1}`;
  
          card.innerHTML = `
            <img src="${place.image}" alt="${place.title}">
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <small>${place.location}</small>
          `;
          grid.appendChild(card);
        });
      });
    }
    
  
    // localStorage - Última visita
    const now = new Date();
    const lastVisit = localStorage.getItem("lastVisit");
    if (lastVisit) {
      sidebar.textContent = `Welcome back! Your last visit was on ${new Date(
        lastVisit
      ).toLocaleString()}`;
    } else {
      sidebar.textContent = "Welcome! This is your first visit.";
    }
    localStorage.setItem("lastVisit", now);
  });
  