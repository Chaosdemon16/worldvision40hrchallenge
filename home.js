//Standard:
//{
//   name: "cause",
//   img: "cause.png",
//   src: "cause/cause.html",
// },
const causes = [
  {
    name: "A1",
    img: "images/test.png",
    src: "cause/index.html",
  },
  {
    name: "A2",
    img: "images/test.png",
    src: "cause/index.html",
  },
  {
    name: "A3",
    img: "images/test.png",
    src: "cause/index.html",
  },
  {
    name: "B1",
    img: "images/test.png",
    src: "cause/index.html",
  },
  {
    name: "B2",
    img: "images/test.png",
    src: "cause/index.html",
  },
  {
    name: "B3",
    img: "images/test.png",
    src: "cause/index.html",
  }
]

console.log(causes.length - 1)
function display(info){
  let cardsGrid = ""
  for(let i = 0; i < info.length; i++){
    cardsGrid += "<div class='card'><img class='cardPhoto' src='" + info[i].img + "'><b><p class='causeTitle'>" + info[i].name + "</p></b></div>"
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
      console.log(results)
      display(results)
    }

  };
};
const causeNames = ["womens rights", "cyber awareness", "cyber security"];
const finalCauses = ["Women's Rights", "Cyber Awareness", "Cyber Security"];
const imgNames = ["womensrights", "cyberawareness", "cybersecurity"];

function magic() {
  document.location.href = "Magic/index.html";
}