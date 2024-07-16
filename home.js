function secret(key) {
  if (key.key === 'Enter') {
    if (document.querySelector('.searchBar').value === 'dvd') {
      document.querySelector('.js-secret-button')
      .innerHTML = '<button class="secret-button">takemetothemagic</button>';
    } else if (document.querySelector('.searchBar').value === '') {
      document.querySelector('.js-secret-button')
      .innerHTML = '';
    } else {
      document.querySelector('.js-secret-button')
      .innerHTML = 'nope!';
    }
      
  };
};