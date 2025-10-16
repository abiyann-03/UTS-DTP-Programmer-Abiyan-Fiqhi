function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value.trim();
  if (!text) return;
  const div = document.createElement("div");
  div.className = "note";
  div.innerHTML = `<p>${text}</p><div class="date">${new Date().toLocaleString()}</div>`;
  document.getElementById("notes").appendChild(div);
  input.value = "";
}
