const params = new URLSearchParams(window.location.search);
const placeId = params.get("id");

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const travelDate = document.getElementById("travelDate").value;
    const tickets = parseInt(document.getElementById("tickets").value);

    if (!userName || !travelDate || tickets <= 0) {
        alert("Please enter valid booking details.");
        return;
    }

    const booking = {
        bookingId: Date.now().toString(),
        placeId: placeId,
        userName: userName,
        travelDate: travelDate,
        tickets: tickets,
        status: "CONFIRMED"
    };

    localStorage.setItem("currentBooking", JSON.stringify(booking));
    window.location.href = "receipt.html";
});