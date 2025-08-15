import { CARD_STATUS, DECK_SIZE, API_PAGE_SIZE, BASE_URL, NASA_API_KEY } from "./constants";

const fetchImages = async (page) => {
  // NASA APOD API - fetch multiple days of space images
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 100); // Get images from last 100 days

  const apiUrl = `${BASE_URL}?api_key=${NASA_API_KEY}&start_date=${startDate.toISOString().split('T')[0]}&end_date=${today.toISOString().split('T')[0]}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return Array.isArray(data) ? data : [data];
};

export const getRandomUrls = async () => {
  const urlArray = [];
  const imageSet = new Set();
  const urlList = await fetchImages();

  // Randomly pick space images from NASA API
  while (imageSet.size < Math.ceil(DECK_SIZE / 2)) {
    const i = Math.floor(Math.random() * urlList.length);

    if (urlList[i] && urlList[i].url) {
      const { date, title } = urlList[i];

      if (!imageSet.has(date)) {
        imageSet.add(date);
        urlArray.push({
          id: date,
          url: urlList[i].url,
          title: title,
          status: CARD_STATUS.HIDDEN,
        });
      }
    }
  }
  return urlArray;
};

// Create new game
export const getImages = async () => {
  const urls = await getRandomUrls();
  const deck = urls.concat(urls);

  while (deck.length > DECK_SIZE) {
    deck.pop();
  }

  // Shuffle cards
  const shuffledDeck = deck.sort(() => 0.5 - Math.random());
  return new Promise((resolve, reject) => {
    resolve(shuffledDeck);
  });
};
