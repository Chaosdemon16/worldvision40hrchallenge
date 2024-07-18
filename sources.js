const sources = [{
  title:'Womens Refuge',
  author:'The People At Womens Refuge',
  publisher:'N/A',
  date:'',
  dateAccessed:'18/7/24',
  URL:'https://awrefuge.org.nz/',
  citedIn:'Domestic violence'
},{
  title:'new-zealand-family-violence-and-economic-harm-statistics',
  author: 'Good Shepherd',
  publisher:'The Good Shepherd',
  date:'',
  dateAccessed:'18/7/24',
  URL:'https://goodshepherd.org.nz/economic-harm/new-zealand-family-violence-and-economic-harm-statistics',
  citedIn:'Domestic violence'
}, {
  title:'Human Trafficking FAQs',
  author:'United Nations Office on Drugs and Crime',
  publisher:'United Nations',
  date:'2020-2024',
  dateAccessed:'18/7/24',
  URL:'https://www.unodc.org/unodc/en/human-trafficking/faqs.html',
  citedIn: 'Human Trafficking'
},{
  title:'Statistics about Human Trafficking',
  author:'Disrupt Human Trafficking',
  publisher:'DHT',
  date:'',
  dateAccessed:'18/7/24',
  URL: 'https://www.disrupthumantrafficking.com/statistics',
  citedIn: 'Human Trafficking'
}
    //Standard:
    //{
    //     title: 'Title',
    //     author: 'wikipedia',
    //     publisher: 'wikipeia',
    //     date: '2/3/24',
    //     dateAccessed: '4/5/24',
    //     URL: 'en.wikipedia.org'
    //     citedIn: 'Human Trafficking'
    // }
]
  function display(info){
    let sourceList = ""
    for(let i = 0; i < info.length; i++){
      sourceList += "<a href=" + info[i].URL + "><div class='source'><h3 class='sourceTitle'>" + info[i].author + " " + info[i].date + ": " + info[i].title + " - " + info[i].publisher + "</h3> <p class='sourceInfo'>" + info[i].URL + " [Accessed " + info[i].dateAccessed + " for the " + info[i].citedIn + " site]</p></div>"
    }
    document.querySelector("#sourceList").innerHTML = sourceList
  }
  display(sources)
  
  function search(key) {
    if (key.key === 'Enter') {
      if (document.querySelector('.searchBar').value === 'dvd') {
        document.querySelector('.js-secret-button')
          .innerHTML = '<button class="secret-button" onclick="magic()">takemetothemagic</button>';
      } else {
        let clean = document.querySelector('.searchBar').value.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
        let results = sources.filter(e => e.publisher.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().includes(clean))
        display(results)
      }
  
    };
  };
  function magic() {
    document.location.href = "Magic/index.html";
  }
