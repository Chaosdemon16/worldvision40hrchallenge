const sources = [
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
    {
      title: 'Nuclear Free New Zealand',
      author: '(Manatū Taonga — Ministry for Culture and Heritage',
      publisher: 'NZhistory',
      date: '20 September 2022',
      dateAccessed: 'July 18, 2024',
      URL: 'https://nzhistory.govt.nz/politics/nuclear-free-new-zealand/nuclear-free-zone'
    },
    {
      title: 'The Bombing of the Rainbow Warrior',
      author: 'Greenpeace',
      publisher: 'Greenpeace',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.greenpeace.org/aotearoa/about/our-history/bombing-of-the-rainbow-warrior/'
    },
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
    {
      title: 'Economic inequality',
      author: 'Wikipedia',
      publisher: 'Wikipedia',
      date: '',
      dateAccessed: 'July 18, 2023',
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
    {
      title: 'The Gender Pay Gap',
      author: '',
      publisher: 'The Ministry for Women',
      date: '2023',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.women.govt.nz/women-and-work/gender-pay-gap'
    },
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
    {
      title: 'Freedom of Expression',
      author: 'Amnesty International',
      publisher: 'Amnesty International',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.amnesty.org/en/what-we-do/freedom-of-expression/'
    },
    {
      title: 'How the American Public Understands—and Misunderstands—Free Speech',
      author: 'Timothy Rich, Ian Milden',
      publisher: 'Fair Observer',
      date: 'August 16 2022',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.fairobserver.com/world-news/us-news/how-the-american-public-understands-and-misunderstands-free-speech/'
    },
    {
      title: 'What is Climate Change?',
      author: 'United Nations',
      publisher: 'United Nations',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.un.org/en/climatechange/what-is-climate-change'
    },
    {
      title: 'Bus & Train Fares',
      author: 'AT',
      publisher: 'Auckland Transport',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://at.govt.nz/bus-train-ferry/fares-discounts/bus-train-fares'
    },
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
    {
      title: 'What are HIV and AIDS',
      author: 'HIV.gov',
      publisher: 'HIV.gov',
      date: 'January 13 2023',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.hiv.gov/hiv-basics/overview/about-hiv-and-aids/what-are-hiv-and-aids'
    },
    {
      title: 'Global HIV & AIDS statistics - Fact Sheet',
      author: 'UNAIDS',
      publisher: 'UNAIDS',
      date: '',
      dateAccessed: 'July 18, 2024',
      URL: 'https://www.unaids.org/en/resources/fact-sheet'
    },
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
    {
      title: 'Cult',
      author: 'Rebecca M. Kulik',
      publisher: 'Britannica',
      date: '',
      dateAccessed: 'July 19, 2024',
      URL: 'https://www.britannica.com/topic/cult'
    },
    {
      title: 'What Makes a Cult a Cult?',
      author: 'Zoë Heller',
      publisher: 'The New Yorker',
      date: 'July 5 2021',
      dateAccessed: 'July 19, 2024',
      URL: 'https://www.newyorker.com/magazine/2021/07/12/what-makes-a-cult-a-cult'
    },
    {
      title: `Heaven's gate (religious group)`,
      author: 'Wikipedia',
      publisher: 'Wikipedia',
      date: '',
      dateAccessed: 'July 19, 2024',
      URL: 'https://en.wikipedia.org/wiki/Heaven%27s_Gate_(religious_group)'
    },
    {
      title: 'Human Rights',
      author: 'United Nations',
      publisher: 'United Nations',
      date: '',
      dateAccessed: 'July 19, 2024',
      URL: 'https://www.un.org/en/global-issues/human-rights'
    },
    {
      title: 'Universal Declaration of Human Rights',
      author: 'United Nations',
      publisher: 'United Nations',
      date: '',
      dateAccessed: 'July 19, 2024',
      URL: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights'
    },
    {
      title: 'Homophobia',
      author: 'Eric Anderson',
      publisher: 'Brittanica',
      date: 'July 18 2024',
      dateAccessed: 'July 19, 2024',
      URL: 'https://www.britannica.com/topic/homophobia'
    },
    {
      title: 'Violence against LGBT people',
      author: 'Wikipedia',
      publisher: 'Wikipedia',
      date: '',
      dateAccessed: 'July 19, 2024',
      URL: 'https://en.wikipedia.org/wiki/Violence_against_LGBT_people'
    },
    {
      title: 'Sexism',
      author: 'Gina Masequesmay',
      publisher: 'Britannica',
      date: 'July 18 2024',
      dateAccessed: 'July 19, 2024',
      URL: 'https://www.britannica.com/topic/sexism'
    },
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