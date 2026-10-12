cat > js/script.js <<'EOF'
const events = [];

function displayEvents() {
  const list = document.getElementById("event-list");
  const choice = document.getElementById("event-choice");

  list.innerHTML = "";
  choice.innerHTML = '<option value="">Select an event</option>';

  if (events.length === 0) {
    list.textContent = "No events have been added yet.";
    return;
  }

  events.forEach((event, index) => {
    const card = document.createElement("article");
    card.innerHTML = `<h3>${event.name}</h3>
      <p>${event.date} | ${event.venue}</p>`;
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

    if (events.length === 0) {
      document.getElementById("registration-message").textContent =
        "Please add an event before registering.";
      return;
    }

    const name = document.getElementById("student-name").value;
    const selected = document.getElementById("event-choice").value;

    document.getElementById("registration-message").textContent =
      `${name}, your demo registration for ${events[selected].name} is complete.`;

    this.reset();
  });

displayEvents();
EOF