var d = document,
  cg0 = document.getElementById("catGenre").children[0],
  cg1 = document.getElementById("catGenre").children[1],
  cg2 = document.getElementById("catGenre").children[2],
  cg3 = document.getElementById("catGenre").children[3],
  cg4 = document.getElementById("catGenre").children[4],
  cg5 = document.getElementById("catGenre").children[5],
  cf0 = document.getElementById("catFavorites").children[0],
  cf1 = document.getElementById("catFavorites").children[1],
  cf2 = document.getElementById("catFavorites").children[2],
  cf3 = document.getElementById("catFavorites").children[3],
  cf4 = document.getElementById("catFavorites").children[4],
  cf5 = document.getElementById("catFavorites").children[5],
  cr0 = document.getElementById("catRecommended").children[0],
  cr1 = document.getElementById("catRecommended").children[1],
  cr2 = document.getElementById("catRecommended").children[2],
  cr3 = document.getElementById("catRecommended").children[3],
  cr4 = document.getElementById("catRecommended").children[4],
  cr5 = document.getElementById("catRecommended").children[5],

  dt0 = document.getElementById("descriptionTrivia").children[0],
  dt1 = document.getElementById("descriptionTrivia").children[1],
  dt2 = document.getElementById("descriptionTrivia").children[2],

  armClick = 1;

  cg0.style.background = 'linear-gradient(90deg, #FFA4A4 0%, #FF6B6B 100%)';
  cg1.style.background = 'linear-gradient(90deg, #FFCD78 0%, #FF9F43 100%)';
  cg2.style.background = 'linear-gradient(90deg, #7EEFFD 0%, #48DBFB 100%)';
  cg3.style.background = 'linear-gradient(-90deg, #8DCEFF 0%, #54A0FF 100%)';
  cg4.style.background = 'linear-gradient(90deg, #FFA4A4 0%, #FF6B6B 100%)';
  cg5.style.background = 'linear-gradient(90deg, #FFCD78 0%, #FF9F43 100%)';

  cf0.style.background = 'url(img/shows/arrested-development.jpg) no-repeat';
  cf0.style.backgroundSize = 'cover';
  cf1.style.background = 'url(img/shows/breaking-bad.jpg) no-repeat';
  cf1.style.backgroundSize = 'cover';
  cf2.style.background = 'url(img/shows/star-trek-next-generation.jpg) no-repeat';
  cf2.style.backgroundSize = 'cover';
  cf3.style.background = 'url(img/shows/friends.jpg) no-repeat';
  cf3.style.backgroundSize = 'cover';
  cf4.style.background = 'url(img/shows/game-of-thrones4.jpg) no-repeat';
  cf4.style.backgroundSize = 'cover';
  cf5.style.background = 'url(img/shows/the-walking-dead.jpg) no-repeat';
  cf5.style.backgroundSize = 'cover';

  cr0.style.background = 'url(img/shows/true-detective.jpg) no-repeat';
  cr0.style.backgroundSize = 'cover';
  cr1.style.background = 'url(img/shows/ozark.jpg) no-repeat';
  cr1.style.backgroundSize = 'cover';
  cr2.style.background = 'url(img/shows/better-call-saul.jpg) no-repeat';
  cr2.style.backgroundSize = 'cover';
  cr3.style.background = 'url(img/shows/hanna.jpg) no-repeat';
  cr3.style.backgroundSize = 'cover';
  cr4.style.background = 'url(img/shows/the-umbrella-academy.jpg) no-repeat';
  cr4.style.backgroundSize = 'cover';
  cr5.style.background = 'url(img/shows/stranger-things.jpg) no-repeat';
  cr5.style.backgroundSize = 'cover';

TweenLite.set(['.iphone', '#flookyApp'], { left:'50%', xPercent:-50, y:56 });

// var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var sponsorship = url.searchParams.get("sponsorship");
var social = url.searchParams.get("social");
console.log('sponsorship '+sponsorship+ ' and social '+social);

if ( social == 'instagram' ){
  //var body = document.getElementsByTagName("body")[0];
  //body.style.background = '#F3F5FA';
  TweenLite.set(['.iphone', '#flookyApp'], { left:'50%', xPercent:-50, y:72 });
  TweenLite.set('#instagram', { display:'block', left:'50%', xPercent:-50, y:20, transformOrigin:'top center', scale:.9 });
}

if ( social == 'facebook' ){
  var body = document.getElementsByTagName("body")[0];
  //TweenLite.set(body, { bgColor:'#F3F5FA' });
  body.style.background = '#fff';
  TweenLite.set(['.iphone', '#flookyApp'], { left:'50%', xPercent:-50, y:72 });
  TweenLite.set('#facebook', { display:'block', left:'50%', xPercent:-50, y:20, transformOrigin:'top center', scale:1 });
}

