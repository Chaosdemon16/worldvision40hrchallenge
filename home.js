function secret(key) {
  if (key.key === 'Enter') {
    if (document.querySelector('.searchBar').value === 'dvd') {
      document.querySelector('.js-secret-button')
        .innerHTML = '<button class="secret-button" onclick="magic()">takemetothemagic</button>';
    } else if (document.querySelector('.searchBar').value === '') {
      document.querySelector('.js-secret-button')
        .innerHTML = '';
    }

  };
};
const causeNames = ['womens rights', 'cyber awareness', 'cyber security'];
const finalCauses = ['Womens Rights', 'Cyber Awareness', 'Cyber Security'];
const imgNames = ['womensrights', 'cyberawareness', 'cybersecurity'];

function search(key) {
  if (key.key === 'Enter') {
    console.log(key.key);
    let results = 0;
    let loops = 0;
    let html = '';
    let input = document.querySelector('.searchBar').value;
    input = input.toLowerCase();
    causeNames.forEach((value, index) => {
      if (input === causeNames[loops]) {
        console.log(input);
        results = results + 1;
        html = `<div class="card">
        <img class="cardPhoto" src="Photos/${imgNames[loops]}.png">
        <h1 class="causeTitle">${finalCauses[loops]}</h1>
      </div>`;
      }
      loops++;
    });

    if (html === '') {
      document.querySelector('.main').innerHTML = `<h1>Sorry, ${input} isn't one of our 40 causes yet</h1>`;
    } else {
      document.querySelector('.cardsGrid').innerHTML = html;
    }
  }
}

function magic() {
  document.location.href = "Magic/index.html";
}