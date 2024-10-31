// // fetch ("0aceMjIzMTM6MTk0Mzc6YzdrVnNiZDNBVFhXRlV5Ng=")
// //     .then(response => response.json())
// //     .then(data => console.log(data.P))
// //     .catch(error => console.error(error));

const apiKey = "U0L4c4IAIMcwEAxsyG7qTGXZDxBYFQHAsecPmclYRxKZI1pI2ygjp6Y2";
const apiUrl = "https://api.pexels.com/v1/search";
    
$("#menu-toggle").click(function(){
    $("#side-bar").toggle(1000); //This opens and closes the sidebar 
});

$("#btn-1").click(function(){
    event.preventDefault();//This prevents the page from reloading when the event starts
    alert("You are in!!")
    $(".login").hide();//This hides the login form page
    $("#main").show(); //This shows the content on the page initially, which has been set to "display: none;"
    $(".search").show();
});

$("#search-button").click(function() {
  const animalName = $("#animal-search").val().trim();

  if (animalName) {
    $.ajax({
      url: apiUrl,
      method: "GET",
      headers: {
        Authorization: apiKey
      },
      data: {
        query: animalName,
        per_page: 50 // Number of images to fetch
      },
      success: function(response) {
        // Clear the gallery
        $("#image-gallery").empty();
        
        // Append images to the gallery
        response.photos.forEach(photo => {
          const imgElement = `<img src="${photo.src.medium}" alt="${animalName}"  class="animal-image" style="margin: 10px; max-width: 200px;">`;
          $("#image-gallery").append(imgElement);
        });
      },
      error: function() {
        alert("Unable to fetch images. Please try again.");
      }
    });
  } else {
    alert("Please enter an animal name.");
  }
});