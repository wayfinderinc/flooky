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

TweenLite.set('.wheel-top-right', { x:1884 });
TweenLite.set('.wheel-bottom-right', { x:4000, y:1885, transformOrigin:'bottom left', rotation:90 });
TweenLite.set('.wheel-bottom-left', { x:2116, y:4000, transformOrigin:'bottom left', rotation:180 });
TweenLite.set('.wheel-top-left', { x:0, y:2116, transformOrigin:'bottom left', rotation:270 });
TweenLite.set('.seriesCard1', { x:0 });
TweenLite.set('.seriesCard2', { x:286, y:22, rotation:9 });
TweenLite.set('.seriesCard3', { x:565, y:89, rotation:18 });
TweenLite.set('.seriesCard4', { x:830, y:199, rotation:27 });
TweenLite.set('.seriesCard5', { x:1074, y:349, rotation:36 });
TweenLite.set('.seriesCard6', { x:1292, y:535, rotation:45 });
TweenLite.set('.seriesCard7', { x:1478, y:753, rotation:54 });
TweenLite.set('.seriesCard8', { x:1628, y:998, rotation:63 });
TweenLite.set('.seriesCard9', { x:1737, y:1262, rotation:72 });
TweenLite.set('.seriesCard10', { x:1804, y:1541, rotation:81 });
TweenLite.set(wheelArm, { left:'50%', xPercent:-50 });
TweenLite.set(wheelArmBg, { rotation:45 });
TweenLite.set(armIcon, { left:'50%', xPercent:-50, top:'50%', yPercent:-50 });
TweenLite.set(['.dislike', '.like', '.heart-top'], { autoAlpha:.7 });
TweenLite.set([dt1, dt2], { autoAlpha:.65 });