if ( social == 'dribbble' ){
  var body = document.getElementsByTagName("body")[0];
  //TweenLite.set(body, { bgColor:'#F3F5FA' });
  body.style.background = '#F3F5FA';
  TweenLite.set(['.iphone', '#flookyApp'], { left:'50%', xPercent:-50, y:72 });
  TweenLite.set('#dribbble', { display:'block', left:'50%', xPercent:-50, y:20, transformOrigin:'top center', scale:1 });
}

function detectmob() {
   if(window.innerWidth <= 500) {
     // return true;
     TweenLite.set('.iphone', { display:'none' });
     TweenLite.set('#flookyApp', { width:'100vw', height:'100vh', top:'0px', borderRadius:'0px', y:0 });
     console.log('mobile detected');
   }
}

detectmob();

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
TweenLite.set(['#wheelArm', '.drag-icon'], { left:'50%', xPercent:-50 });
TweenLite.set('#wheelArmBg', { rotation:45 });
TweenLite.set('#armIcon', { left:'50%', xPercent:-50, top:'50%', yPercent:-50 });
TweenLite.set(['.dislike', '.like', '.heart-top'], { autoAlpha:.7 });
TweenLite.set([dt1, dt2], { autoAlpha:.65 });

// seriesBackground.style.backgroundColor = '#5483E6';
// seriesBackground.style.backgroundImage = 'url(img/shows/russian-doll.jpg) no-repeat';
// seriesBackground.style.backgroundSize = 'cover';
// seriesBackground.style.backgroundPosition = 'center center';
seriesBackground.style.backgroundBlendMode = 'multiply';
series1.style.background = 'url(img/shows/star-trek-discovery.jpg) no-repeat';
series1.style.backgroundSize = 'cover';
series2.style.background = 'url(img/shows/ozark.jpg) no-repeat';
series2.style.backgroundSize = 'cover';
series3.style.background = 'url(img/shows/hanna.jpg) no-repeat';
series3.style.backgroundSize = 'cover';
series4.style.background = 'url(img/shows/the-oa.jpg) no-repeat';
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
if ( sponsorship == 1 || sponsorship == 3 ){
  series33.style.background = 'url(img/shows/game-of-thrones3.jpg) no-repeat';
  series33.style.backgroundSize = 'cover';
}
if ( sponsorship == 2 ){
  series33.style.background = 'url(img/shows/game-of-thrones4.jpg) no-repeat';
  series33.style.backgroundSize = 'cover';
}
if ( sponsorship == 3 ){
  series33.style.background = 'url(img/shows/game-of-thrones-sponsor.jpg) no-repeat';
  series33.style.backgroundSize = 'contain';
  series33.style.backgroundPosition = 'center center';
}
series33.style.backgroundSize = 'cover';
series34.style.background = 'url(img/shows/the-walking-dead.jpg) no-repeat';
series34.style.backgroundSize = 'cover';
series35.style.background = 'url(img/shows/this-is-us.jpg) no-repeat';
series35.style.backgroundSize = 'cover';
series36.style.background = 'url(img/shows/chilling-adventures-of-sabrina.jpg) no-repeat';
series36.style.backgroundSize = 'cover';
series37.style.background = 'url(img/shows/sex-education.jpg) no-repeat';
series37.style.backgroundSize = 'cover';
series38.style.background = 'url(img/shows/smilf.jpg) no-repeat';
series38.style.backgroundSize = 'cover';
series39.style.background = 'url(img/shows/stranger-things.jpg) no-repeat';
series39.style.backgroundSize = 'cover';
series40.style.background = 'url(img/shows/true-detective.jpg) no-repeat';
series40.style.backgroundSize = 'cover';

function setCopy() {
  seriesCategory.innerHTML = 'Trending';
  var seriestitle = 'Star Trek: Discovery';
  seriesTitle.innerHTML = seriestitle;
  seriesTitleTop.innerHTML = seriestitle;
  episodeTitle.innerHTML = 'Chapter Six: An Exorcism in Greendale';
  imdbEpisdeInfo.innerHTML = 'Season 1 Episode 6 &nbsp;&bull;&nbsp;  Oct 26, 2018 &nbsp;&bull;&nbsp; 50min';
  episodeDescription.innerHTML = 'Harvey, Roz, and Sisue explore a mysterious force of evil. Sabrina digs deeper in Ms. Wardwell\'s intentions. Hilda pursues a new beginning.';
  seriesOverview.innerHTML = 'Overview';
  imdbSeriesInfo.innerHTML = 'TV-MA &nbsp;&bull;&nbsp; Action, Adventure, Drama &nbsp;&bull;&nbsp; 2011-2019';
  seriesDescription.innerHTML = 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil returns after being dormant for thousands of years.';
}

