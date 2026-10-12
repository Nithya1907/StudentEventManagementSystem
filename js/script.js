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
    card.innerHTML = `<h3>${event.name}</h3>
      <p>Date: ${event.date}</p><p>Venue: ${event.venue}</p>`;
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
    const name = document.getElementById("student-name").value;
    const selected = document.getElementById("event-choice").value;

    if (selected === "") {
      document.getElementById("registration-message").textContent =
        "Please select an event.";
      return;
    }

    document.getElementById("registration-message").textContent =
      `${name}, your demo registration for ${events[selected].name} is complete.`;
    this.reset();
  });

displayEvents();
EOF