//Defining a function for when you click an image.
  let handleImageClick = function(event) {
  //Defining the image as what you clicked on (i.e. the thumbnail)
  let theImage = jQuery(event.target)
  console.log("Clicks are happening!: ", theImage)
  //Defining anything with "src" as theImage that was clicked
  let srcValue = theImage.attr("src")
  console.log(srcValue)

//Defining the source value that will replace the header image
  jQuery("#main-image").attr("src", srcValue)
}

//Defining what happens when you click on a thumbnail
  jQuery("#thumbnails").on("click", handleImageClick)