function initSeries() {
  if ( sponsorship == 1 || sponsorship == 2 ) {
    initBackButton();
    seriesTransition = new TimelineMax();
    seriesTransition.to(['#seriesCategory', '.seriesInfo'], .3, { autoAlpha:0, ease:Expo.easeInOut })
      .to(['.randomWheel'], .4, { scale:.8, autoAlpha:7, ease:Expo.easeInOut, y:-384, autoAlpha:0 }, 0)
      .set('.episode-area', { display:'block' }, 0)
      .fromTo('.series-info', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeInOut }, 0)
      .fromTo('.seriesArea', .6, { autoAlpha:0, y: 200 }, { autoAlpha:1, y:0, ease:Expo.easeInOut }, .04);
  } else if ( sponsorship == 3 ){
    seriesTransition = new TimelineMax();
    seriesTransition.set('.episode-area', { display:'block' }, 0)
      .to('.randomWheel', .5, { autoAlpha:.2, ease:Expo.easeOut }, 0)
      .fromTo('.series-info', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeInOut }, 0)
      .fromTo('.seriesArea', .6, { autoAlpha:0, y: 200 }, { autoAlpha:1, y:0, ease:Expo.easeInOut }, .04);
  }
}

sponsorSupport = document.getElementById('sponsorSupport');
sponsorSupport.onclick = function() {
  sponsorBackground.style.background = '#000';
  seriesBackground.style.background = '#5483E6 url(img/shows/game-of-thrones-sponsor.jpg) no-repeat top center / cover';
  seriesTransition = new TimelineMax();
  seriesTransition.to('.randomWheel', .5, { autoAlpha:.25, ease:Expo.easeOut })
    .to('#sponsorSupport', .4, { autoAlpha:0, ease:Expo.easeOut }, 0)
    .set('.episode-area', { display:'block' }, 0)
    .fromTo('.series-info', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeInOut }, 0)
    .fromTo('.seriesArea', .6, { autoAlpha:0, y: 200 }, { autoAlpha:1, y:0, ease:Expo.easeInOut }, .04);
}

function initFlookyRandomScreen() {
  seriesTransition.timeScale(2);
  seriesTransition.reverse();


  if ( sponsorship == 3 ){
    sponsorTl.timeScale(1.2);
    sponsorTl.reverse();
    TweenLite.to('.seriesInfo', .4, { autoAlpha:1, ease:Expo.easeOut, delay:1.4 });
  }

  TweenLite.to('#backCTA', .4, { autoAlpha:0, x:-24, ease:Expo.easeInOut });
  TweenLite.to('#seriesSearch', .6, { autoAlpha:1, scale:1, ease:Expo.easeInOut });
}

function addSourceToVideo(element, src, type) {
  var source = document.createElement('source');
  source.src = src;
  source.type = type;
  element.appendChild(source);
}

