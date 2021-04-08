var aText = new Array("Hi, This is Pulkit Ahuja");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
var is_nav_open = false;
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("SayHello");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}
setTimeout("typewriter()", 6000);

$(function(){
    var scroll = $(document).scrollTop();
    var navHeight = $('#navbar').outerHeight();

    $(window).scroll(function(){
        var scrolled = $(document).scrollTop();

        if (scrolled > navHeight){
            $('#navbar').addClass('animate');
        }
        else
        {
            $('#navbar').removeClass('animate');
        }

        if (scrolled > scroll){
            $('#navbar').removeClass('sticky');
        }
        else{
            $('#navbar').addClass('sticky');
        }

        scroll = $(document).scrollTop();
    });
});

$(document).ready(()=>{
    var icon = document.getElementById("icon-list");
    var modal = document.getElementById("nav-view-mobile");
    var button = document.getElementById("nav-mobile");
    $('#nav-mobile').click((event)=>{
        event.stopPropagation();
        if (is_nav_open === false){
            console.log("clicked");
            console.log(is_nav_open);
            $('#nav-view-mobile').animate({width:"170vw"}, {duration:700, queue:false});
            $('#nav-view-mobile').animate({height:"170vw"}, {duration:700, queue:false});
            $('#links-on-mobile').animate({top:"100vw"}, {duration:700, queue:false});
            $('#links-on-mobile').animate({right:"100vw"}, {duration:700, queue:false});
            is_nav_open = true;
        }
        else{
            $('#nav-view-mobile').animate({width:"85vw"}, {duration:700, queue:false});
            $('#nav-view-mobile').animate({height:"85vw"}, {duration:700, queue:false});
            is_nav_open = false;
        }
    });
    $('#icon-list').click((event)=>{
        event.stopPropagation();
        if (is_nav_open === false){
            console.log("clicked");
            console.log(is_nav_open);
            $('#nav-view-mobile').animate({width:"170vw"}, {duration:700, queue:false});
            $('#nav-view-mobile').animate({height:"170vw"}, {duration:700, queue:false});
            $('#links-on-mobile').animate({top:"100vw"}, {duration:700, queue:false});
            $('#links-on-mobile').animate({right:"100vw"}, {duration:700, queue:false});
            is_nav_open = true;
        }
        else{
            $('#nav-view-mobile').animate({width:"10vw"}, {duration:700, queue:false});
            $('#nav-view-mobile').animate({height:"10vw"}, {duration:700, queue:false});
            is_nav_open = false;
        }
    });
    
    $(window).click(function(event){
        console.log(event.target);
        if (event.target !== modal && event.target !== button && event.target != icon) {
            $('#nav-view-mobile').animate({width:"10vw"}, {duration:700, queue:false});
            $('#nav-view-mobile').animate({height:"10vw"}, {duration:700, queue:false});
            is_nav_open = false;
          }
    });
});