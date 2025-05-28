// =============================
// 1. JavaScript Basics & Setup
// =============================
console.log("Welcome to the Community Portal");

window.onload = function() {
  alert("Page fully loaded!");
};

// =============================
// 2. Syntax, Data Types, Operators
// =============================
const eventName = "Community Cleanup";
const eventDate = "2025-06-15";
let seatsAvailable = 25;

console.log(`Event: ${eventName} | Date: ${eventDate} | Seats: ${seatsAvailable}`);

function registerSeat() {
  if (seatsAvailable > 0) {
    seatsAvailable--;
    console.log(`Seat registered! Remaining: ${seatsAvailable}`);
  } else {
    console.log("Sorry, no seats available.");
  }
}

// =============================
// 3. Conditionals, Loops, Error Handling
// =============================
const events = [
  { name: "Music Night", date: "2025-06-20", seats: 0 },
  { name: "Art Fair", date: "2025-07-01", seats: 5 },
];

events.forEach(event => {
  const isUpcoming = new Date(event.date) > new Date();
  if (isUpcoming && event.seats > 0) {
    console.log(`Available: ${event.name} on ${event.date}`);
  }
});

function tryRegister(event) {
  try {
    if (event.seats > 0) {
      event.seats--;
      console.log("Successfully registered.");
    } else {
      throw new Error("Event is full");
    }
  } catch (error) {
    console.error(error.message);
  }
}

// =============================
// 4. Functions, Closures, Higher-Order
// =============================
function addEvent(name, date, category) {
  events.push({ name, date, category, seats: 10 });
}

function filterEventsByCategory(category) {
  return events.filter(event => event.category === category);
}

function createCategoryCounter(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`Registrations for ${category}: ${count}`);
  };
}

const musicCounter = createCategoryCounter("Music");

// =============================
// 5. Objects and Prototypes
// =============================
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const yogaClass = new Event("Yoga Class", "2025-07-10", 10);
console.log(Object.entries(yogaClass));

// =============================
// 6. Arrays and Methods
// =============================
events.push({ name: "Tech Talk", category: "Education", seats: 8 });

const musicEvents = events.filter(e => e.category === "Music");
const formattedNames = events.map(e => `Event: ${e.name}`);

// =============================
// 7. DOM Manipulation
// =============================
const eventSection = document.querySelector("#eventList");

function renderEvents() {
  eventSection.innerHTML = "";
  events.forEach(e => {
    const div = document.createElement("div");
    div.className = "eventCard";
    div.innerHTML = `<h3>${e.name}</h3><p>Date: ${e.date}</p>`;
    eventSection.appendChild(div);
  });
}

// =============================
// 8. Event Handling
// =============================
document.querySelector("#filterCategory").onchange = function (e) {
  const filtered = filterEventsByCategory(e.target.value);
  console.log(filtered);
};

document.querySelector("#searchInput").addEventListener("keydown", function (e) {
  console.log(`Search key: ${e.key}`);
});

// =============================
// 9. Async JS, Promises, Async/Await
// =============================
function fetchEvents() {
  console.log("Loading...");
  fetch("mock-events.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error("Failed to load events", err));
}

async function fetchEventsAsync() {
  try {
    console.log("Loading async...");
    const res = await fetch("mock-events.json");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Async fetch failed", err);
  }
}

// =============================
// 10. Modern JS Features
// =============================
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

const { name, date } = events[0];
const clonedEvents = [...events];

// =============================
// 11. Working with Forms
// =============================
document.querySelector("#registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;

  if (!name.value || !email.value) {
    alert("Please fill all fields");
    return;
  }

  console.log(`Registered: ${name.value} for ${event.value}`);
});

// =============================
// 12. AJAX & Fetch API
// =============================
function sendRegistration(data) {
  console.log("Sending...");
  setTimeout(() => {
    fetch("https://example.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => console.log("Success:", json))
      .catch(err => console.error("Failed:", err));
  }, 1000);
}

// =============================
// 13. Debugging and Testing
// =============================
function debugFormSubmission() {
  console.log("Submitting form...");
  debugger; // add breakpoint
}

// =============================
// 14. jQuery and Frameworks
// =============================
$(document).ready(function () {
  $("#registerBtn").click(function () {
    alert("Register clicked");
  });

  $(".eventCard").fadeIn();

  // Benefit of frameworks:
  // Easier state management, reusability, and reactive UI with libraries like React or Vue
});


// Load saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedEvent = localStorage.getItem("preferredEvent");
  if (savedEvent) {
    document.getElementById("preferredEvent").value = savedEvent;
    document.getElementById("preferenceStatus").innerText = `Loaded preference: ${savedEvent}`;
  }
});

// Save preferred event to localStorage
function savePreference() {
  const selectedEvent = document.getElementById("preferredEvent").value;
  if (selectedEvent) {
    localStorage.setItem("preferredEvent", selectedEvent);
    sessionStorage.setItem("tempPreference", selectedEvent); // example for sessionStorage
    document.getElementById("preferenceStatus").innerText = `Preference saved: ${selectedEvent}`;
  } else {
    alert("Please select an event type to save.");
  }
}

// Clear both localStorage and sessionStorage
function clearPreferences() {
  localStorage.removeItem("preferredEvent");
  sessionStorage.clear();
  document.getElementById("preferredEvent").value = "";
  document.getElementById("preferenceStatus").innerText = "Preferences cleared.";
}
