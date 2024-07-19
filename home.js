const causes = [
  //Standard:
  //{
  //   name: "cause",
  //   img: "cause.png",
  //   src: "cause/cause.html",
  // },
  {
    name: "Trans-affirming Healthcare",
    img: "images/transFlag.png",
    src: "transHealth/index.html"
  },
  {
    name: "Nuclear Free Aotearoa",
    img: "NuclearFree.jpg",
    src: "nuclearFree/index.html"
  },
  {
    name: "Te Tiriti o Waitangi",
    img: "images/teTiriti.jpg",
    src: "teTiriti/index.html"
  },
  {
    name: "Inequality",
    img: "images/inequality.jpg",
    src: "inequality/index.html"
  },
  {
    name: "Gender Pay Gap",
    img: "images/payGap.jpg",
    src: "payGap/index.html"
  },
  {
    name: "Lithium Mining",
    img: "images/lithiumMining.jpg",
    src: "lithiumMining/index.html"
  },
  {
    name: "Free Speech",
    img: "images/freeSpeech.jpg",
    src: "freeSpeech/index.html"
  },
  {
    name: "Climate Change",
    img: "images/climateChange.jpg",
    src: "climateChange/index.html"
  },
  {
    name: "Public Transport",
    img: "images/publicTransport.jpg",
    src: "publictransport/index.html"
  },
  {
    name: "Universal Healthcare",
    img: "images/universalHealth.jpg",
    src: "universalHealth/index.html"
  },
  {
    name: "HIV & AIDS",
    img: "images/AIDS.jpg", 
    src: "AIDS/index.html"
  },
  {
    name: "Xenophobia",
    img: "images/xenophobia.jpg", 
    src: "xenophobia/index.html"
  },
  {
    name: "Cults",
    img: "images/cult.jpg", 
    src: "cults/index.html"
  },
  {
    name: "Human Rights",
    img: "images/humanRights.webp", 
    src: "humanRights/index.html"
  },
  {
    name: "Homophobia & LGBTQ+ Violence",
    img: "images/homophobia.png", 
    src: "homophobia/index.html"
  },
  {
    name: "Sexism",
    img: "images/sexism.png", 
    src: "sexism/index.html"
  },
  {
    name: "NZ conservation efforts",
    img: "images/conservation.jpg", 
    src: "conservation/index.html"
  },
]
function display(info){
  let cardsGrid = ""
  for(let i = 0; i < info.length; i++){
    cardsGrid += "<a href='" + info[i].src + "'><div class='card'><img class='cardPhoto' src='" + info[i].img + "'><b><p class='causeTitle'>" + info[i].name + "</p></b></div></a>"
  }
  document.querySelector("#cardsGrid").innerHTML = cardsGrid
}
display(causes)

function search(key) {
  if (key.key === 'Enter') {
    if (document.querySelector('.searchBar').value === 'dvd') {
      document.querySelector('.js-secret-button')
        .innerHTML = '<button class="secret-button" onclick="magic()">takemetothemagic</button>';
    } else {
      let clean = document.querySelector('.searchBar').value.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
      let results = causes.filter(e => e.name.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().includes(clean))
      display(results)
    }

  };
};

function magic() {
  document.location.href = "Magic/index.html";
}