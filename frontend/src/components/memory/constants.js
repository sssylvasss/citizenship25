export const DECK_SIZE = 12;
export const API_PAGE_SIZE = 10;

export const BASE_URL = "https://api.nasa.gov/planetary/apod";
export const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY || "DEMO_KEY";

export const GAME_STATUS = {
  IN_PROGRESS: "IN_PROGRESS",
  CREATING: "CREATING",
  CHECKING: "CHECKING",
  RESETTING: "RESETTING",
  FINISHED: "FINISHED",
};

export const CARD_STATUS = {
  SELECTED: "SELECTED",
  MATCHED: "MATCHED",
  HIDDEN: "HIDDEN",
};
