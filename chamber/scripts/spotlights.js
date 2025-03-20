document.addEventListener('DOMContentLoaded', async () => {
    const spotlightNode = document.getElementById('spotlights');

    async function getBusinessData() {
        try {
            if (window.location.href.startsWith('https://isasachi.github.io/')) {
                const response = await fetch("/wdd231/chamber/data/members.json");
                if (response.ok) {
                    const data = await response.json();
                    return data;
                } else {
                    throw new Error("There was an error loading the member directory data.");
                }
            } else {
                const response = await fetch("/chamber/data/members.json");
                if (response.ok) {
                    const data = await response.json();
                    return data;
                } else {
                    throw new Error("There was an error loading the member directory data.");
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    const displaySpotlight = (spotlight) => {
        if (spotlight.membership_level === 2 || spotlight.membership_level === 3) {
            const spotlightContainer = document.createElement('div');
            spotlightContainer.classList.add('spotlight');

            const spotlightImage = document.createElement('img');
            spotlightImage.src = window.location.href.startsWith('https://isasachi.github.io/') ? "/wdd231" + spotlight.image : spotlight.image;
            spotlightImage.setAttribute('alt', spotlight.name);
            spotlightContainer.appendChild(spotlightImage);

            const spotlightMembershipLevel = document.createElement('span');
            if (spotlight.membership_level === 2) {
                spotlightMembershipLevel.textContent = 'Silver Member';
                spotlightMembershipLevel.style.color = 'black';
                spotlightMembershipLevel.style.backgroundColor = '#C0C0C0';
            }
            if (spotlight.membership_level === 3) {
                spotlightMembershipLevel.textContent = 'Gold Member';
                spotlightMembershipLevel.style.color = 'black';
                spotlightMembershipLevel.style.backgroundColor = '#FFD700';
            }

            spotlightMembershipLevel.classList.add('membership');
            spotlightContainer.appendChild(spotlightMembershipLevel);

            const spotlightName = document.createElement('h3');
            spotlightName.textContent = spotlight.name;
            spotlightContainer.appendChild(spotlightName);

            const spotlightPhone = document.createElement('span');
            spotlightPhone.textContent = spotlight.phone;
            spotlightContainer.appendChild(spotlightPhone);

            const spotlightAddress = document.createElement('span');
            spotlightAddress.textContent = spotlight.address;
            spotlightContainer.appendChild(spotlightAddress);

            const spotlightWebsite = document.createElement('a');
            spotlightWebsite.href = spotlight.website;
            spotlightWebsite.textContent = 'Website';
            spotlightContainer.appendChild(spotlightWebsite);

            spotlightNode.appendChild(spotlightContainer);

        }
    };

    function getRandomSpotlights(arr, numItems = 2) {
        return arr.sort(() => Math.random() - 0.5).slice(0, numItems);
    }

    const spotlightData = await getBusinessData();

    const randomSpotlights = getRandomSpotlights(spotlightData, 2);

    for (let i = 0; i < randomSpotlights.length; i++) {
        displaySpotlight(randomSpotlights[i]);
    }
});