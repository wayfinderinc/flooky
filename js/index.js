var d = document,
  cg0 = document.getElementById("catGenre").children[0],
  cg1 = document.getElementById("catGenre").children[1],
  cg2 = document.getElementById("catGenre").children[2],
  cg3 = document.getElementById("catGenre").children[3],
  cg4 = document.getElementById("catGenre").children[4],
  cg5 = document.getElementById("catGenre").children[5],
  // cf0 = document.getElementById("catFeatured").children[0],
  // cf1 = document.getElementById("catFeatured").children[1],
  // cf2 = document.getElementById("catFeatured").children[2],
  // cf3 = document.getElementById("catFeatured").children[3],
  // cf4 = document.getElementById("catFeatured").children[4],
  // cf5 = document.getElementById("catFeatured").children[5],
  // cn0 = document.getElementById("catNetflix").children[0],
  // cn1 = document.getElementById("catNetflix").children[1],
  // cn2 = document.getElementById("catNetflix").children[2],
  // cn3 = document.getElementById("catNetflix").children[3],
  // cn4 = document.getElementById("catNetflix").children[4],
  // cn5 = document.getElementById("catNetflix").children[5],
  dt0 = document.getElementById("descriptionTrivia").children[0],
  dt1 = document.getElementById("descriptionTrivia").children[1],
  dt2 = document.getElementById("descriptionTrivia").children[2];

    cg0.style.background = 'linear-gradient(90deg, #FFA4A4 0%, #FF6B6B 100%)';
    cg1.style.background = 'linear-gradient(90deg, #FFCD78 0%, #FF9F43 100%)';
    cg2.style.background = 'linear-gradient(90deg, #7EEFFD 0%, #48DBFB 100%)';
    cg3.style.background = 'linear-gradient(-90deg, #8DCEFF 0%, #54A0FF 100%)';
    cg4.style.background = 'linear-gradient(90deg, #FFA4A4 0%, #FF6B6B 100%)';
    cg5.style.background = 'linear-gradient(90deg, #FFCD78 0%, #FF9F43 100%)';

    // cf0.style.background = 'url(img/shows/master-of-none.jpg) no-repeat';
    // cf0.style.backgroundSize = 'cover';
    // cf1.style.background = 'url(img/shows/the-office.jpg) no-repeat';
    // cf1.style.backgroundSize = 'cover';
    // cf2.style.background = 'url(img/shows/modern-family.jpg) no-repeat';
    // cf2.style.backgroundSize = 'cover';
    // cf3.style.background = 'url(img/shows/master-of-none.jpg) no-repeat';
    // cf3.style.backgroundSize = 'cover';
    // cf4.style.background = 'url(img/shows/the-office.jpg) no-repeat';
    // cf4.style.backgroundSize = 'cover';
    // cf5.style.background = 'url(img/shows/modern-family.jpg) no-repeat';
    // cf5.style.backgroundSize = 'cover';
    //
    // cn0.style.background = 'url(img/shows/oitnb-2.jpg) no-repeat';
    // cn0.style.backgroundSize = 'cover';
    // cn1.style.background = 'url(img/shows/breaking-bad.jpg) no-repeat';
    // cn1.style.backgroundSize = 'cover';
    // cn2.style.background = 'url(img/shows/penny-dreadful.jpg) no-repeat';
    // cn2.style.backgroundSize = 'cover';
    // cn3.style.background = 'url(img/shows/oitnb-2.jpg) no-repeat';
    // cn3.style.backgroundSize = 'cover';
    // cn4.style.background = 'url(img/shows/breaking-bad.jpg) no-repeat';
    // cn4.style.backgroundSize = 'cover';
    // cn5.style.background = 'url(img/shows/penny-dreadful.jpg) no-repeat';
    // cn5.style.backgroundSize = 'cover';

    // card1.style.background = 'url(img/shows/russian-doll.jpg) no-repeat';
    // card1.style.backgroundSize = 'cover';

    seriesCategory.innerHTML = 'Trending';
    var seriestitle = 'Russian Doll';
    seriesTitle.innerHTML = seriestitle;
    seriesTitleTop.innerHTML = seriestitle;
    episodeTitle.innerHTML = 'Chapter Six: An Exorcism in Greendale';
    imdbEpisdeInfo.innerHTML = 'Season 1 Episode 6 &nbsp;&bull;&nbsp;  Oct 26, 2018 &nbsp;&bull;&nbsp; 50min';
    episodeDescription.innerHTML = 'Harvey, Roz, and Sisue explore a mysterious force of evil. Sabrina digs deeper in Ms. Wardwell\'s intentions. Hilda pursues a new beginning.';

