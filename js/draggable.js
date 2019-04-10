var reverseWheel = 0;

TweenLite.set('.randomWheel', { transformOrigin: 'center center' });
TweenLite.set('.episode-cards ul li', { transformPerspective:400 });
var rotationSnapWheel = 9;
var rotationSnapEpisodeCards = 343;

var dragWheel = new Draggable(".randomWheel", {
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
      TweenLite.to('#seriesBackground', .4, { autoAlpha:.4, ease:Expo.easeOut });
    },
    onDragEnd:function() {
      TweenLite.to('.seriesInfo', .4, { autoAlpha:1, y:0, ease:Expo.easeInOut, delay:.2 });
      TweenLite.to('#seriesBackground', .4, { autoAlpha:1, ease:Expo.easeOut, delay:.2 });
      //endingRotation = this.endRotation;
      editSeriesTT();
    }
});

Draggable.create("#wheelArm", {
    type:"y",
    edgeResistance:0.9,
    bounds:{minY:-0, maxY:24},
    lockAxis:true,
    onClick:function() {
      TweenLite.to(".randomWheel", .8, { rotation:-288, ease:Expo.easeOut });
      TweenLite.to('.seriesInfo', .2, { autoAlpha:.025, y:10, ease:Expo.easeOut, onComplete:function() {
        // editSeriesTT();
        initSponsor();
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
        TweenLite.to(".randomWheel", .8, { rotation:-288, ease:Expo.easeOut });
        // editSeriesTT();
        initSponsor();
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

var dragEpisodes = new Draggable(".episode-cards ul", {
  type:"x",
  edgeResistance:0.9,
  bounds:{minX:0, maxX:-2058},
  throwProps:true,
  snap:function(endValue) {
      return Math.round(endValue / rotationSnapEpisodeCards) * rotationSnapEpisodeCards;
  },
  onPress:function() {
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
      TweenLite.to('.episode-cards ul li', .6, { transformOrigin:'left center', rotationY:6, ease:Expo.easeOut });
    }
    if ( episodeDirection == 'right' ){
      TweenLite.to('.episode-cards ul li', .6, { transformOrigin:'right center', rotationY:-6, ease:Expo.easeOut });
    }
    TweenLite.to('.imdb-se', .4, { autoAlpha:.1, ease:Expo.easeOut });
    //console.log(episodeDirection);
  },
  onDragEnd:function() {
    TweenLite.to('.episode-cards ul li', .4, { rotationY:0, ease:Expo.easeOut });
    editEpisodeCopy();
    TweenLite.to('.imdb-se', .4, { autoAlpha:1, ease:Expo.easeOut });
  }
});

function getMomentaryDirection(target) {
  var x = ThrowPropsPlugin.getVelocity(target, "x"),
      y = ThrowPropsPlugin.getVelocity(target, "y"),
      ratio = Math.abs(x / y),
      direction = [];
  if (ratio > 0.25) { //you can adjust the ratio thresholds to make things more or less sensitive to diagonal movement.
    direction.push((xChange < 0) ? "left" : "right");
  }
  return direction.join("-");
}

Draggable.create("#quickLook", {
  type:"y",
  edgeResistance:1,
  bounds:{minY:0, maxY:-598},
  throwProps:true,
  onPress:function() {
    QLstartX = this.x;
    QLstartY = this.y;
    QLendY = this.endX;
    QLendY = this.endY;
  },
  onDrag:function() {
    hideWheel();
    //TweenLite.to('#wheelArm', .8, { y:200, ease:Back.easeIn });
  },
  onDragEnd:function() {
    if ( QLstartY > QLendY ) {
      TweenLite.to('#quickLook', .6, { y:-598, ease:Expo.easeOut });
      TweenLite.fromTo('.drag-icon', .6, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut });
    } else {
      TweenLite.to('#quickLook', .6, { y:0, ease:Expo.easeOut });
      TweenLite.to('#wheelArm', .8, { y:0, ease:Expo.easeOut });
    }
  }
});

function hideWheel() {
  TweenLite.to('#wheelArm', .6, { y:160, ease:Back.easeIn });
  TweenLite.to('.drag-icon', .6, { autoAlpha:0, ease:Expo.easeOut });
}


function editSeriesTT() {
  wheelLocation = dragWheel.endRotation;
  locateSeries(wheelLocation);
  seriesTitle.innerHTML = seriestitle;
  seriesTitleTop.innerHTML = seriestitle;
  console.log(wheelLocation);
}

function locateSeries(wheelLocation) {
  if ( wheelLocation == '0' || wheelLocation == '360' ){ seriestitle = 'Russian Doll'; seriesBackground.style.background = '#5483E6 url(img/shows/russian-doll.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-9' || wheelLocation == '351' ){ seriestitle = 'Ozark'; seriesBackground.style.background = '#5483E6 url(img/shows/ozark.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-18' || wheelLocation == '342' ){ seriestitle = 'The OA'; seriesBackground.style.background = '#5483E6 url(img/shows/the-oa.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-27' || wheelLocation == '333' ){ seriestitle = 'Hanna'; seriesBackground.style.background = '#5483E6 url(img/shows/hanna.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-36' || wheelLocation == '324' ){ seriestitle = 'The Handmaid\'s Tale'; seriesBackground.style.background = '#5483E6 url(img/shows/the-handmaids-tale.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-45' || wheelLocation == '315' ){ seriestitle = 'The Magicians'; seriesBackground.style.background = '#5483E6 url(img/shows/the-magicians.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-54' || wheelLocation == '306' ){ seriestitle = 'Friends'; seriesBackground.style.background = '#5483E6 url(img/shows/friends.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-63' || wheelLocation == '297' ){ seriestitle = 'The Umbrella Academy'; seriesBackground.style.background = '#5483E6 url(img/shows/the-umbrella-academy.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-72' || wheelLocation == '288' ){ seriestitle = 'Better Call Saul'; seriesBackground.style.background = '#5483E6 url(img/shows/better-call-saul.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-81' || wheelLocation == '279' ){ seriestitle = 'The Walking Dead'; seriesBackground.style.background = '#5483E6 url(img/shows/the-walking-dead.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-90' || wheelLocation == '270' ){ seriestitle = 'Chilling Adventures of Sabrina'; seriesBackground.style.background = '#5483E6 url(img/shows/chilling-adventures-of-sabrina.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-99' || wheelLocation == '261' ){ seriestitle = 'The Crown'; seriesBackground.style.background = '#5483E6 url(img/shows/the-crown.jpg) no-repeat top center / cover';}
  if ( wheelLocation == '-108' || wheelLocation == '252' ){ seriestitle = 'Arrested Development'; seriesBackground.style.background = '#5483E6 url(img/shows/arrested-development.jpg) no-repeat top center / cover';}
  if ( wheelLocation == '-117' || wheelLocation == '243' ){ seriestitle = 'This is Us'; seriesBackground.style.background = '#5483E6 url(img/shows/this-is-us.jpg) no-repeat top center / cover';}
  if ( wheelLocation == '-126' || wheelLocation == '234' ){ seriestitle = 'True Detective'; seriesBackground.style.background = '#5483E6 url(img/shows/true-detective.jpg) no-repeat top center / cover';}
  if ( wheelLocation == '-135' || wheelLocation == '225' ){ seriestitle = 'Sex Education'; seriesBackground.style.background = '#5483E6 url(img/shows/true-detective.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-144' || wheelLocation == '216' ){ seriestitle = 'Smilf'; seriesBackground.style.background = '#5483E6 url(img/shows/smilf.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-162' || wheelLocation == '198' ){ seriestitle = 'The Good Place'; seriesBackground.style.background = '#5483E6 url(img/shows/the-good-place.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-171' || wheelLocation == '189' ){ seriestitle = 'Star Trek Discovery'; seriesBackground.style.background = '#5483E6 url(img/shows/star-trek-discovery.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-180' || wheelLocation == '180' ){ seriestitle = 'Russian Doll'; seriesBackground.style.background = '#5483E6 url(img/shows/russian-doll.jpg) no-repeat top center'; }
  if ( wheelLocation == '-189' || wheelLocation == '171' ){ seriestitle = 'The Crown'; seriesBackground.style.background = '#5483E6 url(img/shows/the-crown.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-198' || wheelLocation == '162' ){ seriestitle = 'The OA'; seriesBackground.style.background = '#5483E6 url(img/shows/the-oa.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-207' || wheelLocation == '153' ){ seriestitle = 'Arrested Development'; seriesBackground.style.background = '#5483E6 url(img/shows/arrested-development.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-216' || wheelLocation == '144' ){ seriestitle = 'The Handmaid\'s Tale'; seriesBackground.style.background = '#5483E6 url(img/shows/the-handmaids-tale.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-225' || wheelLocation == '135' ){ seriestitle = 'The Magicians'; seriesBackground.style.background = '#5483E6 url(img/shows/the-magicians.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-234' || wheelLocation == '126' ){ seriestitle = 'Friends'; seriesBackground.style.background = '#5483E6 url(img/shows/friends.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-243' || wheelLocation == '117' ){ seriestitle = 'The Umbrella Academy'; seriesBackground.style.background = '#5483E6 url(img/shows/the-umbrella-academy.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-252' || wheelLocation == '108' ){ seriestitle = 'Ozark'; seriesBackground.style.background = '#5483E6 url(img/shows/ozark.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-261' || wheelLocation == '99' ){ seriestitle = 'The Good Place'; seriesBackground.style.background = '#5483E6 url(img/shows/the-good-place.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-270' || wheelLocation == '90' ){ seriestitle = 'Hanna'; seriesBackground.style.background = '#5483E6 url(img/shows/hanna.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-279' || wheelLocation == '81' ){ seriestitle = 'Better Call Saul'; seriesBackground.style.background = '#5483E6 url(img/shows/better-call-saul.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-288' || wheelLocation == '72' ){ seriestitle = 'Game of Thrones'; seriesBackground.style.background = '#5483E6 url(img/shows/game-of-thrones-sponsor.jpg) no-repeat top center / cover'; initSponsor(); }
  if ( wheelLocation == '-297' || wheelLocation == '63' ){ seriestitle = 'The Walking Dead'; seriesBackground.style.background = '#5483E6 url(img/shows/the-walking-dead.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-306' || wheelLocation == '54' ){ seriestitle = 'This is Us'; seriesBackground.style.background = '#5483E6 url(img/shows/this-is-us.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-315' || wheelLocation == '45' ){ seriestitle = 'True Detective'; seriesBackground.style.background = '#5483E6 url(img/shows/true-detective.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-324' || wheelLocation == '36' ){ seriestitle = 'Sex Education'; seriesBackground.style.background = '#5483E6 url(img/shows/sex-education.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-333' || wheelLocation == '27' ){ seriestitle = 'Smilf'; seriesBackground.style.background = '#5483E6 url(img/shows/smilf.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-342' || wheelLocation == '18' ){ seriestitle = 'Stranger Things'; seriesBackground.style.background = '#5483E6 url(img/shows/stranger-things.jpg) no-repeat top center / cover'; }
  if ( wheelLocation == '-351' || wheelLocation == '9' ){ seriestitle = 'Chilling Adventures of Sabrina'; seriesBackground.style.background = '#5483E6 url(img/shows/chilling-adventures-of-sabrina.jpg) no-repeat top center / cover'; }
}

function editEpisodeCopy() {
  episodeLocation = dragEpisodes.endX;
  if ( episodeLocation == 0 ){
    episodeTitle.innerHTML = 'DragonStone';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  July 16, 2017 &nbsp;&bull;&nbsp; 59min';
    episodeDescription.innerHTML = 'Jon organizes the North\'s defenses. Cersei tries to even the odds. Daenerys comes home. Arya reminds the Freys "the North remembers."" Sam adapts to life in Oldtown. The Night King makes his way south.';
  }else if ( episodeLocation == '-343' ){
    episodeTitle.innerHTML = 'Stormborn';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  July 23, 2017 &nbsp;&bull;&nbsp; 59min';
    episodeDescription.innerHTML = 'Daenerys receives an unexpected visitor. Jon faces resistance. Tyrion plans the conquest of Westeros. Cersei gathers her allies. Arya has a reunion with old friends. Sam risks his career and life.';
  }else if ( episodeLocation == '-686' ){
    episodeTitle.innerHTML = 'The Queen\'s Justice';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  July 30, 2017 &nbsp;&bull;&nbsp; 1hr 3min';
    episodeDescription.innerHTML = 'Jon and Daenerys finally meet. Cersei gains a new ally. Sansa receives an unexpected visitor. Sam is confronted for his actions.';
  }else if ( episodeLocation == '-1029' ){
    episodeTitle.innerHTML = 'The Spoils of War';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  August 6, 2017 &nbsp;&bull;&nbsp; 50min';
    episodeDescription.innerHTML = 'Daenerys takes matters into her own hands. Arya reaches her destination. Jaime and Bronn collect the spoils from the war with the Tyrells.';
  }else if ( episodeLocation == '-1372' ){
    episodeTitle.innerHTML = 'Eastwatch';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  August 13, 2017 &nbsp;&bull;&nbsp; 59min';
    episodeDescription.innerHTML = 'Daenerys demands loyalty from the surviving Lannister soldiers; Jon heeds Bran\'s warning about White Walkers on the move; Cersei vows to vanquish anyone or anything that stands in her way.';
  }else if ( episodeLocation == '-1715' ){
    episodeTitle.innerHTML = 'Beyond the Wall';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  August 20, 2017 &nbsp;&bull;&nbsp; 1hr 10min';
    episodeDescription.innerHTML = 'Jon and his team go beyond the wall to capture a wight. Daenerys has to make a tough decision.';
  }else if ( episodeLocation == '-2058' ){
    episodeTitle.innerHTML = 'The Dragon and the Wolf';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  August 27, 2017 &nbsp;&bull;&nbsp; 1hr 20min';
    episodeDescription.innerHTML = 'Everyone meets in King\'s Landing to discuss the fate of the realm. In Winterfell, Sansa confronts Arya. Sam reaches Winterfell, where he and Bran discover a shocking secret about Jon Snow.';
  }
  //console.log(episodeLocation);
}
