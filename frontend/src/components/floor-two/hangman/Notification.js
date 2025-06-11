import React from "react";

import { NotificationsContainer } from "./Styling";

export const Notification = ({ visible }) => {
  return (
    <NotificationsContainer visible={visible}>
      You have already entered this letter
    </NotificationsContainer>
  );
};
