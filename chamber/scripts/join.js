document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('timestamp').value = new Date().toLocaleString('en-US');

    // Open modal and populate content dynamically
    function openModal(title, benefits) {
        const modal = document.getElementById('membership-dialog');
        
        // Set the modal title
        document.getElementById('membership-title').textContent = `${title} Membership Benefits`;

        // Create an unordered list for benefits
        const benefitsList = document.getElementById('membership-benefits');
        benefitsList.innerHTML = '';  // Clear previous list

        const benefitsArray = benefits.split(','); // Split the string into an array
        benefitsArray.forEach(benefit => {
            const listItem = document.createElement('li');
            listItem.textContent = benefit.trim();
            benefitsList.appendChild(listItem);
        });

        // Show the modal
        modal.showModal();
    }

    // Close the modal
    function closeModal() {
        const modal = document.getElementById('membership-dialog');
        modal.close();
    }

    // Attach event listeners to membership buttons
    const membershipData = [
        { id: 'np', title: 'Non-Profit', benefits: 'Ideal for registered non-profits, Event access, and Discounts on services.' },
        { id: 'bronze', title: 'Bronze', benefits: 'Event access, Discounts on services, and Access to training.' },
        { id: 'silver', title: 'Silver', benefits: 'All Bronze benefits plus Free Advertising.' },
        { id: 'gold', title: 'Gold', benefits: 'All Silver benefits plus Priority event access and Special discounts.' }
    ];

    membershipData.forEach(({ id, title, benefits }) => {
        const button = document.querySelector(`#${id} button`);
        if (button) {
            button.addEventListener("click", () => openModal(title, benefits));
        }
    });

    // Close button event listener
    document.querySelector("#membership-dialog button").addEventListener("click", closeModal);
});