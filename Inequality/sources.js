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
      title: 'Economic inequality',
      author: 'Wikipedia',
      publisher: 'Wikipedia',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://en.wikipedia.org/wiki/Economic_inequality'
    },
    {
      title: 'Tax Rates for Individuals',
      author: 'IRD',
      publisher: 'Inland Revenue',
      date: 'April 1 2021',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals'
    },
    {
      title: 'Gini Coefficient by Country',
      author: 'World Population Review',
      publisher: 'World Population Review',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://worldpopulationreview.com/country-rankings/gini-coefficient-by-country'
    },
    {
      title: 'Wealth Tax: Definition, Examples, Pros & Cons',
      author: 'Michelle P. Scott',
      publisher: 'Investopedia',
      date: 'May 19 2024',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.investopedia.com/terms/w/wealth-tax.asp'
    },
    {
      title: 'Capital Gains Tax: What It Is, How It Works, and Current Rates',
      author: 'Jason Fernando',
      publisher: 'Investopedia',
      date: 'June 18 2024',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.investopedia.com/terms/c/capital_gains_tax.asp'
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