function setGOT() {
  if ( sponsorship == 1 ){
    seriestitle = 'Game of Thrones';
    seriesTitle.innerHTML = seriestitle;
    seriesTitleTop.innerHTML = seriestitle;
    episodeTitle.innerHTML = 'DragonStone';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  July 16, 2017 &nbsp;&bull;&nbsp; 59min';
    episodeDescription.innerHTML = 'Jon organizes the North\'s defenses. Cersei tries to even the odds. Daenerys comes home. Arya reminds the Freys "the North remembers."" Sam adapts to life in Oldtown. The Night King makes his way south.';
    sponsorBackground = document.getElementById('sponsorBackground');
    sponsorBackground.style.background = 'url(img/background/got.jpg) no-repeat';
    sponsorBackground.style.backgroundSize = 'cover';
    sponsorBackground.style.backgroundPosition = 'center center';
    quickLookBackground.style.background = 'url(img/background/got-flipped.jpg) no-repeat';
    quickLookBackground.style.backgroundSize = 'cover';
    quickLookBackground.style.backgroundPosition = 'center center';
    quickLookBackground.style.borderTop = '2px solid #2E3C4F';
    TweenLite.set('.series-area-bg', { background:'#000', autoAlpha:.25 });
    TweenLite.set(['.decription-copy', '#episodeTitle', '#seriesOverview', '.imdb-info', '.imdb-description'], { color:'#fff' });
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
  if ( sponsorship == 2 ){
    seriestitle = 'Game of Thrones';
    seriesTitle.innerHTML = seriestitle;
    seriesTitleTop.innerHTML = seriestitle;
    episodeTitle.innerHTML = 'DragonStone';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  July 16, 2017 &nbsp;&bull;&nbsp; 59min';
    episodeDescription.innerHTML = 'Jon organizes the North\'s defenses. Cersei tries to even the odds. Daenerys comes home. Arya reminds the Freys "the North remembers."" Sam adapts to life in Oldtown. The Night King makes his way south.';

    var video = document.createElement('video'),
        sponsorBackground = document.getElementById('sponsorBackground');
    sponsorBackground.appendChild(video);
    video.width = 375;
    video.height = 692;
    video.id = 'gotVid';
    addSourceToVideo(video, 'video/flooky-got.mp4', 'video/mp4');
    video.play();
    videoListener();
    // sponsorBackground.style.background = 'url(img/background/got.jpg) no-repeat';
    // sponsorBackground.style.backgroundSize = 'cover';
    // sponsorBackground.style.backgroundPosition = 'center center';
    quickLookBackground.style.background = 'url(img/background/got-flipped.jpg) no-repeat';
    quickLookBackground.style.backgroundSize = 'cover';
    quickLookBackground.style.backgroundPosition = 'center center';
    quickLookBackground.style.borderTop = '2px solid #2E3C4F';
    TweenLite.set('.series-area-bg', { background:'#000', autoAlpha:.4 });
    TweenLite.set(['.decription-copy', '#episodeTitle', '#seriesOverview', '.imdb-info', '.imdb-description'], { color:'#fff' });
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
  if ( sponsorship == 3 ){
    seriestitle = 'Game of Thrones';
    seriesTitle.innerHTML = seriestitle;
    seriesTitleTop.innerHTML = seriestitle;
    episodeTitle.innerHTML = 'DragonStone';
    imdbEpisdeInfo.innerHTML = 'Season 7 Episode 1 &nbsp;&bull;&nbsp;  July 16, 2017 &nbsp;&bull;&nbsp; 59min';
    episodeDescription.innerHTML = 'Jon organizes the North\'s defenses. Cersei tries to even the odds. Daenerys comes home. Arya reminds the Freys "the North remembers."" Sam adapts to life in Oldtown. The Night King makes his way south.';
    sponsorBackground = document.getElementById('sponsorBackground');
    sponsorBackground.style.background = 'url(img/background/got.jpg) no-repeat';
    sponsorBackground.style.backgroundSize = 'cover';
    sponsorBackground.style.backgroundPosition = 'center center';
    TweenLite.set('.series-area-bg', { background:'#000', autoAlpha:.25 });
    TweenLite.set(['.decription-copy', '#episodeTitle', '#seriesOverview', '.imdb-info', '.imdb-description'], { color:'#fff' });
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
}

function videoListener() {
  var myVideo = document.getElementById('gotVid');
  myVideo.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}

function initSponsor() {
  setGOT();
  var wheelColor = '#2BA8ED';
  sponsorTl = new TimelineMax({ delay:.2 });
  if ( sponsorship == 1 || sponsorship == 2 ){
    sponsorTl.fromTo('#sponsorBackground', .8, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut })
      .fromTo('#quickLookBackground', .6, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut }, 0)
      .to('.category-type h3', .6, { color:'#fff', ease:Expo.easeOut }, 0)
      .to('#wheelArmBg', .8, { background:wheelColor, boxShadow:'4px 4px 8px 0 #2E3C4F' }, 0)
      .to(['.dislike', '.like', '.heart-top'], .8, { autoAlpha:.8 }, 0)
      .fromTo('.snow', 1.2, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut, onStart:letitsnow }, .75);
  }
  if ( sponsorship == 3 ){
    var sponsorSupport = document.getElementById('sponsorSupport');
    sponsorSupport.style.background = 'url(img/shows/game-of-thrones-sponsor-support.png) no-repeat';
    sponsorSupport.style.backgroundSize = 'cover';
    sponsorSupport.style.top = '8px';
    sponsorTl.to('.seriesInfo', .01, { autoAlpha:0, ease:Expo.easeOut }, 0)
      .to('#seriesCategory', .4, { autoAlpha:0, ease:Expo.easeInOut }, 0)
      .to(['.dislike', '.like', '.heart-top'], .8, { autoAlpha:.8 }, 1)
      .to('.randomWheel', .4, { scale:2, y:1853, ease:Expo.easeOut, onStart:initBackButton }, .6)
      .fromTo('#sponsorSupport', .4, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut }, .8)
      .set('#sponsorBackground', { display:'block' }, 1.4);
  }
}

