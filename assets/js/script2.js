// define global variables
var ticketsArray2 = [];

// displays home page
function goback(){
    window.location.href="index.html";
}

// loads the tickets from local storage
function getTickets(){
    var ticketsAll = localStorage.getItem("tickets");
    if(JSON.parse(ticketsAll) != null){
      ticketsArray2 = JSON.parse(ticketsAll);
    }
}
  
// displays the booked tickets
function displayTickets(){
    var ticketsElement = document.getElementById("bookings2");
    ticketsElement.innerHTML='';
    getTickets();
    for (var i=0; i<ticketsArray2.length; i++) {
        var html5="";
        html5+='<div class="card3 shadow"><center>';
        html5+='<img src="' + ticketsArray2[i].img + '">';
        html5+='<p><font color="white" size="4">&nbsp;&nbsp;Title: ' + ticketsArray2[i].title + '</font></p>';
        html5+='<p><font color="white" size="4">&nbsp;&nbsp;Year: ' + ticketsArray2[i].year + '</font></p>';
        html5+='<p><font color="white" size="4">&nbsp;&nbsp;Booked By: ' + ticketsArray2[i].usrname + '</font></p>';
        html5+='<p><font color="white" size="4">&nbsp;&nbsp;Booked Date: ' + ticketsArray2[i].dates + '</font></p>';
        html5+='<p><font color="white" size="4">&nbsp;&nbsp;Booked Time: ' + ticketsArray2[i].mtimes + '</font></p>';
        html5+='<p><font color="white" size="4">&nbsp;&nbsp;Booked Theater: ' + ticketsArray2[i].mtheaters + '</font></p>';
        html5+='</center></div>';
        ticketsElement.innerHTML+= html5;
        
    }
    if(ticketsArray2.length==0){
        ticketsElement.innerHTML='<p><font color="black" size="6">No tickets booked !</font></p>'
    }
}

// shows booked tickets on page on page load
displayTickets();

