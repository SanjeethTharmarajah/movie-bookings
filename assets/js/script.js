var searchEl = document.getElementById("searchbox");
var resultsEl = document.getElementById("results");
function searchMovies(){
    var search1 = searchEl.value.replace(" ", "+");
    var requestUrl = 'https://www.omdbapi.com/?apikey=c93a6e42&t=' + search1;
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        showposter(data);
    }); 
}

function showposter(data){
    var html1 = "";
    if(data.Error != "Movie not found!"){
        html1+= '<div class="row"><div class="col s12 m12"><div class="card"><div class="card-image">';
        if(data.Poster != 'N/A'){
            html1+='<img src="' + data.Poster + '"></div><div class="card-content">';
        }
        else{
            html1+='<img src="' + './assets/img/poster.jpg' + '"></div><div class="card-content">'; 
        }
        html1+= '<p>Title: <font color="grey">' + data.Title + '</font></p>';
        html1+= '<p>Year: <font color="grey">' + data.Year + '</font></p>';
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

function getvideo(query1){
    const searchTerms = query1;

    const YOUTUBE_API_KEY = "AIzaSyBk3D0on_Lh1tFehCxN1C4Av6E4RHkPvyo";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerms}&key=${YOUTUBE_API_KEY}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        document.getElementById("vdobox").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    });
}