const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});

function filterCategory(cat) {
  cards.forEach(card => {
    const match = cat === "All" || card.getAttribute('data-category') === cat;
    card.style.display = match ? "block" : "none";
  });
}

document.getElementById('toggleDark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
