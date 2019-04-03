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
