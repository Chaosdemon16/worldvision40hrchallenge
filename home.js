const causes = [{name: 'Domestic violence', img:'Images/domvio.png', src:'Domestic violence/index.html'},{name: 'Human Trafficking', img:'Images/HT.png', src:'Human Trafficking/index.html'},{name:'Predator Free NZ', img:'Images/PFNZ.png', src:'PredatorFreeNz/index.html'}
  //Standard:
  //{
  //   name: "cause",
  //   img: "cause.png",
  //   src: "cause/cause.html",
  // },
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
