document.addEventListener("DOMContentLoaded", function () {
    //Manage changing between grid and list display views
    const gridSelector = document.querySelector('#directory-grid');
    const listSelector = document.querySelector('#directory-list');
    const directoryData = document.querySelector('#directory-data');

    gridSelector.addEventListener('click', ()=>{
        if (!gridSelector.classList.contains('active')){    
            gridSelector.classList.add('active');
            listSelector.classList.remove('active');
            directoryData.classList.add('directory-cards')
            directoryData.classList.remove('directory-list')
        }
    });

    listSelector.addEventListener('click', ()=>{
        if (!listSelector.classList.contains('active')){
            listSelector.classList.add('active');
            gridSelector.classList.remove('active');
            directoryData.classList.add('directory-list')
            directoryData.classList.remove('directory-cards')
        }
    });

    //This function builds the HTML for each business in the members.json file and displays it on the page
    const displayBusinesses = (members) => {
    const cards = document.querySelector(".directory-cards"); // select the output container element

    members.forEach((business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        //Add your own GitHub Pages URL to the startsWith method
        card.innerHTML = `
        <img src="${window.location.href.startsWith('https://isasachi.github.io/') ? "/wdd231" + business.image : business.image}">
        <p>${business.name}</p>
        <p>${business.address}</p>
        <p>${business.phone}</p>
        <p><a href="${business.website}">Website</a></p>
        `;
        if (business.membership_level=='gold'){
        card.classList.add('gold-member');
        }
        cards.appendChild(card);
    }); 
    
    }; 

    //This function fetches the business JSON data from the members.json file (Use your own members.json file)
    async function getBusinessData() {
    try {
        //Add your own GitHub Pages URL to the startsWith method
        if (window.location.href.startsWith('https://isasachi.github.io/')) {
            const response = await fetch("/wdd231/chamber/data/members.json");
            if (response.ok) {
                const data = await response.json();
                displayBusinesses(data);
            } else {
                console.error("There was an error loading the member directory data.");
                const cards = document.querySelector(".directory-cards");
                cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
            }
        } else {
            const response = await fetch("/chamber/data/members.json");
            if (response.ok) {
                const data = await response.json();
                displayBusinesses(data);
            } else {
                console.error("There was an error loading the member directory data.");
                const cards = document.querySelector(".directory-cards");
                cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
            }
        }
    }
    catch (error){
        console.error("There was an error loading the member directory data.", error);
        const cards = document.querySelector(".directory-cards");
        cards.innerHTML = "<section><h1>There was an error loading the data</h1><p>Please come back another time.</p></section>";
    }
    }

    getBusinessData();

});
