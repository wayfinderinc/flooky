var reverseWheel = 0;

TweenLite.set('.randomWheel', { transformOrigin: 'center center' });
TweenLite.set('.episode-cards ul li', { transformPerspective:400 });
var rotationSnapWheel = 9;
var rotationSnapEpisodeCards = 343;

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
      endingRotation = this.endRotation;
      editSeriesTT();
    }
});

Draggable.create("#wheelArm", {
    type:"y",
    edgeResistance:0.9,
    bounds:{minY:-0, maxY:24},
    lockAxis:true,
    onClick:function() {
      TweenLite.to(".randomWheel", .8, { rotation:'-=288', ease:Expo.easeOut });
      TweenLite.to('.seriesInfo', .2, { autoAlpha:.025, y:10, ease:Expo.easeOut, onComplete:function() {
        editSeriesTT();
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
        editSeriesTT();
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

Draggable.create(".episode-cards ul", {
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
    console.log(episodeDirection);
  },
  onDragEnd:function() {
    TweenLite.to('.episode-cards ul li', .4, { rotationY:0, ease:Expo.easeOut });
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

function locateSeries(wheelLocation) {
  if ( wheelLocation == '-9' ){ seriestitle = 'Ozark'; }
  if ( wheelLocation == '-18' ){ seriestitle = 'The OA'; }
  if ( wheelLocation == '-27' ){ seriestitle = 'Hanna'; }
  if ( wheelLocation == '-36' ){ seriestitle = 'The Handmaid\'s Tale'; }
  if ( wheelLocation == '-45' ){ seriestitle = 'The Magicians'; }
  if ( wheelLocation == '-54' ){ seriestitle = 'Friends'; }
  if ( wheelLocation == '-63' ){ seriestitle = 'The Umbrella Academy'; }
  if ( wheelLocation == '-72' ){ seriestitle = 'Better Call Saul'; }
  if ( wheelLocation == '-81' ){ seriestitle = 'The Walking Dead'; }
  if ( wheelLocation == '-90' ){ seriestitle = 'Chilling Adventures of Sabrina'; }
  if ( wheelLocation == '-99' ){ seriestitle = 'The Crown'; }
  if ( wheelLocation == '-108' ){ seriestitle = 'Arrested Development'; }
  if ( wheelLocation == '-117' ){ seriestitle = 'This is Us'; }
  if ( wheelLocation == '-126' ){ seriestitle = 'True Detective'; }
  if ( wheelLocation == '-135' ){ seriestitle = 'Sex Education'; }
  if ( wheelLocation == '-144' ){ seriestitle = 'Smilf'; }
  if ( wheelLocation == '-153' ){ seriestitle = 'Stranger Things'; }
  if ( wheelLocation == '-162' ){ seriestitle = 'The Good Place'; }
  if ( wheelLocation == '-171' ){ seriestitle = 'Star Trek Discovery'; }
  if ( wheelLocation == '-180' ){ seriestitle = 'Russian Doll'; }
  if ( wheelLocation == '-189' ){ seriestitle = 'The Crown'; }
  if ( wheelLocation == '-198' ){ seriestitle = 'The OA'; }
  if ( wheelLocation == '-207' ){ seriestitle = 'Arrested Development'; }
  if ( wheelLocation == '-216' ){ seriestitle = 'The Handmaid\'s Tale'; }
  if ( wheelLocation == '-225' ){ seriestitle = 'The Magicians'; }
  if ( wheelLocation == '-234' ){ seriestitle = 'Friends'; }
  if ( wheelLocation == '-243' ){ seriestitle = 'The Umbrella Academy'; }
  if ( wheelLocation == '-252' ){ seriestitle = 'Ozark'; }
  if ( wheelLocation == '-261' ){ seriestitle = 'The Good Place'; }
  if ( wheelLocation == '-270' ){ seriestitle = 'Hanna'; }
  if ( wheelLocation == '-279' ){ seriestitle = 'Better Call Saul'; }
  if ( wheelLocation == '-288' ){ seriestitle = 'Game of Thrones'; }
  if ( wheelLocation == '-297' ){ seriestitle = 'The Walking Dead'; }
  if ( wheelLocation == '-306' ){ seriestitle = 'This is Us'; }
  if ( wheelLocation == '-315' ){ seriestitle = 'True Detective'; }
  if ( wheelLocation == '-324' ){ seriestitle = 'Sex Education'; }
  if ( wheelLocation == '-333' ){ seriestitle = 'Smilf'; }
  if ( wheelLocation == '-342' ){ seriestitle = 'Stranger Things'; }
  if ( wheelLocation == '-351' ){ seriestitle = 'Chilling Adventures of Sabrina'; }
}

function editSeriesTT() {
  wheelLocation = endingRotation;
  locateSeries(wheelLocation);
  seriesTitle.innerHTML = seriestitle;
  seriesTitleTop.innerHTML = seriestitle;
  console.log(endingRotation);
}
