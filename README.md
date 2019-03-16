# giphyImages

A great reference point for this homework assignment is entry 15 pausing-gifs.html from class.
Boy am I glad I paid attention for THAT one and got it working and even played around with it
a bit more!!  WooHoo!!  

So..  This assignment..  First..  The GIPHY parameters:
 *  'q'
 *  'limit'   Maximum number of images to return in a single call
 *  'rating'

 For my own tracking..  From the classwork notes..

 04 giphy-api.html     This makes a call to the giphy api and gets back, or so it seems. the 25
                       Returns go with 25 entries by default.  Guessing - at this point - the
                       limit parameter will allow you to return only 10 seeing as that is 
                       what this assignment calls for.  Side note..  Make sure to try a
                       request wouldn't be able to return as many as we ask for!!
                       Must handle this scenario.

                       "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"

 12 cat-button.html    This responds to a button press and makes a call to get a single cat image.
                       The most relevant bit here is probably how each button press calls to get
                       an image and then once our "Promise" is answered, we create a new image to 
                       show the gif in - similar to the 10 we will create for THIS app.

                       "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats"
 
 14 dynamic-elements   This makes a giphy call and actually processes through the array of
                       results.  GOLD!!

 15 pausing-gifs.html  This uses an image class, gif, which has url's for a standard src image,
                       a data-still image, a data-animate image, and a data-state (still or
                       animate) to track the state of each button.

I need to get a better understanding of how to use classes in html/css/js.  I was unable to get
the images to animate.  I would really like to know why my implementation isn't working..

