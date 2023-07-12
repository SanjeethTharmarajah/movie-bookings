//defining global variables
var searchEl = document.getElementById("searchbox");
var resultsEl = document.getElementById("results");
var imgsrc1;
var title1;
var movieyear1;
var ticketsArray1 = [];
//function to search movies in OMDB api database
function searchMovies(){
    var search1 = searchEl.value.replace(" ", "+");
    if(search1 != ""){
        var requestUrl = 'https://www.omdbapi.com/?apikey=c93a6e42&t=' + search1;
        fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            showposter(data);
        }); 
    }
    
}
//function to show poster from fetched results from OMDB api database
function showposter(data){
    var html1 = "";
    if(data.Error != "Movie not found!"){
        html1+= '<div class="row"><div class="col s12 m12"><div class="card"><div class="card-image">';
        if(data.Poster != 'N/A'){
            html1+='<img src="' + data.Poster + '"></div><div class="card-content">';
            imgsrc1 = data.Poster;
        }
        else{
            html1+='<img src="' + './assets/img/poster.jpg' + '"></div><div class="card-content">'; 
            imgsrc1 = './assets/img/poster.jpg';
        }
        html1+= '<p>Title: <font color="grey">' + data.Title + '</font></p>';
        title1 = data.Title;
        html1+= '<p>Year: <font color="grey">' + data.Year + '</font></p>';
        movieyear1 = data.Year;
        html1+= '<p>Director: <font color="grey">' + data.Director + '</font></p>';
        html1+= '<p>Actors: <font color="grey">' + data.Actors + '</font></p>';
        html1+= '<p>Ratings: <font color="grey">' + data.Rated + '</font></p>';
        html1+= '</div></div></div></div>';
        html1+= '<div class="row"></div><div class="col s12 m12"><div class="card"><div class="card-image">';
        html1+= '<iframe id="vdobox" style="width:100%; height:400px;" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        html1+= '</div><div class="card-content"><p>Video for ' + data.Title.toUpperCase()  + '</p></div></div></div></div>';
        html1+= '<div class="row"></div><div class="col s12 m12"><center><button class="btn waves-effect waves-light shadow" onclick="showmodal()">Book Ticket</button></center></div></div>'
        
        resultsEl.innerHTML='';
        resultsEl.innerHTML=html1;
        getvideo(data.Title + ' ' + data.Year);
    }
    else {
        html1+='<img src="' + './assets/img/poster.jpg' + '"></div><div class="card-content">';
        html1+= '<p>Title: <font color="grey">' + 'N/A' + '</font></p>';
        html1+= '<p>Year: <font color="grey">' + 'N/A' + '</font></p>';
        html1+= '<p>Director: <font color="grey">' + 'N/A' + '</font></p>';
        html1+= '<p>Actors: <font color="grey">' + 'N/A' + '</font></p>';
        html1+= '<p>Ratings: <font color="grey">' + 'N/A' + '</font></p>';
        html1+= ' </div></div></div></div>';
        html1+= '<div class="row"></div><div class="col s12 m12"><div class="card"><div class="card-image">';
        resultsEl.innerHTML='';
        resultsEl.innerHTML=html1;
    }
    resultsEl.style.display="block";
}
//function to get video from Youtube api
function getvideo(query1){
    const searchTerms = query1;

    const YOUTUBE_API_KEY = "AIzaSyCso1OEu2gB-8TJNsyIyvl2J4VqS8dd9Ik";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerms}&key=${YOUTUBE_API_KEY}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        document.getElementById("vdobox").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    });
}
//function to show bookings modal
function showmodal(){
    var html2="";
    var html3="";
    

    html2+='<img src="' + imgsrc1 + '" class="moviecard2 shadow">';
    html3+='<p><font color="white">&nbsp;&nbsp;Title: ' + title1 + '</font></p>';
    html3+='<p><font color="white">&nbsp;&nbsp;Year: ' + movieyear1 + '</font></p>';
    
    document.getElementById("bookingModal").style.display="block";
    document.getElementById("moviecard1").innerHTML = html2;
    document.getElementById("moviecardtxt").innerHTML = html3;
}
//function to close bookings modal
function closemodal() {
    document.getElementById("bookingModal").style.display="none";
}
//function to store movie bookings in local storage
function storeMovies(){
    var storeTickets;
    var usrname = document.getElementById("namebox").value;
    var dates = document.getElementById("datepicker").value;
    var mtime = document.getElementById("movietime");
    var mtheater = document.getElementById("movietheater")
    var mtime2 = mtime.options[mtime.selectedIndex].text;
    var mtheater2 = mtheater.options[mtheater.selectedIndex].text;
    if(usrname != "" && dates != ""){
        var ticketsObj = {
            "img" : imgsrc1,
            "title" : title1,
            "year" : movieyear1,
            "usrname" : usrname,
            "dates" : dates,
            "mtimes" : mtime2,
            "mtheaters" : mtheater2
        };
    
        ticketsArray1.push(ticketsObj);
        
        storeTickets = JSON.stringify(ticketsArray1);
        localStorage.setItem("tickets", storeTickets);
        alert("Ticket successfully booked !");
        closemodal();
    }
    else {
        alert("Enter both user name and date !");
    }
}
//shows bookings page
function showBookings(){
    window.location.href="bookings.html";
}

// loads the tickets from local storage
function getTickets(){
    var ticketsAll = localStorage.getItem("tickets");
    if(JSON.parse(ticketsAll) != null){
        ticketsArray1 = JSON.parse(ticketsAll);
    }
}
//gets booking tickets from local storage on page load
getTickets();