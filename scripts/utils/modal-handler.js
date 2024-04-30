// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close modal when user clicks on <span> (x)
document.querySelectorAll('.close').forEach(function(element) {
    element.onclick = function() {
        var modal = this.closest('.modal');
        modal.style.display = 'none';
    };
});
