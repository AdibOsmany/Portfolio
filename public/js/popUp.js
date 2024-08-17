// Get the modal
let eduModal = document.getElementById("stevens-modal");

// Get the card that opens the modal
let eduChip = document.getElementById("stevens-card");

// Get the <span> element that closes the modal
let eduSpan = document.getElementById("stevens-close");

// When the user clicks the card, open the modal 
eduChip.onclick = function() {
    eduModal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
eduSpan.onclick = function() {
    eduModal.style.display = "none";
}

// Get the ufaModal
let ufaModal = document.getElementById("ufa-modal");

// Get the ufaChip that opens the ufaModal
let ufaChip = document.getElementById("ufa-chip");

// Get the <ufaSpan> element that closes the ufaModal
let ufaSpan = document.getElementById("ufa-close");

// When the user clicks the ufaChip, open the ufaModal 
ufaChip.onclick = function() {
    ufaModal.style.display = "flex";
}

// When the user clicks on <ufaSpan> (x), close the ufaModal
ufaSpan.onclick = function() {
    ufaModal.style.display = "none";
}

// Get the ufaModal
let taModal = document.getElementById("ta-modal");

// Get the ufaChip that opens the ufaModal
let taChip = document.getElementById("ta-chip");

// Get the <ufaSpan> element that closes the ufaModal
let taSpan = document.getElementById("ta-close");

// When the user clicks the ufaChip, open the ufaModal 
taChip.onclick = function() {
    taModal.style.display = "flex";
}

// When the user clicks on <ufaSpan> (x), close the ufaModal
taSpan.onclick = function() {
    taModal.style.display = "none";
}



let tetrisModal = document.getElementById("tetris-modal");


let tetrisChip = document.getElementById("tetris-chip");


let tetrisSpan = document.getElementById("tetris-close");


tetrisChip.onclick = function() {
    tetrisModal.style.display = "flex";
}

tetrisSpan.onclick = function() {
    tetrisModal.style.display = "none";
}


let cpuModal = document.getElementById("cpu-modal");

let cpuChip = document.getElementById("cpu-chip");


let cpuSpan = document.getElementById("cpu-close");


cpuChip.onclick = function() {
    cpuModal.style.display = "flex";
}

cpuSpan.onclick = function() {
    cpuModal.style.display = "none";
}


let workdayModal = document.getElementById("workday-modal");


let workdayChip = document.getElementById("workday-chip");


let workdaySpan = document.getElementById("workday-close");


workdayChip.onclick = function() {
    workdayModal.style.display = "flex";
}

workdaySpan.onclick = function() {
    workdayModal.style.display = "none";
}

// When the user clicks anywhere outside of the ufaModal, close it
window.onclick = function(event) {
    if (event.target == taModal) {
        taModal.style.display = "none";
    }
    else if (event.target == ufaModal) {
        ufaModal.style.display = "none";
    }
    else if (event.target == eduModal) {
        eduModal.style.display = "none";
    }
    else if (event.target == tetrisModal) {
        tetrisModal.style.display = "none";
    }
    else if (event.target == cpuModal) {
        cpuModal.style.display = "none";
    }
    else if (event.target == workdayModal) {
        workdayModal.style.display = "none";
    }
}




// let Modal = document.getElementById("-modal");


// let Chip = document.getElementById("-chip");


// let Span = document.getElementById("-close");


// Chip.onclick = function() {
//     Modal.style.display = "flex";
// }

// Span.onclick = function() {
//     Modal.style.display = "none";
// }