var reverseWheel = 0;

// TweenLite.set(flookyApp, { left:'50%', xPercent:-50 });
TweenLite.set('.randomWheel', { transformOrigin: 'center center' });
TweenLite.set(wheelArm, { left:'50%', xPercent:-50 });
TweenLite.set(wheelArmBg, { rotation:45 });
TweenLite.set(armIcon, { left:'50%', xPercent:-50, top:'50%', yPercent:-50 });
TweenLite.set(['.dislike', '.like', '.heart-top'], { autoAlpha:.7 });
TweenLite.set([dt1, dt2], { autoAlpha:.65 });

// TweenLite.set([seriesCategory, '.randomWheel'], { autoAlpha:0 });

var rotationSnapWheel = 9;
Draggable.create(".randomWheel", {
    type:"rotation",
    throwProps:true,
    snap:function(endValue) {
        return Math.round(endValue / rotationSnapWheel) * rotationSnapWheel;
    },
    onClick:function() {
      initSeries();
    },
    onDrag:function() {
      TweenLite.to('.seriesInfo', .4, { autoAlpha:.025, y:10, ease:Expo.easeOut });
    },
    onDragEnd:function() {
      TweenLite.to('.seriesInfo', .4, { autoAlpha:1, y:0, ease:Expo.easeInOut, delay:.2 });
    }
    // onThrowComplete:function() {
    //   TweenLite.to(wheelArm, .2, { y:0, ease:Expo.easeOut });
    // }
});

function initSeries() {
  TweenLite.to(['#seriesCategory', '.seriesInfo'], .3, { autoAlpha:0, ease:Expo.easeInOut });
  TweenLite.to(['.randomWheel'], .4, { scale:.8, autoAlpha:7, ease:Expo.easeInOut, y:-384, autoAlpha:.0 });
  TweenLite.set('.episode-area', { display:'block' });
  TweenLite.fromTo('.series-info', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeInOut  });
  TweenLite.fromTo('.seriesArea', .6, { autoAlpha:0, y: 200 }, { autoAlpha:1, y:0, ease:Expo.easeInOut, delay:.04 });
}

Draggable.create("#wheelArm", {
    type:"y",
    edgeResistance:0.9,
    bounds:{minY:-0, maxY:24},
    lockAxis:true,
    onClick:function() {
      TweenLite.to(".randomWheel", .8, { rotation:'-=288', ease:Expo.easeOut });
      TweenLite.to('.seriesInfo', .2, { autoAlpha:.025, y:10, ease:Expo.easeOut, onComplete:function() {
        TweenLite.to('.seriesInfo', .4, { autoAlpha:1, y:0, ease:Expo.easeInOut });
      } });
    },
    onDrag:function(){
      reverseWheel++;
      if ( reverseWheel == 1 ){
        TweenLite.to(".randomWheel", .2, { rotation:'+=9', ease:Power0.easeNone });
        TweenLite.to('.seriesInfo', .4, { autoAlpha:.025, y:10, ease:Expo.easeOut });
      }
    },
    onDragEnd:function() {
      reverseWheel = 0;
      var endingY = this.endY;
      if (endingY > 4){
        TweenLite.to('.seriesInfo', .4, { autoAlpha:1, y:0, ease:Expo.easeInOut, delay:.2 });
        TweenLite.to("#wheelArm", .6, { y:0, ease:Expo.easeOut });
        TweenLite.to(".randomWheel", .8, { rotation:'-=288', ease:Expo.easeOut, onStart:initSponsor });
      }
    }
});

Draggable.create(".category-list ul", {
  type:"x",
  edgeResistance:0.65,
  bounds:{minX:0, maxX:-734},
  throwProps:true,
  onDrag:function() {
    //console.log(x);
  }
});

// TweenLite.set('.episode-cards ul', { transformPerspective:400 });

