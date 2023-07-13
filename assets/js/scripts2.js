
var bookingHistory = JSON.parse(localStorage.getItem('bookingHistory'));

if (bookingHistory && bookingHistory.length > 0) {
    var bookingHistoryHTML = '<h2>Booking History</h2>';
    bookingHistory.forEach(function (booking) {
        bookingHistoryHTML += '<div class="booking">';
        bookingHistoryHTML += '<p>Title: ' + booking.title + '</p>';
        bookingHistoryHTML += '<p>Year: ' + booking.year + '</p>';
        bookingHistoryHTML += '<p>Director: ' + booking.director + '</p>';
        bookingHistoryHTML += '<p>Actor: ' + booking.actor + '</p>';
        bookingHistoryHTML += '<p>Date and Time: ' + booking.dateTime + '</p>';
        bookingHistoryHTML += '<p>Theatre Location: ' + booking.theatre + '</p>';
        bookingHistoryHTML += '</div>';
    });
    document.getElementById('bookingHistory').innerHTML = bookingHistoryHTML;
} else {
    document.getElementById('bookingHistory').innerHTML = '<p>No booking history found.</p>';
}


function goBack() {
    window.history.back();
}
