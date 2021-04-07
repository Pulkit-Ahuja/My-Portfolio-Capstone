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
    mysound = new sound("sounds/curtain.mp3");
    $(window).scroll(()=>{
        windowBottom = $(window).scrollTop() + $(window).height();
        objectTop = $('#first-cert').offset().top;
        if (windowBottom - objectTop >= 100 && opened === false){
            // mysound.play();
            $('.card').each(function(){
                console.log(this);
                $(this).animate({width:"100%"}, {duration:1000, queue:false});
            });
            $('.card-body').each(function(){
                console.log(this);
                $(this).animate({opacity:1}, {duration:1000, queue:false});
            });
            opened = true;
        }
    });
});
