var d = document,
  cg0 = document.getElementById("catGenre").children[0],
  cg1 = document.getElementById("catGenre").children[1],
  cg2 = document.getElementById("catGenre").children[2],
  cg3 = document.getElementById("catGenre").children[3],
  cg4 = document.getElementById("catGenre").children[4],
  cg5 = document.getElementById("catGenre").children[5],
  cf0 = document.getElementById("catFeatured").children[0],
  cf1 = document.getElementById("catFeatured").children[1],
  cf2 = document.getElementById("catFeatured").children[2],
  cf3 = document.getElementById("catFeatured").children[3],
  cf4 = document.getElementById("catFeatured").children[4],
  cf5 = document.getElementById("catFeatured").children[5],
  cn0 = document.getElementById("catNetflix").children[0],
  cn1 = document.getElementById("catNetflix").children[1],
  cn2 = document.getElementById("catNetflix").children[2],
  cn3 = document.getElementById("catNetflix").children[3],
  cn4 = document.getElementById("catNetflix").children[4],
  cn5 = document.getElementById("catNetflix").children[5];

    cg0.style.background = 'linear-gradient(90deg, #FFA4A4 0%, #FF6B6B 100%)';
    cg1.style.background = 'linear-gradient(90deg, #FFCD78 0%, #FF9F43 100%)';
    cg2.style.background = 'linear-gradient(90deg, #7EEFFD 0%, #48DBFB 100%)';
    cg3.style.background = 'linear-gradient(-90deg, #8DCEFF 0%, #54A0FF 100%)';
    cg4.style.background = 'linear-gradient(90deg, #FFA4A4 0%, #FF6B6B 100%)';
    cg5.style.background = 'linear-gradient(90deg, #FFCD78 0%, #FF9F43 100%)';

    cf0.style.background = 'url(img/shows/master-of-none.jpg) no-repeat';
    cf0.style.backgroundSize = 'cover';
    cf1.style.background = 'url(img/shows/the-office.jpg) no-repeat';
    cf1.style.backgroundSize = 'cover';
    cf2.style.background = 'url(img/shows/modern-family.jpg) no-repeat';
    cf2.style.backgroundSize = 'cover';
    cf3.style.background = 'url(img/shows/master-of-none.jpg) no-repeat';
    cf3.style.backgroundSize = 'cover';
    cf4.style.background = 'url(img/shows/the-office.jpg) no-repeat';
    cf4.style.backgroundSize = 'cover';
    cf5.style.background = 'url(img/shows/modern-family.jpg) no-repeat';
    cf5.style.backgroundSize = 'cover';

    cn0.style.background = 'url(img/shows/oitnb-2.jpg) no-repeat';
    cn0.style.backgroundSize = 'cover';
    cn1.style.background = 'url(img/shows/breaking-bad.jpg) no-repeat';
    cn1.style.backgroundSize = 'cover';
    cn2.style.background = 'url(img/shows/penny-dreadful.jpg) no-repeat';
    cn2.style.backgroundSize = 'cover';
    cn3.style.background = 'url(img/shows/oitnb-2.jpg) no-repeat';
    cn3.style.backgroundSize = 'cover';
    cn4.style.background = 'url(img/shows/breaking-bad.jpg) no-repeat';
    cn4.style.backgroundSize = 'cover';
    cn5.style.background = 'url(img/shows/penny-dreadful.jpg) no-repeat';
    cn5.style.backgroundSize = 'cover';

    seriesCategory.innerHTML = 'Trending';

var reverseWheel = 0;

// TweenLite.set(flookyApp, { left:'50%', xPercent:-50 });
TweenLite.set('.randomWheel', { transformOrigin: 'center center' });
TweenLite.set(wheelArm, { left:'50%', xPercent:-50 });
TweenLite.set(wheelArmBg, { rotation:45 });
TweenLite.set(armIcon, { left:'50%', xPercent:-50, top:'50%', yPercent:-50 });
TweenLite.set(['.dislike', '.like'], { autoAlpha:.7 });

var rotationSnap = 9;
Draggable.create(".randomWheel", {
    type:"rotation",
    throwProps:true,
    snap:function(endValue) {
        return Math.round(endValue / rotationSnap) * rotationSnap;
    }
});

Draggable.create("#wheelArm", {
    type:"y",
    edgeResistance:0.9,
    bounds:{minY:-0, maxY:24},
    lockAxis:true,
    onClick:function() {
      TweenLite.to(".randomWheel", 1.2, { rotation:'-=288', ease:Expo.easeOut });
    },
    onDrag:function(){
      reverseWheel++;
      if ( reverseWheel == 1 ){
        TweenLite.to(".randomWheel", .2, { rotation:'+=9', ease:Power0.easeNone });
      }
    },
    onDragEnd:function() {
      reverseWheel = 0;
      var endingY = this.endY;
      if (endingY > 4){
        TweenLite.to(".randomWheel", 1.2, { rotation:'-=288', ease:Expo.easeOut });
      }
      TweenLite.to(wheelArm, .2, { y:0, ease:Expo.easeOut });
    }
});

Draggable.create("ul", {
  type:"x",
  edgeResistance:0.65,
  bounds:{minX:0, maxX:-734},
  throwProps:true,
  onDrag:function() {
    //console.log(x);
  }
});

function consoleScreenDimensions() {
    var x = screen.width;
    var y = screen.height;
    //widthandheight.innerHTML = 'screen with is '+x+' and screen height is '+y;
}

consoleScreenDimensions();
