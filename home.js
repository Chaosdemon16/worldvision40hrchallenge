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