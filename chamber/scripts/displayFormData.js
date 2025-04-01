document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const formDataContainer = document.getElementById("form-data");

    if (!params.entries().next().done) {
        params.forEach((value, key) => {
            const dataItem = document.createElement("p");
            dataItem.innerHTML = `<strong>${formatKey(key)}:</strong> ${decodeURIComponent(value)}`;
            formDataContainer.appendChild(dataItem);
        });
    } else {
        formDataContainer.innerHTML = "<p>No form data available.</p>";
    }
});

function formatKey(key) {
    return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