var rotationSnapEpisodeCards = 343;
Draggable.create(".episode-cards ul", {
  type:"x",
  edgeResistance:0.65,
  bounds:{minX:0, maxX:-2058},
  throwProps:true,
  snap:function(endValue) {
      return Math.round(endValue / rotationSnapEpisodeCards) * rotationSnapEpisodeCards;
  },
  onPress:function() {
    //record the starting values so we can compare them later...
    startX = this.x;
    startY = this.y;
  },
  onDrag:function() {
    var xChange = this.x - startX,
        yChange = this.y - startY,
        ratio = Math.abs(xChange / yChange),
        direction = [],
        episodeDirection = getMomentaryDirection(this.target);
    if ( episodeDirection == 'left' ){
      // TweenLite.to('.episode-cards ul', .6, { rotationY:1, ease:Expo.easeOut });
    }
    if ( episodeDirection == 'right' ){
      // TweenLite.to('.episode-cards ul', .6, { rotationY:-1, ease:Expo.easeOut });
    }
    console.log(episodeDirection);
  },
  onDragEnd:function() {
    // TweenLite.to('.episode-cards ul', .4, { rotationY:0, ease:Expo.easeOut });
  }
});

function getMomentaryDirection(target) {
  var x = ThrowPropsPlugin.getVelocity(target, "x"),
      y = ThrowPropsPlugin.getVelocity(target, "y"),
      ratio = Math.abs(x / y),
      direction = [];
  if (ratio > 0.25) {
    direction.push((x < 0) ? "left" : "right");
  }
  return direction.join("-");
}

function setGOT() {
  seriestitle = 'Game of Thrones';
  seriesTitle.innerHTML = seriestitle;
  seriesTitleTop.innerHTML = seriestitle;
  sponsorBackground.style.background = 'url(img/background/got.jpg) no-repeat';
  sponsorBackground.style.backgroundSize = 'cover';
  sponsorBackground.style.backgroundPosition = 'center center';
  quickLookBackground.style.background = 'url(img/background/got-flipped.jpg) no-repeat';
  quickLookBackground.style.backgroundSize = 'cover';
  quickLookBackground.style.backgroundPosition = 'center center';
  quickLookBackground.style.borderTop = '2px solid #2E3C4F';
  TweenLite.set('.series-area-bg', { background:'#000', autoAlpha:.25 });
  TweenLite.set(['.decription-copy', '#episodeTitle', '.imdb-episode-info', '.episode-description'], { color:'#fff' });
  TweenLite.set('.bar-bg', { background:'rgba(255,255,255,0.15)' });
  TweenLite.set('.bar-bg .bar', { background:'#2BA8ED' });
  var ec0 = document.getElementById("episodeCards").children[0],
  ec1 = document.getElementById("episodeCards").children[1],
  ec2 = document.getElementById("episodeCards").children[2],
  ec3 = document.getElementById("episodeCards").children[3],
  ec4 = document.getElementById("episodeCards").children[4],
  ec5 = document.getElementById("episodeCards").children[5];
  ec6 = document.getElementById("episodeCards").children[6];
  ec0.style.background = 'url(img/episodes/got-s7-e1.jpg) no-repeat';
  ec0.style.backgroundSize = 'cover';
  ec1.style.background = 'url(img/episodes/got-s7-e2.jpg) no-repeat';
  ec1.style.backgroundSize = 'cover';
  ec2.style.background = 'url(img/episodes/got-s7-e3.jpg) no-repeat';
  ec2.style.backgroundSize = 'cover';
  ec3.style.background = 'url(img/episodes/got-s7-e4.jpg) no-repeat';
  ec3.style.backgroundSize = 'cover';
  ec4.style.background = 'url(img/episodes/got-s7-e5.jpg) no-repeat';
  ec4.style.backgroundSize = 'cover';
  ec5.style.background = 'url(img/episodes/got-s7-e6.jpg) no-repeat';
  ec5.style.backgroundSize = 'cover';
  ec6.style.background = 'url(img/episodes/got-s7-e7.jpg) no-repeat';
  ec6.style.backgroundSize = 'cover';
}

function initSponsor() {
  setGOT();
  var sponsorTl = new TimelineMax({ delay:.2 });
  sponsorTl.fromTo('#sponsorBackground', .8, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut })
    .fromTo('#quickLookBackground', .6, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut }, 0)
    .to('.category-type h3', .6, { color:'#fff', ease:Expo.easeOut }, 0)
    .to('#wheelArmBg', .8, { background:'#2BA8ED', boxShadow:'4px 4px 8px 0 #2E3C4F' }, 0)
    .to(['.dislike', '.like', '.heart-top'], .8, { autoAlpha:.8 }, 0);
}

function consoleScreenDimensions() {
    var x = screen.width;
    var y = screen.height;
    //widthandheight.innerHTML = 'screen with is '+x+' and screen height is '+y;
}

consoleScreenDimensions();
