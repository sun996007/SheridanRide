const searchButton = document.querySelector('#search-rides');
if (searchButton) {
    searchButton.addEventListener('click', function () {
        window.location.href = 'search.html';
    });
}

const tripButton = document.querySelector('#Trip');
if (tripButton) {
    tripButton.addEventListener('click', function () {
        window.location.href = 'confirm.html';
    });
}

const confirmButton = document.querySelector('#confirm-trip');
if (confirmButton) {
    confirmButton.addEventListener('click', function () {
        window.location.href = 'details.html';
    });
}

const postButton = document.querySelector('#confirm-trip1');
if (postButton) {
    postButton.addEventListener('click', function () {
        window.location.href = 'postdetails.html';
    });
}

const seatNumber = document.querySelector('.seat-number');
const seatButtons = document.querySelectorAll('.seat-counter .seat-circle');
if (seatNumber && seatButtons.length === 2) {
    let seats = 1;
    function showSeats() {
        seatNumber.textContent = seats;
        if (confirmButton) confirmButton.textContent = 'Confirm · $' + (seats * 12);
        seatButtons[0].disabled = seats === 1;
        seatButtons[1].disabled = seats === 2;
    }
    seatButtons[0].addEventListener('click', function () {
        if (seats > 1) seats--;
        showSeats();
    });
    seatButtons[1].addEventListener('click', function () {
        if (seats < 2) seats++;
        showSeats();
    });
    showSeats();
}
