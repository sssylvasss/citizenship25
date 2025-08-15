/* eslint-disable indent, new-cap */
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../utils/utils";

const initialState = localStorage.getItem("profile")
  ? {
      username: JSON.parse(localStorage.getItem("profile")).username,
      email: JSON.parse(localStorage.getItem("profile")).email,
      accessToken: JSON.parse(localStorage.getItem("profile")).accessToken,
      userId: JSON.parse(localStorage.getItem("profile")).userId,
      badges: JSON.parse(localStorage.getItem("profile")).badges,
      ranking: JSON.parse(localStorage.getItem("profile")).ranking,
      coins: JSON.parse(localStorage.getItem("profile")).coins,
      createdAt: JSON.parse(localStorage.getItem("profile")).createdAt,
      avatar: JSON.parse(localStorage.getItem("profile")).avatar,
      items: JSON.parse(localStorage.getItem("profile")).items,
      investments: JSON.parse(localStorage.getItem("profile")).investments,
      investmentQuantity: JSON.parse(localStorage.getItem("profile"))
        .investmentQuantity,
      energy: JSON.parse(localStorage.getItem("profile")).energy,
      highscoreSpaceball: JSON.parse(localStorage.getItem("profile"))
        .highscoreSpaceball,
      highscoreFish: JSON.parse(localStorage.getItem("profile")).highscoreFish,
      highscoreMath: JSON.parse(localStorage.getItem("profile")).highscoreMath,
      errorMessage: null,
    }
  : {
      username: null,
      email: null,
      accessToken: null,
      userId: null,
      badges: null,
      ranking: null,
      coins: null,
      createdAt: null,
      avatar: "man",
      items: [],
      investments: null,
      investmentQuantity: null,
      energy: null,
      highscoreSpaceball: null,
      highscoreFish: null,
      highscoreMath: null,
      errorMessage: null,
    };

export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setEmail: (store, action) => {
      store.email = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setBadges: (store, action) => {
      store.badges = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setRanking: (store, action) => {
      store.ranking = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setCoins: (store, action) => {
      store.coins = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setCreatedAt: (store, action) => {
      store.createdAt = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setAvatar: (store, action) => {
      store.avatar = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setItems: (store, action) => {
      store.items = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setInvestments: (store, action) => {
      store.investmentQuantity = action.payload.quantity;
      store.investments = action.payload.amount;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setInvestmentQuantity: (store, action) => {
      store.investmentQuantity = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setEnergy: (store, action) => {
      store.energy = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setHighscoreSpaceball: (store, action) => {
      store.highscoreSpaceball = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setHighscoreFish: (store, action) => {
      store.highscoreFish = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setHighscoreMath: (store, action) => {
      store.highscoreMath = action.payload;
      localStorage.setItem('profile', JSON.stringify(store));
    },
    setErrorMessage: (store, action) => {
      store.errorMessage = action.payload;
    },
    setLogOut: () => {
      localStorage.clear();
      return {
        username: null,
        email: null,
        accessToken: null,
        userId: null,
        badges: null,
        ranking: null,
        coins: null,
        items: [],
        avatar: "man",
        createdAt: null,
        investments: null,
        investmentQuantity: null,
        energy: null,
        highscoreSpaceball: null,
        highscoreFish: null,
        highscoreMath: null,
        errorMessage: null,
      };
    },
  },
});

// Thunk for updating avatar
export const updateAvatar = (avatar) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ avatar }),
    };
    fetch(API_URL(`citizen/${getState().profile.userId}/avatar`), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(profile.actions.setAvatar(data.avatar));
      })
      .catch();
  };
};

// Thunk for updating badges
export const updateBadges = (badges) => {
  return (dispatch, getState) => {
    const state = getState();
    const token = state.profile.accessToken;
    const userId = state.profile.userId;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({ badges }),
    };
    fetch(API_URL(`citizen/${userId}/badges`), options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(profile.actions.setBadges(data.badges));
      })
      .catch((error) => {
        console.error("Failed to update badges:", error);
      });
  };
};

// Thunk for updating ranking
export const updateRanking = (ranking) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ ranking }),
    };
    fetch(API_URL(`citizen/${getState().profile.userId}/ranking`), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(profile.actions.setRanking(data.ranking));
      })
      .catch();
  };
};

// Thunk for updating coins
export const updateCoins = (coins) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ coins }),
    };
    fetch(API_URL(`citizen/${getState().profile.userId}/coins`), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(profile.actions.setCoins(data.coins));
      })
      .catch();
  };
};

// Thunk for updating bought items
export const updateItems = (items) => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ items }),
    };
    fetch(API_URL(`citizen/${getState().profile.userId}/items`), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(profile.actions.setItems(data.items));
      })
      .catch();
  };
};

// Thunk for updating investments
export const updateInvestments = (investmentQuantity, investments) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ investmentQuantity, investments }),
    };
    fetch(API_URL(`citizen/${getState().profile.userId}/investments`), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          profile.actions.setInvestmentQuantity(data.investmentQuantity),
        );
        dispatch(profile.actions.setInvestments(data.investments));
      })
      .catch();
  };
};

// Thunk for updating energy intake
export const updateEnergy = (energy) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ energy }),
    };
    fetch(API_URL(`citizen/${getState().profile.userId}/energy`), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(profile.actions.setEnergy(data.energy));
      })
      .catch();
  };
};

// Thunk for updating highscore spaceball
export const updateHighscoreSpaceball = (highscoreSpaceball) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ highscoreSpaceball }),
    };
    fetch(
      API_URL(`citizen/${getState().profile.userId}/highscoreSpaceball`),
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          profile.actions.setHighscoreSpaceball(data.highscoreSpaceball),
        );
      })
      .catch();
  };
};

// Thunk for updating highscore fish farm
export const updateHighscoreFish = (highscoreFish) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ highscoreFish }),
    };
    fetch(
      API_URL(`citizen/${getState().profile.userId}/highscoreFish`),
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(profile.actions.setHighscoreFish(data.highscoreFish));
      })
      .catch();
  };
};

// Thunk for updating highscore math
export const updateHighscoreMath = (highscoreMath) => {
  return (dispatch, getState) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().profile.accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ highscoreMath }),
    };
    fetch(
      API_URL(`citizen/${getState().profile.userId}/highscoreMath`),
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(profile.actions.setHighscoreMath(data.highscoreMath));
      })
      .catch();
  };
};
