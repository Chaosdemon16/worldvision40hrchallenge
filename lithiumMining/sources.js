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
      title: 'Is Lithium Mining Bad for the Environment?',
      author: 'Inemesit Ukpanah',
      publisher: 'Greenmatch',
      date: 'July 15 2024',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.greenmatch.co.uk/blog/is-lithium-mining-bad-for-the-environment'
    },
    {
      title: 'The Environmental Impacts of Lithium and Cobalt Mining',
      author: 'March Zheng',
      publisher: 'Earth.org',
      date: 'March 31 2023',
      dateAccessed: 'July 18, 2024',
      URL: 'https://earth.org/lithium-and-cobalt-mining/'
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