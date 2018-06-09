window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("arrow-up").style.display = "block";
    } else {
        document.getElementById("arrow-up").style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    /*document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera*/
    
     window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 0
  });
}

function toBottom(){
    window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 10000
  });
}