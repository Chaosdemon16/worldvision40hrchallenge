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
      title: 'What is gender-affirming care? Your questions answered',
      author: 'Patrick Boyle',
      publisher: 'AAMC News',
      date: 'April 12, 2022',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.aamc.org/news/what-gender-affirming-care-your-questions-answered'
    },
    {
      title: 'Gender incongruence and transgender health in the ICD',
      author: 'World Health Organization',
      publisher: 'World Helath Organization',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: `https://www.who.int/standards/classifications/frequently-asked-questions/gender-incongruence-and-transgender-health-in-the-icd#:~:text=What%20is%20gender%2Daffirmative%20health,affirm%20an%20individual's%20gender%20identity`
    },
    {
      title: 'Mental Health of Trans and Gender Diverse People in Aotearoa/New Zealand: A Review of the Social Determinants of Inequities',
      author: 'Kyle K.H. Tan, Johanna M. Schmidt, Sonja J. Ellis, Jaimie F. Veale',
      publisher: 'University of Waikato',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: `https://www.psychology.org.nz/application/files/7315/8024/4972/TAN_ET_AL_64-72.pdf`
    },
    {
      title: 'Hormone therapy linked to lower suicide risk for trans youths, study finds',
      author: 'Jo Yurcaba',
      publisher: 'NBC News',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: `https://www.nbcnews.com/nbc-out/out-health-and-wellness/hormone-therapy-linked-lower-suicide-risk-trans-youths-study-finds-rcna8617`
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