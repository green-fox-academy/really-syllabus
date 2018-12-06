const fetchStarWarsFilm = (filmNumber) => {
  return fetch(`https://swapi.co/api/films/${filmNumber}/`)
    .then(res => res.json())
}

const romanize = (num) => {
  if (isNaN(num))
    return NaN;
  var digits = String(+num).split(""),
    key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    roman = "",
    i = 3;
  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

const createMagic = (starWars) => {
  const crawl = document.querySelector('.crawl');
  const titleClass = document.createElement('div');
  titleClass.setAttribute('class', 'title');
  
  const titleP = document.createElement('p');
  const romanNumber = romanize(starWars.episode_id);
  titleP.textContent = `Episode ${romanNumber}`;
  titleClass.appendChild(titleP);
  
  const titleH = document.createElement('h1');
  titleH.textContent = starWars.title;
  titleClass.appendChild(titleH);
  
  const openingP = document.createElement('p');
  openingP.innerHTML = starWars.opening_crawl;
  
  crawl.appendChild(titleClass);
  crawl.appendChild(openingP);
}

fetchStarWarsFilm(2).then(res => createMagic(res));

