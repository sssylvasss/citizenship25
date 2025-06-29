import { CARD_STATUS, DECK_SIZE, API_PAGE_SIZE, BASE_URL } from "./constants";

const fetchImages = async (page) => {
  const apiUrl = `${BASE_URL}/v2/list?page=${page}&limit=100`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
};

export const getRandomUrls = async () => {
  const urlArray = [];
  const imageSet = new Set();
  const page = Math.floor(Math.random() * API_PAGE_SIZE);
  const urlList = await fetchImages(page);

  // Randomly pick cards from list from API
  while (imageSet.size < Math.ceil(DECK_SIZE / 2)) {
    const i = Math.floor(Math.random() * urlList.length);

    if (urlList[i]) {
      const { id } = urlList[i];

      if (!imageSet.has(id)) {
        imageSet.add(id);
        urlArray.push({
          id,
          url: `${BASE_URL}/id/${id}/150/200`,
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
