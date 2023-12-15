const toggleBtn = document.querySelector("section.sidebarProject .sidebar-toggle");
const closeBtn = document.querySelector("section.sidebarProject .close-btn");
const sidebar = document.querySelector("section.sidebarProject .sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
