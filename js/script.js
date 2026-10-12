
const events = [
  {
    name: "Technical Workshop",
    description: "Learn new technologies and technical skills."
  },
  {
    name: "Coding Competition",
    description: "Test your programming and problem-solving skills."
  },
  {
    name: "Cultural Fest",
    description: "Participate in music, dance and cultural activities."
  },
  {
    name: "Sports Day",
    description: "Take part in exciting sports competitions."
  },
  {
    name: "Science Exhibition",
    description: "Present innovative science projects and ideas."
  }
];

const eventList = document.getElementById("event-list");
const eventChoice = document.getElementById("event-choice");
const registrationForm = document.getElementById("registration-form");
const registrationMessage = document.getElementById("registration-message");

// Display upcoming events
eventList.innerHTML = "";

events.forEach(function(event) {
  const card = document.createElement("div");
  const heading = document.createElement("h3");
  const description = document.createElement("p");

  heading.textContent = event.name;
  description.textContent = event.description;

  card.appendChild(heading);
  card.appendChild(description);
  eventList.appendChild(card);
});

// Populate the dropdown dynamically
events.forEach(function(event) {
  const option = document.createElement("option");
  option.value = event.name;
  option.textContent = event.name;
  eventChoice.appendChild(option);
});

// Handle student registration
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("student-name").value.trim();
  const email = document.getElementById("student-email").value.trim();
  const selectedEvent = eventChoice.value;

  if (!name || !email || !selectedEvent) {
    registrationMessage.textContent = "Please fill in all fields.";
    return;
  }

  registrationMessage.textContent =
    "Registration successful! " + name +
    ", you registered for " + selectedEvent + ".";

  registrationForm.reset();
});