function showEpisodeDescription() {
  TweenLite.to([dt1, dt2], .4, { autoAlpha:.65, ease:Expo.easeOut });
  TweenLite.to(dt0, .4, { autoAlpha:1, ease:Expo.easeOut });
  TweenLite.to('.bar-bg .bar', .4, { x:0, width:'138px', ease:Expo.easeOut });
  TweenLite.to('.imdb-ep', .15, { autoAlpha:0, ease:Expo.easeOut, onComplete:function() {
    TweenLite.set('.imdb-ep', { display:'none' });
    TweenLite.set('.imdb-se', { display:'block' });
  } });
  TweenLite.fromTo('.imdb-se', .4, { autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut, delay:.15 });
}

function showSeriesDescription() {
  TweenLite.to([dt0, dt2], .4, { autoAlpha:.65, ease:Expo.easeOut });
  TweenLite.to(dt1, .4, { autoAlpha:1, ease:Expo.easeOut });
  TweenLite.to('.bar-bg .bar', .4, { x:151, width:'124px', ease:Expo.easeOut });
  TweenLite.to('.imdb-se', .15, { autoAlpha:0, ease:Expo.easeOut, onComplete:function() {
    TweenLite.set('.imdb-se', { display:'none' });
  } });
  TweenLite.fromTo('.imdb-ep', .4, { display:'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.easeOut, delay:.15 });
}

function likeSeries() {
  likeTl = new TimelineMax();
  likeTl.to('.dislike', .4, { autoAlpha:0 })
    .to('.like', .2, { transformOrigin:'top right', scaleX:.8, x:5, ease:Expo.easeOut }, 0)
    .to('.like', .4, { scaleX:1, x:-23, ease:Expo.easeOut, autoAlpha:1 }, .2)
    .to('.heart-top', .4, { autoAlpha:1 }, .2)
    .to('.like', .5, { transformOrigin:'center center', rotationY:360, ease:Expo.easeOut }, .55)
    .to('.heart-like-fill', .25, { fill:'#F54242', ease:Expo.easeOut }, .6)
    ;
}

function initBackButton() {
  TweenLite.to('#seriesSearch', .4, { autoAlpha:0, scale:.8, ease:Expo.easeInOut });
  TweenLite.fromTo('#backCTA', .6, { display:'block', autoAlpha:0, x:24 }, { autoAlpha:1, x:0, delay:0, ease:Expo.easeInOut });
}

function consoleScreenDimensions() {
  var x = screen.width;
  var y = screen.height;
  //widthandheight.innerHTML = 'screen with is '+x+' and screen height is '+y;
}

//consoleScreenDimensions();

setCopy();

function letitsnow() {
if ( sponsorship == 1 ){
class Shader {

  constructor( holder, options = {} ) {

    options = Object.assign( {
      antialias: false,
      depthTest: false,
      mousemove: false,
      autosize: true,
      side: 'front',
      vertex: `
        precision highp float;

        attribute vec4 a_position;
        attribute vec4 a_color;

        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mousemove;
        uniform mat4 u_projection;

        varying vec4 v_color;

        void main() {

          gl_Position = u_projection * a_position;
          gl_PointSize = (10.0 / gl_Position.w) * 100.0;

          v_color = a_color;

        }`,
      fragment: `
        precision highp float;

        uniform sampler2D u_texture;
        uniform int u_hasTexture;

        varying vec4 v_color;

        void main() {

          if ( u_hasTexture == 1 ) {

            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

          } else {

            gl_FragColor = v_color;

          }

        }`,
      uniforms: {},
      buffers: {},
      camera: {},
      texture: null,
      onUpdate: ( () => {} ),
      onResize: ( () => {} ),
    }, options )

    const uniforms = Object.assign( {
      time: { type: 'float', value: 0 },
      hasTexture: { type: 'int', value: 0 },
      resolution: { type: 'vec2', value: [ 0, 0 ] },
      mousemove: { type: 'vec2', value: [ 0, 0 ] },
      projection: { type: 'mat4', value: [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] },
    }, options.uniforms )

    const buffers = Object.assign( {
      position: { size: 3, data: [] },
      color: { size: 4, data: [] },
    }, options.buffers )

    const camera = Object.assign( {
      fov: 60,
      near: 1,
      far: 10000,
      aspect: 1,
      z: 100,
      perspective: true,
    }, options.camera )

    const canvas = document.createElement( 'canvas' )
    const gl = canvas.getContext( 'webgl', { antialias: options.antialias } )

    if ( ! gl ) return false

    this.count = 0
    this.gl = gl
    this.canvas = canvas
    this.camera = camera
    this.holder = holder
    this.onUpdate = options.onUpdate
    this.onResize = options.onResize
    this.data = {}

    holder.appendChild( canvas )

    this.createProgram( options.vertex, options.fragment )

    this.createBuffers( buffers )
    this.createUniforms( uniforms )

    this.updateBuffers()
    this.updateUniforms()

    this.createTexture( options.texture )

    gl.enable( gl.BLEND )
    gl.enable( gl.CULL_FACE )
    gl.blendFunc( gl.SRC_ALPHA, gl.ONE )
    gl[ options.depthTest ? 'enable' : 'disable' ]( gl.DEPTH_TEST )

    if ( options.autosize )
      window.addEventListener( 'resize', e => this.resize( e ), false )
    if ( options.mousemove )
      window.addEventListener( 'mousemove', e => this.mousemove( e ), false )

    this.resize()

    this.update = this.update.bind( this )
    this.time = { start: performance.now(), old: performance.now() }
    this.update()

  }

  mousemove( e ) {

    let x = e.pageX / this.width * 2 - 1
    let y = e.pageY / this.height * 2 - 1

    this.uniforms.mousemove = [ x, y ]

  }

  resize( e ) {

    const holder = this.holder
    const canvas = this.canvas
    const gl = this.gl

    const width = 375
    const height = 812
    const aspect = this.aspect = width / height
    const dpi = devicePixelRatio

    canvas.width = /*width * dpi*/ 375
    canvas.height = /*height * dpi*/ 812
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'

    gl.viewport( 0, 0, width * dpi, height * dpi )
    gl.clearColor( 0, 0, 0, 0 )

    this.uniforms.resolution = [ width, height ]
    this.uniforms.projection = this.setProjection( aspect )

    this.onResize( width, height, dpi )

  }

  setProjection( aspect ) {

    const camera = this.camera

    if ( camera.perspective ) {

      camera.aspect = aspect

      const fovRad = camera.fov * ( Math.PI / 180 )
      const f = Math.tan( Math.PI * 0.5 - 0.5 * fovRad )
      const rangeInv = 1.0 / ( camera.near - camera.far )

      const matrix = [
        f / camera.aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (camera.near + camera.far) * rangeInv, -1,
        0, 0, camera.near * camera.far * rangeInv * 2, 0
      ]

      matrix[ 14 ] += camera.z
      matrix[ 15 ] += camera.z

      return matrix

    } else {

      return [
         2 / this.width, 0, 0, 0,
         0, -2 / this.height, 0, 0,
         0, 0, 1, 0,
        -1, 1, 0, 1,
      ]

    }

  }

  createShader( type, source ) {

    const gl = this.gl
    const shader = gl.createShader( type )

    gl.shaderSource( shader, source )
    gl.compileShader( shader )

    if ( gl.getShaderParameter (shader, gl.COMPILE_STATUS ) ) {

      return shader

    } else {

      console.log( gl.getShaderInfoLog( shader ) )
      gl.deleteShader( shader )

    }

  }

  createProgram( vertex, fragment ) {

    const gl = this.gl

    const vertexShader = this.createShader( gl.VERTEX_SHADER, vertex )
    const fragmentShader = this.createShader( gl.FRAGMENT_SHADER, fragment )

    const program = gl.createProgram()

    gl.attachShader( program, vertexShader )
    gl.attachShader( program, fragmentShader )
    gl.linkProgram( program )

    if ( gl.getProgramParameter( program, gl.LINK_STATUS ) ) {

      gl.useProgram( program )
      this.program = program

    } else {

      console.log( gl.getProgramInfoLog( program ) )
      gl.deleteProgram( program )

    }

  }

  createUniforms( data ) {

    const gl = this.gl
    const uniforms = this.data.uniforms = data
    const values = this.uniforms = {}

    Object.keys( uniforms ).forEach( name => {

      const uniform = uniforms[ name ]

      uniform.location = gl.getUniformLocation( this.program, 'u_' + name )

      Object.defineProperty( values, name, {
        set: value => {

          uniforms[ name ].value = value
          this.setUniform( name, value )

        },
        get: () => uniforms[ name ].value
      } )

    } )

  }

  setUniform( name, value ) {

    const gl = this.gl
    const uniform = this.data.uniforms[ name ]

    uniform.value = value

    switch ( uniform.type ) {
      case 'int': {
        gl.uniform1i( uniform.location, value )
        break
      }
      case 'float': {
        gl.uniform1f( uniform.location, value )
        break
      }
      case 'vec2': {
        gl.uniform2f( uniform.location, ...value )
        break
      }
      case 'vec3': {
        gl.uniform3f( uniform.location, ...value )
        break
      }
      case 'vec4': {
        gl.uniform4f( uniform.location, ...value )
        break
      }
      case 'mat2': {
        gl.uniformMatrix2fv( uniform.location, false, value )
        break
      }
      case 'mat3': {
        gl.uniformMatrix3fv( uniform.location, false, value )
        break
      }
      case 'mat4': {
        gl.uniformMatrix4fv( uniform.location, false, value )
        break
      }
    }

    // ivec2       : uniform2i,
    // ivec3       : uniform3i,
    // ivec4       : uniform4i,
    // sampler2D   : uniform1i,
    // samplerCube : uniform1i,
    // bool        : uniform1i,
    // bvec2       : uniform2i,
    // bvec3       : uniform3i,
    // bvec4       : uniform4i,

  }

  updateUniforms() {

    const gl = this.gl
    const uniforms = this.data.uniforms

    Object.keys( uniforms ).forEach( name => {

      const uniform = uniforms[ name ]

      this.uniforms[ name ] = uniform.value

    } )

  }

  createBuffers( data ) {

    const gl = this.gl
    const buffers = this.data.buffers = data
    const values = this.buffers = {}

    Object.keys( buffers ).forEach( name => {

      const buffer = buffers[ name ]

      buffer.buffer = this.createBuffer( 'a_' + name, buffer.size )

      Object.defineProperty( values, name, {
        set: data => {

          buffers[ name ].data = data
          this.setBuffer( name, data )

          if ( name == 'position' )
            this.count = buffers.position.data.length / 3

        },
        get: () => buffers[ name ].data
      } )

    } )

  }

  createBuffer( name, size ) {

    const gl = this.gl
    const program = this.program

    const index = gl.getAttribLocation( program, name )
    const buffer = gl.createBuffer()

    gl.bindBuffer( gl.ARRAY_BUFFER, buffer )
    gl.enableVertexAttribArray( index )
    gl.vertexAttribPointer( index, size, gl.FLOAT, false, 0, 0 )

    return buffer

  }

  setBuffer( name, data ) {

    const gl = this.gl
    const buffers = this.data.buffers

    if ( name == null && ! gl.bindBuffer( gl.ARRAY_BUFFER, null ) ) return

    gl.bindBuffer( gl.ARRAY_BUFFER, buffers[ name ].buffer )
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( data ), gl.STATIC_DRAW )

  }

  updateBuffers() {

    const gl = this.gl
    const buffers = this.buffers

    Object.keys( buffers ).forEach( name =>
      buffers[ name ] = buffer.data
    )

    this.setBuffer( null )

  }

  createTexture( src ) {

    const gl = this.gl
    const texture = gl.createTexture()

    gl.bindTexture( gl.TEXTURE_2D, texture )
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array( [ 0, 0, 0, 0 ] ) )

    this.texture = texture

    if ( src ) {

      this.uniforms.hasTexture = 1
      this.loadTexture( src )

    }

  }

  loadTexture( src ) {

    const gl = this.gl
    const texture = this.texture

    const textureImage = new Image()

    textureImage.onload = () => {

      gl.bindTexture( gl.TEXTURE_2D, texture )

      gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage )

      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR )
      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR )

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

    }

    textureImage.src = src

  }

  update() {

    const gl = this.gl

    const now = performance.now()
    const elapsed = ( now - this.time.start ) / 5000
    const delta = now - this.time.old
    this.time.old = now

    this.uniforms.time = elapsed

    if ( this.count > 0 ) {
      gl.clear( gl.COLORBUFFERBIT )
      gl.drawArrays( gl.POINTS, 0, this.count )
    }

    this.onUpdate( delta )

    requestAnimationFrame( this.update )

  }

}

