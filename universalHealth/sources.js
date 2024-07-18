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
      title: 'Universal Health Coverage',
      author: 'World Health Organization',
      publisher: 'World Health Organization',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.who.int/health-topics/universal-health-coverage'
    },
    {
      title: 'Internation Healthcare Profiles: United States',
      author: 'Roosa Tikkanen, Robin Osborn, Elias Mossialos, Ana Djordjevic, George A. Wharton',
      publisher: 'The Commonwealth Fund',
      date: 'June 5 2020',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.commonwealthfund.org/international-health-policy-center/countries/united-states'
    },
    {
      title: 'Why are Americans Paying More for Healthcare?',
      author: 'Peter G. Peterson foundation',
      publisher: 'Peter G. Peterson foundation',
      date: 'January 3 2024',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.pgpf.org/blog/2024/01/why-are-americans-paying-more-for-healthcare'
    },
    {
      title: 'New Zealand Healthcare System',
      author: 'International Citizens Insurance',
      publisher: 'International Citizens Insurance',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.internationalinsurance.com/health/systems/new-zealand.php'
    },
    {
      title: 'How Does U.S. Life Expectancy Compare to Other Countries?',
      author: 'Shameek Rakshit, Mathew McGough, and Kurtika Amin',
      publisher: 'Health System Tracker',
      date: 'Januare 30 2024',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.healthsystemtracker.org/chart-collection/u-s-life-expectancy-compare-countries/'
    },
    {
      title: 'What Are the Countries With the Best Healthcare?',
      author: 'International Citizens Insurance',
      publisher: 'International Citizens Insurance',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.internationalinsurance.com/health/systems/'
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