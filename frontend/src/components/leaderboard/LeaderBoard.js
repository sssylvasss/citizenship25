import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Dialog from "@mui/material/Dialog";

import { CitizenStats } from "./citizenprofile/CitizenStats";
import { CitizenInvestments } from "./citizenprofile/CitizenInvestments";
import { CitizenItems } from "./citizenprofile/CitizenItems";
import { getCitizenUrl } from "../../reusables/urls";
import defaultAvatar from "../../assets/man.png";
import {
  TableContainer,
  TableHead,
  TableTitle,
  TableTitleLinks,
  CitizenDaysLink,
  CitizensList,
  CitizenContainer,
  CitizenAvatar,
  Citizen,
  CitizenRank,
  CitizenDays,
  Badges,
  Icon,
  ProfileContainer,
  Items,
  ContainerTitle,
  InvestItemsContainer,
} from "./Styling";

/* eslint-disable indent */
export const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [sort, setSort] = useState("highestRanking");
  const [query, setQuery] = useState("");
  const [prof, setProf] = useState(null);
  const [currency, setCurrency] = useState({ price_usd: 0 });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const user = useSelector((store) => store.profile.username);

  //Fetch all citizens
  const fetchCitizens = useCallback(() => {
    fetch(getCitizenUrl(`citizens?sort=${sort}`))
      .then((res) => res.json())
      .then((data) => {
        if (data.allCitizens) {
          setLeaderBoard(data.allCitizens);
          setError(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching citizens:", err);
        setError("Failed to load citizens");
      });
  }, [sort]);

  useEffect(() => {
    fetchCitizens();
  }, [fetchCitizens]);

  // Fetch for profile on citizen
  useEffect(() => {
    if (!query) return;

    fetch(getCitizenUrl(`citizen/${query}`))
      .then((res) => {
        if (!res.ok) {
          throw new Error("Citizen not found");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProf(data);
          setError(null);
        } else {
          setProf(null);
          setError("Citizen not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching citizen profile:", err);
        setProf(null);
        setError("Failed to load citizen profile");
      });
  }, [query]);

  // Fetch one currency
  useEffect(() => {
    fetchCoin();
  }, []);

  const fetchCoin = () => {
    fetch("https://api.coinlore.net/api/ticker/?id=32360")
      .then((res) => res.json())
      .then((json) => {
        setCurrency(json[0] || { price_usd: 0 });
      })
      .catch((err) => {
        console.error("Error fetching currency:", err);
        setCurrency({ price_usd: 0 });
      });
  };

  // Toggle Profile Dialog
  const onToggle = () => {
    setOpen(!open);
  };

  // Helper function to safely format numbers
  const safeToFixed = (num, decimals = 2) => {
    if (num === null || num === undefined) return "0";
    return Number(num).toFixed(decimals);
  };

  // Helper function to calculate investment values
  const calculateInvestmentValues = (
    investments = 0,
    quantity = 0,
    price = 0,
  ) => {
    const totalMarketValue = quantity * price;
    const difference = totalMarketValue - investments;
    const percentDifference =
      investments > 0 ? (difference / investments) * 100 : 0;

    return {
      totalMarketValue: safeToFixed(totalMarketValue),
      difference: safeToFixed(difference),
      percentDifference: safeToFixed(percentDifference),
    };
  };

  // Helper function to safely get avatar image
  const getAvatarImage = (avatarName) => {
    try {
      return require(`../../assets/${avatarName || "man"}.png`);
    } catch (e) {
      return defaultAvatar;
    }
  };

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
        {error}
      </div>
    );
  }

  return (
    <>
      <TableHead>
        <TableTitle>Citizen</TableTitle>
        <TableTitleLinks onClick={() => setSort("highestRanking")}>
          Ranking
        </TableTitleLinks>
        <CitizenDaysLink onClick={() => setSort("senior")}>
          Days On Ship
        </CitizenDaysLink>
        <TableTitleLinks onClick={() => setSort("mostBadges")}>
          Badges
        </TableTitleLinks>
        <TableTitleLinks onClick={() => setSort("richest")}>
          Coins
        </TableTitleLinks>
      </TableHead>
      <TableContainer>
        {leaderBoard.map((citizen) => (
          <CitizensList key={citizen._id}>
            <CitizenContainer>
              {user === citizen.username && <Icon />}
              <CitizenAvatar
                src={getAvatarImage(citizen.avatar)}
                alt={citizen.username}
              />
              <Citizen
                onClick={() => {
                  setQuery(citizen.username);
                  setOpen(true);
                }}
                $isCurrentUser={user === citizen.username}
              >
                {citizen.username}
              </Citizen>
            </CitizenContainer>
            <CitizenRank>{safeToFixed(citizen.ranking, 1)}/100</CitizenRank>
            <CitizenDays>{moment(citizen.createdAt).toNow(true)}</CitizenDays>
            <Badges>{citizen.badges || 0}</Badges>
            <Badges>{safeToFixed(citizen.coins)}</Badges>
          </CitizensList>
        ))}
      </TableContainer>
      {prof && (
        <Dialog open={open} onClose={onToggle}>
          <ProfileContainer>
            <CitizenStats
              username={prof.username}
              ranking={safeToFixed(prof.ranking, 1)}
              avatar={getAvatarImage(prof.avatar)}
              badges={prof.badges || 0}
              coins={safeToFixed(prof.coins)}
              created={moment(prof.createdAt).toNow(true)}
            />
            <InvestItemsContainer>
              {prof.investments !== undefined && (
                <CitizenInvestments
                  username={prof.username}
                  investments={safeToFixed(prof.investments)}
                  investmentQuantity={prof.investmentQuantity || 0}
                  {...calculateInvestmentValues(
                    prof.investments,
                    prof.investmentQuantity,
                    currency.price_usd,
                  )}
                  percent={
                    (prof.investmentQuantity || 0) * (currency.price_usd || 0) -
                      (prof.investments || 0) <
                    0
                  }
                />
              )}
              <Items>
                <ContainerTitle>{prof.username} items</ContainerTitle>
                {prof.items &&
                  Object.keys(prof.items).map((key) => (
                    <CitizenItems key={key} item={prof.items[key]} />
                  ))}
              </Items>
            </InvestItemsContainer>
          </ProfileContainer>
        </Dialog>
      )}
    </>
  );
};
