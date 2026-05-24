# Tourist Place Management System

A full-featured, single-page **Tourist Place Management Website** built with vanilla HTML, CSS, and JavaScript. Manage, search, filter, and book tickets for tourist destinations — with a live Canvas statistics chart and printable receipts.

**Live Demo:** [https://thanujaa-5520.github.io/tourist-place-management/](https://thanujaa-5520.github.io/tourist-place-management/)

---

## Features

- **CRUD Operations** — Add, edit, and delete tourist places with full form validation
- **Search & Filter** — Real-time search by name or city; filter by FREE / PAID category
- **Canvas Statistics Chart** — Dynamic bar chart showing FREE vs PAID place counts (HTML5 Canvas)
- **Ticket Booking** — Book tickets for any tourist place with name, date, and ticket count
- **Receipt Generation** — Auto-generated, printable booking receipt with booking ID
- **Persistent Storage** — All data saved in browser `localStorage` — no backend required
- **Place Detail View** — Individual place pages with full description and booking link
- **Responsive Design** — Works on desktop and mobile browsers

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and Canvas API |
| CSS3 | Styling and responsive layout |
| Vanilla JavaScript | CRUD logic, DOM manipulation, localStorage |
| Node.js (optional) | Local development server (`server.js`) |
| GitHub Pages | Free static hosting |

---

## Project Structure

```
tourist-place-management/
├── index.html        # Main page — place list, search, CRUD form, canvas chart
├── place.html        # Individual place detail page
├── booking.html      # Ticket booking form
├── receipt.html      # Booking confirmation and receipt
├── data.js           # Default data, CRUD logic, canvas rendering
├── booking.js        # Booking form logic and receipt generation
├── style.css         # All styles
├── server.js         # Node.js static file server (for local dev)
└── images/
    ├── museum.jpg    # Museum Theatre, Chennai
    ├── marina.jpg    # Marina Beach, Chennai
    ├── ooty.jpg      # Ooty Hill Station
    └── hampi.jpg     # Hampi Heritage Site
```

---

## Getting Started

### Option 1 — Open directly in browser (no install needed)

Just open `index.html` in any modern browser. No server required — all data is stored in `localStorage`.

### Option 2 — Run with the Node.js local server

```bash
# Prerequisites: Node.js installed

# Clone the repository
git clone https://github.com/thanujaa-5520/tourist-place-management.git
cd tourist-place-management

# Start the server
node server.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Use

### Manage Places
1. Open `index.html`
2. The default dataset (Museum Theatre, Marina Beach, Ooty, Hampi) loads automatically
3. Use the **Search** box to filter by name or city
4. Use the **FREE / PAID** dropdown to filter by category
5. Click **Edit** to update a place, **Delete** to remove it

### Add a New Place
1. Fill in the form at the bottom of the page (Name, City, Category, Best Time, Entry Fee, Rating, Image Path, Description)
2. Click **Submit** — the place appears in the grid immediately

### Book Tickets
1. Click **View** on any place card
2. On the detail page, click **Book Now**
3. Enter your name, travel date, and number of tickets
4. Click **Confirm Booking** to generate a receipt

### View Statistics
The Canvas bar chart on the main page automatically updates to show the current count of FREE vs PAID places.

---

## Default Tourist Places

| Place | City | Category | Entry Fee | Rating |
|---|---|---|---|---|
| Museum Theatre | Chennai | PAID | ₹100 | ⭐⭐⭐⭐ |
| Marina Beach | Chennai, Tamil Nadu | FREE | Free | ⭐⭐⭐⭐⭐ |
| Ooty | Nilgiris, Tamil Nadu | FREE | Free | ⭐⭐⭐⭐⭐ |
| Hampi | Karnataka | PAID | ₹40 | ⭐⭐⭐⭐⭐ |

---

## Screenshots

> Visit the live demo to see all pages in action:
> [https://thanujaa-5520.github.io/tourist-place-management/](https://thanujaa-5520.github.io/tourist-place-management/)

| Page | Description |
|---|---|
| `index.html` | Place grid with search, filter, CRUD form, and canvas chart |
| `place.html` | Individual place details with Book Now button |
| `booking.html` | Ticket booking form |
| `receipt.html` | Auto-generated, printable booking receipt |

---

## Future Improvements

- [ ] Add image upload support instead of manual image path entry
- [ ] Add a map view (Google Maps / Leaflet.js integration)
- [ ] Export booking history as PDF
- [ ] Add user login with session management
- [ ] Add reviews and star ratings per place

---

## Author

**Thanujaa TSK**
B.Tech CSE — VIT Chennai | Registration No: 24BCE5520
GitHub: [@thanujaa-5520](https://github.com/thanujaa-5520)

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