series1.style.background = 'url(img/shows/russian-doll.jpg) no-repeat';
series1.style.backgroundSize = 'cover';
series2.style.background = 'url(img/shows/ozark.jpg) no-repeat';
series2.style.backgroundSize = 'cover';
series3.style.background = 'url(img/shows/the-oa.jpg) no-repeat';
series3.style.backgroundSize = 'cover';
series4.style.background = 'url(img/shows/hanna.jpg) no-repeat';
series4.style.backgroundSize = 'cover';
series5.style.background = 'url(img/shows/the-handmaids-tale.jpg) no-repeat';
series5.style.backgroundSize = 'cover';
series6.style.background = 'url(img/shows/the-magicians.jpg) no-repeat';
series6.style.backgroundSize = 'cover';
series7.style.background = 'url(img/shows/friends.jpg) no-repeat';
series7.style.backgroundSize = 'cover';
series8.style.background = 'url(img/shows/the-umbrella-academy.jpg) no-repeat';
series8.style.backgroundSize = 'cover';
series9.style.background = 'url(img/shows/better-call-saul.jpg) no-repeat';
series9.style.backgroundSize = 'cover';
series10.style.background = 'url(img/shows/the-walking-dead.jpg) no-repeat';
series10.style.backgroundSize = 'cover';
series11.style.background = 'url(img/shows/chilling-adventures-of-sabrina.jpg) no-repeat';
series11.style.backgroundSize = 'cover';
series12.style.background = 'url(img/shows/the-crown.jpg) no-repeat';
series12.style.backgroundSize = 'cover';
series13.style.background = 'url(img/shows/arrested-development.jpg) no-repeat';
series13.style.backgroundSize = 'cover';
series14.style.background = 'url(img/shows/this-is-us.jpg) no-repeat';
series14.style.backgroundSize = 'cover';
series15.style.background = 'url(img/shows/true-detective.jpg) no-repeat';
series15.style.backgroundSize = 'cover';
series16.style.background = 'url(img/shows/sex-education.jpg) no-repeat';
series16.style.backgroundSize = 'cover';
series17.style.background = 'url(img/shows/smilf.jpg) no-repeat';
series17.style.backgroundSize = 'cover';
series18.style.background = 'url(img/shows/stranger-things.jpg) no-repeat';
series18.style.backgroundSize = 'cover';
series19.style.background = 'url(img/shows/the-good-place.jpg) no-repeat';
series19.style.backgroundSize = 'cover';
series20.style.background = 'url(img/shows/star-trek-discovery.jpg) no-repeat';
series20.style.backgroundSize = 'cover';
series21.style.background = 'url(img/shows/russian-doll.jpg) no-repeat';
series21.style.backgroundSize = 'cover';
series22.style.background = 'url(img/shows/the-crown.jpg) no-repeat';
series22.style.backgroundSize = 'cover';
series23.style.background = 'url(img/shows/the-oa.jpg) no-repeat';
series23.style.backgroundSize = 'cover';
series24.style.background = 'url(img/shows/arrested-development.jpg) no-repeat';
series24.style.backgroundSize = 'cover';
series25.style.background = 'url(img/shows/the-handmaids-tale.jpg) no-repeat';
series25.style.backgroundSize = 'cover';
series26.style.background = 'url(img/shows/the-magicians.jpg) no-repeat';
series26.style.backgroundSize = 'cover';
series27.style.background = 'url(img/shows/friends.jpg) no-repeat';
series27.style.backgroundSize = 'cover';
series28.style.background = 'url(img/shows/the-umbrella-academy.jpg) no-repeat';
series28.style.backgroundSize = 'cover';
series29.style.background = 'url(img/shows/ozark.jpg) no-repeat';
series29.style.backgroundSize = 'cover';
series30.style.background = 'url(img/shows/the-good-place.jpg) no-repeat';
series30.style.backgroundSize = 'cover';
series31.style.background = 'url(img/shows/hanna.jpg) no-repeat';
series31.style.backgroundSize = 'cover';
series32.style.background = 'url(img/shows/better-call-saul.jpg) no-repeat';
series32.style.backgroundSize = 'cover';
series33.style.background = 'url(img/shows/game-of-thrones2.jpg) no-repeat';
series33.style.backgroundSize = 'cover';
series34.style.background = 'url(img/shows/the-walking-dead.jpg) no-repeat';
series34.style.backgroundSize = 'cover';
series35.style.background = 'url(img/shows/this-is-us.jpg) no-repeat';
series35.style.backgroundSize = 'cover';
series36.style.background = 'url(img/shows/true-detective.jpg) no-repeat';
series36.style.backgroundSize = 'cover';
series37.style.background = 'url(img/shows/sex-education.jpg) no-repeat';
series37.style.backgroundSize = 'cover';
series38.style.background = 'url(img/shows/smilf.jpg) no-repeat';
series38.style.backgroundSize = 'cover';
series39.style.background = 'url(img/shows/stranger-things.jpg) no-repeat';
series39.style.backgroundSize = 'cover';
series40.style.background = 'url(img/shows/chilling-adventures-of-sabrina.jpg) no-repeat';
series40.style.backgroundSize = 'cover';

function setCopy() {
  seriesCategory.innerHTML = 'Trending';
  var seriestitle = 'Russian Doll';
  seriesTitle.innerHTML = seriestitle;
  seriesTitleTop.innerHTML = seriestitle;
  episodeTitle.innerHTML = 'Chapter Six: An Exorcism in Greendale';
  imdbEpisdeInfo.innerHTML = 'Season 1 Episode 6 &nbsp;&bull;&nbsp;  Oct 26, 2018 &nbsp;&bull;&nbsp; 50min';
  episodeDescription.innerHTML = 'Harvey, Roz, and Sisue explore a mysterious force of evil. Sabrina digs deeper in Ms. Wardwell\'s intentions. Hilda pursues a new beginning.';
}

function initSeries() {
  TweenLite.to(['#seriesCategory', '.seriesInfo'], .3, { autoAlpha:0, ease:Expo.easeInOut });
  TweenLite.to(['.randomWheel'], .4, { scale:.8, autoAlpha:7, ease:Expo.easeInOut, y:-384, autoAlpha:.0 });
  TweenLite.set('.episode-area', { display:'block' });
  TweenLite.fromTo('.series-info', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeInOut  });
  TweenLite.fromTo('.seriesArea', .6, { autoAlpha:0, y: 200 }, { autoAlpha:1, y:0, ease:Expo.easeInOut, delay:.04 });
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

//consoleScreenDimensions();

setCopy();
