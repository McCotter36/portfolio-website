// declare variables containing language data

var english = [
  //english
  [
    "Hello!",
    "My name is",
    "I am a web developer and designer.",
    ["britain", "usa", "australia"]
  ]
];

var nonEnglish = [
  //spanish languageIndex 0
  [
    "¡Hola!",
    "Me llamo",
    "Soy desarrollador web y diseñador.",
    [ 
      "argentina",
      "bolivia",
      "chile",
      "colombia",
      "costa_rica",
      "cuba",
      "dominican_republic",
      "ecuador",
      "el_salvador",
      "equatorial_guinea",
      "guatemala",
      "honduras",
      "mexico",
      "nicaragua",
      "panama",
      "paraguay",
      "peru",
      "spain",
      "uruguay",
      "venezuela"
    ]
  ],
  //french languageIndex 1
  [
    "Bonjour!",
    "Mon nom est",
    "Je suis développeur et designer web.",
    [
      "canada", 
      "france", 
      "benin", 
      "burkina", 
      "congo", 
      "drc", 
      "ivoire", 
      "gabon"
    ]
  ],
  //italian languageIndex 2
  [
    "Bongiorno!",
    "Mi chiamo",
    "Sono uno sviluppatore web e designer.",
    [
      "italy"
    ]
  ],
  //Japanese languageIndex 3
  [
    "こんにちは",
    "私の名前は",
    "私はウェブサイトの開発者およびデザイナーです。",
    [
      "honshu", 
      "hokkaido",
      "kyushu",
      "shikoku"
    ]
  ],
  //chinese languageIndex 4
  [
    "你好",
    "我的名字是",
    "我是网站开发人员和设计师。",
    [
      "china",
      "malaysia",
      "taiwan",
    ]
  ]
];

// === finds random language within array ===

function randomizeLanguage(array) {
  var languageIndex = Math.floor(Math.random() * array.length);
  return languageIndex;
};

// === finds random country within random language array ===

function randomizeCountry(array) {
  languageIndex = randomizeLanguage(array);
  randomCountryIndex = Math.floor(Math.random() * array[languageIndex][3].length);
  var countryId = array[languageIndex][3][randomCountryIndex];
  return countryId;
};

// === finds random language and country within the array

function chooseLanguageAndCountry(array) {
  var languageIndex = Math.floor(Math.random() * array.length);
  var randomCountryIndex = Math.floor(Math.random() * array[languageIndex][3].length);
  var countryId = array[languageIndex][3][randomCountryIndex];
  return [languageIndex, countryId];
};

// === changes language of message ===

function changeLanguage(array) {
  var greeting = document.getElementById("greeting");
  var intro =  document.getElementById("intro");
  var bio = document.getElementById("bio");
  languageIndex = chooseLanguageAndCountry(array)[0];
    greeting.innerHTML = array[languageIndex][0];
    intro.innerHTML = array[languageIndex][1];
    bio.innerHTML = array[languageIndex][2];
};

// === highlights country from language array ===

function highlightCountry(array) {
    var countryId = chooseLanguageAndCountry(array)[1];
    document.getElementById(countryId).style.fill = "black";
    document.getElementById(countryId).style.opacity = "50%";
      setTimeout (function() {
        document.getElementById(countryId).style.fill = "black";
        document.getElementById(countryId).style.opacity = "100%";
    }, 4500);
};

// === changes language and highlights country === 

function changeLanguageAndHighlightCountry(array) {
  // languageIndex will be randomizedArray[0]
  // countryId will be randomizedArray[1]
  var randomizedArray = chooseLanguageAndCountry(array);
  var greeting = document.getElementById("greeting");
  var intro =  document.getElementById("intro");
  var bio = document.getElementById("bio");
  languageIndex = randomizedArray[0];
    greeting.innerHTML = array[languageIndex][0];
    intro.innerHTML = array[languageIndex][1];
    bio.innerHTML = array[languageIndex][2];
    var countryId = randomizedArray[1];
    // console.log(languageIndex, countryId)
    document.getElementById(countryId).setAttribute("style", "fill: black" )
    // document.getElementById(countryId).style.fill = "blue";
    // document.getElementById(countryId).style.opacity = "50%";
      setTimeout (function() {
        document.getElementById(countryId).setAttribute("style", "fill: #FF8C00")
        // document.getElementById(countryId).style.fill = "black";
        // document.getElementById(countryId).style.opacity = "100%";

    }, 4500);
};

// window.addEventListener('load', function() {
//   changeLanguageAndHighlightCountry(nonEnglish);
// })


// === alternate english and random nonEnglish ===

function cycleLanguages(array1, array2, timer) {
  setInterval(function(){
    setTimeout(function(){    
      changeLanguageAndHighlightCountry(array1);
      setTimeout(function(){
        changeLanguageAndHighlightCountry(array2);
      }, timer);
    }, timer);
  }, timer * 2);
}

//wait for page to load to run
window.addEventListener('load', function(){
cycleLanguages(english, nonEnglish, 5000);
});


