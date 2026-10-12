cat > js/script.js <<'EOF'
const events = [
  { name: "Coding Competition", date: "2026-11-05", venue: "Computer Lab" },
  { name: "Cultural Fest", date: "2026-11-10", venue: "College Auditorium" },
  { name: "Project Expo", date: "2026-11-15", venue: "Seminar Hall" }
];

function displayEvents() {
  const list = document.getElementById("event-list");
  const choice = document.getElementById("event-choice");

  list.innerHTML = "";
  choice.innerHTML = '<option value="">Select an event</option>';

  events.forEach((event, index) => {
    const card = document.createElement("article");
    const heading = document.createElement("h3");
    heading.textContent = event.name;

    const details = document.createElement("p");
    details.textContent = `Date: ${event.date} | Venue: ${event.venue}`;

    card.appendChild(heading);
    card.appendChild(details);
    list.appendChild(card);

    const option = document.createElement("option");
    option.value = index;
    option.textContent = event.name;
    choice.appendChild(option);
  });
}

document.getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("student-name").value.trim();
    const email = document.getElementById("student-email").value.trim();
    const selected = document.getElementById("event-choice").value;
    const message = document.getElementById("registration-message");

    if (!name || !email || selected === "") {
      message.textContent = "Please complete all fields and select an event.";
      return;
    }

    message.textContent =
      `Thank you, ${name}! Your demo registration for ${events[selected].name} is complete.`;

    this.reset();
  });

displayEvents();
EOF