const snowflake = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTUtMDctMDNUMTg6NTk6MjIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIzMzBlMWI0LTk5ZDctNGU2NS05MGQ2LTNmYjFiYmE2ZTE0MCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjAyNThjNzMxLTQ4ZjQtYTA0MS1hNGFkLTQ4MTA2MTVjY2FlYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjJjY2VkMTUyLTRjNzAtNDFlZC1hMzcyLWRlOWY4NjgyZTcwMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmNjZWQxNTItNGM3MC00MWVkLWEzNzItZGU5Zjg2ODJlNzAxIiBzdEV2dDp3aGVuPSIyMDE1LTA3LTAzVDE4OjU5OjIyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjMzMGUxYjQtOTlkNy00ZTY1LTkwZDYtM2ZiMWJiYTZlMTQwIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz50mbqsAAAToElEQVR4nOVbW49dR5X+VlXtc2v3Ne52N6bTTnAc0u02GRJQwEhYQkJ5QhmhPPOUl0iBB/4AP4JfMA95IEIaJEYiQhlesCZMEE1iGxJHIjK21XbSwX1xd5+zd9Va87BrVdfefWwI4xEaUVJpn7PPPnVqfbUu31pVh0QE/8zN/KMn8I9uTl+8+uqrAAARgYgghIBer4dnnnkGAPDFL34RANDr9eiJJ55AVVUgIhhjwMwYDAbY3Nyk8+fPP/DHdnd3ZWtr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'

