# Project 1: Book a Movie

Book a Movie is a one-stop booking application where the user can search up any movie and book a ticket instantly! It gives the user details about the movie like the movie title, release date, ratings, and director, using the OMDb API. Further, the user can view the trailer of the movie which will be displayed using Youtube API. The user will simply have to click on the “Book Ticket” button and a modal will pop up where they can input their name, movie date, time and location to book the movie ticket.

The site will contain two pages: the landing page for the user to search up the movies and the Booking History page which will show all their previous movie bookings. The pages are built using HTML and styled using CSS, Materelize CSS and Jquery UI. Javascript is utilized to incorporate the functionality of the site. The Booking details from the modal are be saved in the site under local storage. 

![image](https://github.com/SanjeethTharmarajah/movie-bookings/assets/130941252/dbba8ce7-49da-4612-a2af-486c4e98f01d)
<img width="194" alt="Screenshot 2023-07-17 111743" src="https://github.com/SanjeethTharmarajah/movie-bookings/assets/133437739/15fd39c1-0d30-4cc6-b3cd-8f024b34173a">
<img width="156" alt="Screenshot 2023-07-17 111810" src="https://github.com/SanjeethTharmarajah/movie-bookings/assets/133437739/3f6c0c87-e700-4039-a24d-ace66ca620d8">


https://sanjeeththarmarajah.github.io/movie-bookings/

## User Story
As a movie lover, I want to view movie details and booking options for a movie on a one-stop website so that I can book and track my movie tickets seamlessly

## Acceptance Creteria

GIVEN I am a movie lover on the Book A Movie 
WHEN I search for the movie on the main search box
THEN I should see the movie poster, movie details and the trailer of the movie
WHEN I click on the "Book Ticket" CTA
THEN I want to input my Name, Movie Time and Location and theatre name onto a modal 
WHEN I click on a CTA on the modal after inputting all my information
THEN my booking should be saved under "Past Booking"
WHEN I click on the "Booking History" CTA
THEN I should see all my past bookings

## Acheivements
Used Materialize CSS & Jquery UI and the site interactive

Used 2 APIs to display the data: OMDB API and Youtube API

Modals utilized for inputs and alerts

Booking tickets history stored using local storage

Page is responsive
