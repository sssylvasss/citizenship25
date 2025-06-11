import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Drawer from "@mui/material/Drawer";
import { Tooltip } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import Badge from "@mui/material/Badge";

import { Profile } from "../profile/Profile";
import { MessageBoard } from "../messageboard/MessageBoard";
import {
  HeaderContainer,
  TitleDate,
  NavLink,
  Date,
  IconsContainer,
  MessageIcon,
  ProfilImg,
  Avatar,
  DrawerContainer,
} from "./Styling";

export const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openMessageBoard, setOpenMessageBoard] = useState(false);
  const [alert, setAlert] = useState(false);
  const avatar = useSelector((store) => store.profile.avatar);
  const createdAt = useSelector((store) => store.profile.createdAt);
  const energy = useSelector((store) => store.profile.energy);

  const today = moment().add(60, "year").format("DD/MM YYYY");

  // Variables for calculating average energy
  const createdAtDate = moment(createdAt);
  const today2 = moment().add(1, "day");
  const difference = today2.diff(createdAtDate, "days");
  const averageEnergy = energy / difference;

  // Alert icon in header if low energy
  useEffect(() => {
    if (averageEnergy < 1500) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [averageEnergy]);

  return (
    <HeaderContainer>
      <TitleDate>
        <NavLink to="/">Citizen Ship</NavLink>
        <Date>{today}</Date>
      </TitleDate>
      <IconsContainer>
        <Tooltip title="Citizens Messageboard">
          <MessageIcon tabIndex="0" onClick={() => setOpenMessageBoard(true)}>
            <FaCommentDots />
          </MessageIcon>
        </Tooltip>
        <Tooltip title="My Profile">
          <ProfilImg tabIndex="0" onClick={() => setOpenProfile(true)}>
            <Avatar src={require(`../../assets/${avatar}.png`)} alt="avatar" />
            {alert && <Badge badgeContent={"!"} color="secondary"></Badge>}
          </ProfilImg>
        </Tooltip>
      </IconsContainer>
      <Drawer
        anchor="right"
        open={openMessageBoard}
        onClose={() => setOpenMessageBoard(false)}
      >
        <MessageBoard onClick={() => setOpenMessageBoard(false)} />
      </Drawer>
      <Drawer
        anchor="right"
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      >
        <DrawerContainer>
          <Profile />
        </DrawerContainer>
      </Drawer>
    </HeaderContainer>
  );
};
