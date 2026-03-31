const defaultPlaces = [
    {
        id: "1",
        name: "Museum Theatre",
        city: "Chennai",
        category: "PAID",
        bestTime: "Feb-April",
        fee: "₹100",
        rating: 4,
        image: "images/museum.jpg",
        description: "A historic cultural venue in Chennai known for architecture and performances."
    },
    {
        id: "2",
        name: "Marina Beach",
        city: "Chennai, Tamil Nadu",
        category: "FREE",
        bestTime: "Nov - Feb",
        fee: "Free",
        rating: 5,
        image: "images/marina.jpg",
        description: "One of India's longest urban beaches, great for sunrise and street food."
    },
    {
        id: "3",
        name: "Ooty",
        city: "Nilgiris, Tamil Nadu",
        category: "FREE",
        bestTime: "Oct - Jun",
        fee: "Free",
        rating: 5,
        image: "images/ooty.jpg",
        description: "A beautiful hill station known for scenic beauty, tea gardens and cool weather."
    },
    {
        id: "4",
        name: "Hampi",
        city: "Karnataka",
        category: "PAID",
        bestTime: "Nov - Feb",
        fee: "₹40",
        rating: 5,
        image: "images/hampi.jpg",
        description: "A UNESCO World Heritage site famous for ruins and temple architecture."
    }
];

function getPlaces() {
    let places = JSON.parse(localStorage.getItem("places"));
    if (!places || places.length === 0) {
        localStorage.setItem("places", JSON.stringify(defaultPlaces));
        return defaultPlaces;
    }
    return places;
}

function savePlaces(places) {
    localStorage.setItem("places", JSON.stringify(places));
}

function createPlaceCard(place) {
    return `
        <div class="place-card">
            <img src="${place.image}" alt="${place.name}">
            <div class="place-card-content">
                <h3>${place.name}</h3>
                <p><strong>City:</strong> ${place.city}</p>
                <p><strong>Best Time:</strong> ${place.bestTime}</p>
                <p><strong>Entry Fee:</strong> ${place.fee}</p>
                <p><strong>Rating:</strong> ${"⭐".repeat(place.rating)}</p>

                <div class="card-buttons">
                    <button onclick="viewPlace('${place.id}')">View</button>
                    <button onclick="editPlace('${place.id}')">Edit</button>
                    <button onclick="deletePlace('${place.id}')">Delete</button>
                </div>
            </div>
        </div>
    `;
}

function renderPlaces() {
    const container = document.getElementById("placesContainer");
    const searchValue = document.getElementById("searchInput").value.toLowerCase().trim();
    const filterValue = document.getElementById("filterSelect").value;

    let places = getPlaces();

    places = places.filter(place => {
        const matchesSearch =
            place.name.toLowerCase().includes(searchValue) ||
            place.city.toLowerCase().includes(searchValue);

        const matchesFilter =
            filterValue === "ALL" || place.category === filterValue;

        return matchesSearch && matchesFilter;
    });

    document.getElementById("placeCount").textContent = `Showing ${places.length} place(s)`;

    if (places.length === 0) {
        container.innerHTML = "<p>No places found.</p>";
        drawStats();
        return;
    }

    container.innerHTML = places.map(createPlaceCard).join("");
    drawStats();
}

function resetFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("filterSelect").value = "ALL";
    renderPlaces();
}

function clearForm() {
    document.getElementById("placeForm").reset();
    document.getElementById("placeId").value = "";
}

document.getElementById("placeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("placeId").value;
    const name = document.getElementById("name").value.trim();
    const city = document.getElementById("city").value.trim();
    const category = document.getElementById("category").value;
    const bestTime = document.getElementById("bestTime").value.trim();
    const fee = document.getElementById("fee").value.trim();
    const rating = parseInt(document.getElementById("rating").value);
    const image = document.getElementById("image").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!name || !city || !category || !bestTime || !fee || !rating || !image || !description) {
        alert("Please fill all fields properly.");
        return;
    }

    if (rating < 1 || rating > 5) {
        alert("Rating must be between 1 and 5.");
        return;
    }

    const places = getPlaces();

    const placeData = {
        id: id || Date.now().toString(),
        name,
        city,
        category,
        bestTime,
        fee,
        rating,
        image,
        description
    };

    if (id) {
        const index = places.findIndex(place => place.id === id);
        places[index] = placeData;
    } else {
        places.push(placeData);
    }

    savePlaces(places);
    clearForm();
    renderPlaces();
});

function editPlace(id) {
    const places = getPlaces();
    const place = places.find(place => place.id === id);

    document.getElementById("placeId").value = place.id;
    document.getElementById("name").value = place.name;
    document.getElementById("city").value = place.city;
    document.getElementById("category").value = place.category;
    document.getElementById("bestTime").value = place.bestTime;
    document.getElementById("fee").value = place.fee;
    document.getElementById("rating").value = place.rating;
    document.getElementById("image").value = place.image;
    document.getElementById("description").value = place.description;

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function deletePlace(id) {
    const confirmDelete = confirm("Are you sure you want to delete this place?");
    if (!confirmDelete) return;

    let places = getPlaces();
    places = places.filter(place => place.id !== id);
    savePlaces(places);
    renderPlaces();
}

function viewPlace(id) {
    window.location.href = `place.html?id=${id}`;
}

function drawStats() {
    const canvas = document.getElementById("statsCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const places = getPlaces();

    let freeCount = 0;
    let paidCount = 0;

    places.forEach(place => {
        if (place.category === "FREE") {
            freeCount++;
        } else {
            paidCount++;
        }
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "22px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Tourist Place Statistics", 180, 35);

    // Y-axis line
    ctx.beginPath();
    ctx.moveTo(80, 260);
    ctx.lineTo(80, 70);
    ctx.lineTo(520, 260);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Free bar
    ctx.fillStyle = "green";
    ctx.fillRect(150, 260 - freeCount * 40, 100, freeCount * 40);

    // Paid bar
    ctx.fillStyle = "orange";
    ctx.fillRect(330, 260 - paidCount * 40, 100, paidCount * 40);

    // Labels
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Free", 180, 285);
    ctx.fillText("Paid", 360, 285);

    ctx.fillText(freeCount, 190, 250 - freeCount * 40);
    ctx.fillText(paidCount, 370, 250 - paidCount * 40);
}

document.getElementById("searchInput").addEventListener("input", renderPlaces);
document.getElementById("filterSelect").addEventListener("change", renderPlaces);

renderPlaces();