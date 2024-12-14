// Sidebar Toggle for Mobile (Optional)
const sidebar = document.getElementById('sidebar-container');
const toggleButton = document.getElementById('sidebar-toggle');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
