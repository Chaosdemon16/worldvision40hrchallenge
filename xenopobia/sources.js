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
      title: 'Xenophobia',
      author: 'Rebecca M. Kulik',
      publisher: 'Britanicca',
      date: 'June 13 2024',
      dateAccessed: 'July 19, 2024',
      URL: 'https://www.britannica.com/science/xenophobia'
    },
    {
      title: 'Xenophobia: A Pervasive Crisis in Post-Apartheid South Africa',
      author: 'Bastien Dratwa',
      publisher: 'Georgetown Journal of International Affairs',
      date: 'May 26 2024',
      dateAccessed: 'July 19, 2024',
      URL: 'https://gjia.georgetown.edu/2024/05/26/xenophobia-a-pervasive-crisis-in-post-apartheid-south-africa'
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