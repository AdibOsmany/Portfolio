// Get the ufaModal
let ufaModal = document.getElementById("ufaModal");

// Get the ufaCard that opens the ufaModal
let ufaCard = document.getElementById("ufa-card");

// Get the <ufaSpan> element that closes the ufaModal
let ufaSpan = document.getElementById("ufaClose");

// When the user clicks the ufaCard, open the ufaModal 
ufaCard.onclick = function() {
    ufaModal.style.display = "flex";
}

// When the user clicks on <ufaSpan> (x), close the ufaModal
ufaSpan.onclick = function() {
    ufaModal.style.display = "none";
}

// When the user clicks anywhere outside of the ufaModal, close it
window.onclick = function(event) {
    if (event.target == ufaModal) {
        ufaModal.style.display = "none";
    }
}

// Get the ufaModal
let taModal = document.getElementById("taModal");

// Get the ufaCard that opens the ufaModal
let taCard = document.getElementById("ta-card");

// Get the <ufaSpan> element that closes the ufaModal
let taSpan = document.getElementById("taClose");

// When the user clicks the ufaCard, open the ufaModal 
taCard.onclick = function() {
    taModal.style.display = "flex";
}

// When the user clicks on <ufaSpan> (x), close the ufaModal
taSpan.onclick = function() {
    taModal.style.display = "none";
}

// When the user clicks anywhere outside of the ufaModal, close it
window.onclick = function(event) {
    if (event.target == ufaModal) {
        ufaModal.style.display = "none";
    }
}