// const stats = new Stats()
// document.body.appendChild( stats.domElement )

const holder = document.querySelector( '.snow' )
const count = parseInt( holder.getAttribute( 'count' ) )

let wind = {
  current: 0,
  force: 0.1,
  target: 0.1,
  min: 0.1,
  max: 0.25,
  easing: 0.005
}

const snow = new Shader( holder, {
  depthTest: false,
  texture: snowflake,
  uniforms: {
    worldSize: { type: 'vec3', value: [ 0, 0, 0 ] },
    gravity: { type: 'float', value: 100 },
    wind:{ type: 'float', value: 0 },
  },
  buffers: {
    size: { size: 1, data: [] },
    rotation: { size: 3, data: [] },
    speed: { size: 3, data: [] },
  },
  vertex: `
    precision highp float;

    attribute vec4 a_position;
    attribute vec4 a_color;
    attribute vec3 a_rotation;
    attribute vec3 a_speed;
    attribute float a_size;

    uniform float u_time;
    uniform vec2 u_mousemove;
    uniform vec2 u_resolution;
    uniform mat4 u_projection;
    uniform vec3 u_worldSize;
    uniform float u_gravity;
    uniform float u_wind;

    varying vec4 v_color;
    varying float v_rotation;

    void main() {

      v_color = a_color;
      v_rotation = a_rotation.x + u_time * a_rotation.y;

      vec3 pos = a_position.xyz;

      pos.x = mod(pos.x + u_time + u_wind * a_speed.x, u_worldSize.x * 2.0) - u_worldSize.x;
      pos.y = mod(pos.y - u_time * a_speed.y * u_gravity, u_worldSize.y * 2.0) - u_worldSize.y;

      pos.x += sin(u_time * a_speed.z) * a_rotation.z;
      pos.z += cos(u_time * a_speed.z) * a_rotation.z;

      gl_Position = u_projection * vec4( pos.xyz, a_position.w );
      gl_PointSize = ( a_size / gl_Position.w ) * 100.0;

    }`,
  fragment: `
    precision highp float;

    uniform sampler2D u_texture;

    varying vec4 v_color;
    varying float v_rotation;

    void main() {

      vec2 rotated = vec2(
        cos(v_rotation) * (gl_PointCoord.x - 0.5) + sin(v_rotation) * (gl_PointCoord.y - 0.5) + 0.5,
        cos(v_rotation) * (gl_PointCoord.y - 0.5) - sin(v_rotation) * (gl_PointCoord.x - 0.5) + 0.5
      );

      vec4 snowflake = texture2D(u_texture, rotated);

      gl_FragColor = vec4(snowflake.rgb, snowflake.a * v_color.a);

    }`,
  onResize( w, h, dpi ) {
    const position = [], color = [], size = [], rotation = [], speed = []

    // z in range from -80 to 80, camera distance is 100
    // max height at z of -80 is 110
    const height = 110
    const width = w / h * height
    const depth = 80

    Array.from( { length: w / h * count }, snowflake =>  {

      position.push(
        -width + Math.random() * width * 2,
        -height + Math.random() * height * 2,
        Math.random() * depth * 2
      )

      speed.push(// 0, 0, 0 )
        1 + Math.random(),
        1 + Math.random(),
        Math.random() * 10
      ) // x, y, sinusoid

      rotation.push(
        Math.random() * 2 * Math.PI,
        Math.random() * 20,
        Math.random() * 10
      ) // angle, speed, sinusoid

      color.push(
        1,
        1,
        1,
        0.1 + Math.random() * 0.2
      )

      size.push(
        5 * Math.random() * 5 * ( h * dpi / 1000 )
      )

    } )

    this.uniforms.worldSize = [ width, height, depth ]

    this.buffers.position = position
    this.buffers.color = color
    this.buffers.rotation = rotation
    this.buffers.size = size
    this.buffers.speed = speed
  },
  onUpdate( delta ) {
    wind.force += ( wind.target - wind.force ) * wind.easing
    wind.current += wind.force * ( delta * 0.2 )
    this.uniforms.wind = wind.current

    if ( Math.random() > 0.995 ) {
      wind.target = ( wind.min + Math.random() * ( wind.max - wind.min ) ) * ( Math.random() > 0.5 ? -1 : 1 )
      console.log( wind.target )
    }

    // stats.update()
  },
} )
}}
