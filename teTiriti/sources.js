const sources = [
    //Standard:
    //{
    //     title: 'Title',
    //     author: 'wikipedia',
    //     publisher: 'wikipeia',
    //     date: '2/3/24',
    //     dateAccessed: '4/5/24',
    //     URL: 'en.wikipedia.org'
    // }
    {
      title: 'Te Tiriti o Waitangi - the Treaty of Waitangi',
      author: 'Claudia Orange',
      publisher: 'Te Ara - the Encyclopedia of New Zealand',
      date: 'March 28, 2023',
      dateAccessed: 'July 18, 2023',
      URL: 'http://www.TeAra.govt.nz/en/te-tiriti-o-waitangi-the-treaty-of-waitangi/print'
    },
    {
      title: 'Differences between the texts',
      author: 'Manatū Taonga — Ministry for Culture and Heritage',
      publisher: 'NZ history',
      date: 'October 5, 2021',
      dateAccessed: 'July 18, 2024',
      URL: 'https://nzhistory.govt.nz/politics/treaty/read-the-Treaty/differences-between-the-texts'
    },
    {
      title: 'About the Waitangi Tribunal',
      author: 'Waitangi Tribunal',
      publisher: 'Waitangi Tribunal',
      date: 'September 4, 2023',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.waitangitribunal.govt.nz/about/'
    },
]
  function display(info){
    let sourceList = ""
    for(let i = 0; i < info.length; i++){
      sourceList += "<a href=" + info[i].URL + "><div class='source'><h3 class='sourceTitle'>" + info[i].author + " " + info[i].date + ": " + info[i].title + " - " + info[i].publisher + "</h3> <p class='sourceInfo'>" + info[i].URL + " [Accessed " + info[i].dateAccessed + "]</p></div>"
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
    document.location.href = "/Magic/index.html";
  }