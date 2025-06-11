import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Products } from "../components/store/products/AllProducts";
import { Header } from "../components/header/Header";
import { Camera } from "../components/header/Camera";

import { StoreContainer, StoreTitle } from "../components/store/Styling";

export const Store = () => {
  const accessToken = useSelector((store) => store.profile.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  return (
    <Main>
      <Header />
      <Camera />
      <Wrapper>
        <Products />
      </Wrapper>
    </Main>
  );
};
