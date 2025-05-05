// script.js
document.getElementById("createProjectButton").addEventListener("click", function() {
    document.getElementById("createProjectModal").style.display = "flex";
  });
  
  document.getElementById("closeModalButton").addEventListener("click", function() {
    document.getElementById("createProjectModal").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    const modal = document.getElementById("createProjectModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  