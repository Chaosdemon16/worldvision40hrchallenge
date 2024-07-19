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
},{
  title:'Report: Black people are still killed by police at a higher rate than other groups',
  author:'Curtis Bunn',
  publisher:'NBC News',
  date:'March 4, 2022',
  dateAccessed:'18/7/24',
  URL:'https://www.nbcnews.com/news/nbcblk/report-black-people-are-still-killed-police-higher-rate-groups-rcna17169',
  citedIn:'Black Lives Matter'
},{
  title:'Black Lives Matter Movement',
  author:'The Editors of Encyclopedia Britanica',
  publisher:'Britanica',
  date:'July 17, 2024',
  dateAccessed:'18/7/24',
  URL:'https://www.britannica.com/topic/Black-Lives-Matter',
  citedIn:'Black Lives Matter'
},{
  title:'Ways to reduce your waste',
  author:'Auckland council',
  publisher:'Auckland council',
  date:'2024',
  dateAccessed:'18/7/24',
  URL:'https://www.aucklandcouncil.govt.nz/rubbish-recycling/ways-reduce-waste/Pages/default.aspx',
  citedIn:'Waste reduction'
},{
  title:'Concerning aspects around deep sea mining',
  author:'Te Ipukarea Society',
  publisher:'Green Piece',
  date:'30/5/23',
  dateAccessed:'18/7/24',
  URL:'https://www.greenpeace.org/aotearoa/story/concerning-aspects-around-deep-sea-mining/?gad_source=1&gclid=Cj0KCQjw-uK0BhC0ARIsANQtgGNE9zqKo8rXXTwuSh2kYkDSgFs42ro58bsp7iWzSUlrilUH1RFqFcMaAjNEEALw_wcB',
  citedIn: 'Deep sea mining'
},{
  title:'Your Privacy Rights',
  author:'Privacy Commissioner',
  publisher:'The Office of the Privacy Commissioner',
  date:'',
  dateAccessed:'18/7/24',
  URL:'https://www.privacy.org.nz/your-rights/your-privacy-rights/',
  citedIn:'Data Privacy'
},{
  title:'The Rise in Sea Level',
  author:'Wikipedia',
  publisher:'Wikimedia',
  date:'',
  dateAccessed:'19/7/24',
  URL:'https://en.wikipedia.org/wiki/Sea_level_rise',
  citedIn:'The Rise in Sea Level'
},{
  title:'8 THINGS TO KNOW ABOUT PALM OIL',
  author:'WWF',
  publisher:'World Wide Fund for Animals',
  date:'',
  dateAccessed:'19/7/24',
  URL:'https://www.wwf.org.uk/updates/8-things-know-about-palm-oil',
  citedIn:'Palm Oil',
},{
  title:'Caring for Your Mental Health',
  author:'nimh',
  publisher:'National Institute of Mental Health',
  date:'Febuary 2024',
  dateAccessed:'19/7/24',
  URL:'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health',
  citedIn:'Mental Health',
},{
  title:'Get Help Now',
  author:'Depression.org',
  publisher:'Depression.org',
  date:'',
  dateAccessed:'19/7/24',
  URL:'https://www.depression.org.nz/get-help',
  citedIn:'Mental Health',
},{
  title:'What is wellbeing',
  author:'Mental health foundation',
  publisher:'Mental Health foundation',
  date:'',
  dateAccessed:'19/7/24',
  URL:'https://mentalhealth.org.nz/what-is-wellbeing',
  citedIn:'Mental health',
},{
  title:'What is Artificial Intelligence(AI)?',
  author:'Google Cloud',
  publisher:'Google',
  date:'',
  dateAccessed:'19/7/24',
  URL:'https://cloud.google.com/learn/what-is-artificial-intelligence',
  citedIn:'Artificial Intelligence',
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
