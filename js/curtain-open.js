function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }
var opened = false;


$(document).ready(() => {
    mysound = new sound("sounds/shutter.wav");
    $(window).scroll(()=>{
        var windowBottom = $(window).scrollTop() + $(window).height();
        var objectTop = $('#first-cert').offset().top;
        var windowTop = $(window).scrollTop();
        var objectBottom = $('#first-cert').offset().top + $(this).outerHeight();
        if (windowBottom - objectTop >= 150 && objectBottom >= windowTop && objectTop != 0 && opened === false){
            mysound.play();
            $('.certificate .card').each(function(){
                $(this).animate({width:"100%"}, {duration:1000, queue:false});
            });
            $('.certificate .card-body').each(function(){
                $(this).animate({opacity:1}, {duration:1000, queue:false});
            });
            opened = true;
        }
    });
});
