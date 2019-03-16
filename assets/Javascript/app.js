// Stargazing Trivial Trivia
//
// The main actions that will be handled through JavaScript are updating the
// main screen container html to show the test questions and then to process the test
// and eventually update the html yet again to show the test results.
//

// 
// Function to update the html to show the begin test button..
//

// Initialize the topics array - at least for now..
var topics = [ "stars",
               "planets",
               "galaxies",
               "comets" ];

var nImagesPerTopic = 10;

window.onload=function() {
    renderButtons();
}

// This function handles events where one button is clicked
$( "#addAstronomy" ).on( "click", function( event ) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // The movie from the textbox is then added to our array
    var astronomy = $( "#astronomy-input" ).val().trim();
    if ( astronomy.length > 0 ) {
        topics.push( astronomy );

        // calling renderButtons which handles the processing of our movie array
        renderButtons();

        // Clear the input field..
        $( "#astronomy-input" ).val( "" );
    }
});

function renderButtons() {
    $( "#buttons-view" ).empty();

    // Go through the initial "topics" array and create buttons for each one..
    for ( var i = 0; i < topics.length; i++ ) {
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $( "<button>" );

        // Adding a class
        a.addClass( "astronomy" );

        // Adding a data-attribute with a value of the movie at index i
        a.val( topics[ i ] );

        // Providing the button's text with a value of the movie at index i
        a.text( topics[ i ] );

        // Adding the button to the HTML
        $( "#buttons-view" ).append( a );  
    }
}

// This function handles making the request to GIPHY for the images pertaining to the 
// button that the user has pressed.  Specifically, this.data-name.
$( document.body ).on( "click", ".astronomy", function() {
    // As a precaution, make sure the data-name value has length.  If not, output
    // a console message and just return.
    console.log( $( this ));
    if ( $( this ).val().length == 0 ) {
        console.log( "Zero length data-name found processing .astronomy click event: " + this );
    } else {
        // Time to handle sending image request to GIPHY!!  The string to define the GIPHY
        // image type to request is found at, this.data-name.
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $( this ).val() + "&api_key=7sdlLYdHyinhtF0LPAA54zylXDgF15Jf&limit=" + nImagesPerTopic;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
          // After the data comes back from the request..
          .then( function( response ) {

            var results = response.data;

            // First thing here will be to remove current images being shown!
            $( "#astronomy-images" ).empty();
        
            console.log( queryURL );
            console.log( results );

            // Now pass through the results and create images as we go.
            for ( var i = 0; i < results.length; i++ ) {
                // Have we done enough?
                if ( i >= nImagesPerTopic ) {
                    return;
                }

                // Create an instance of basically our gif class that holds the info we need.
                var imgEntry = $( "<img>" );
                imgEntry.addClass( "gif" );
                imgEntry.attr( "src", results[ i ].images.original_still.url );
                imgEntry.attr( "data-state", "still" );
                imgEntry.attr( "data-still", results[ i ].images.original_still.url );
                imgEntry.attr( "data-animate", results[ i ].images.original_mp4.mp4 );

                $( "#astronomy-images" ).append( imgEntry );
            }
        });
    }
});

$( ".gif" ).on( "click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $( this ).attr( "data-state" );

    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if ( state === "still" ) {
      $( this ).attr( "src", $(this).attr( "data-animate" ));
      $( this ).attr( "data-state", "animate" );
    } else {
      $( this ).attr( "src", $( this ).attr( "data-still" ));
      $( this ).attr( "data-state", "still" );
    }
});
