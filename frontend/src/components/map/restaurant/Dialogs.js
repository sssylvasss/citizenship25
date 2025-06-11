import Dialog from "@mui/material/Dialog";

import { SmallDialog } from "../../reusables/SmallDialog";
import { DialogContainer, InfoText } from "./Styling";

export const Dialogs = ({
  openInfo,
  onToggleInfo,
  openConfirmation,
  openFail,
  failText,
}) => {
  return (
    <>
      <SmallDialog
        open={openInfo}
        headerText="Citizen Restaurant"
        onClose={onToggleInfo}
        text="It is very important that you get the energy that you need.
        You need to have a daily average intake of 2000 kcal and
        you keep track on your profile and it will alert you when you are running low.
        And you can not buy food when you have 3000 or more, since the energy needs to be
        divided between all the citizens!"
      />
      <SmallDialog
        open={openConfirmation}
        headerText="Citizen Restaurant"
        text="Purchase successfull! Your energyintake has now increased!"
      />
      <Dialog open={openFail}>
        <DialogContainer>
          <InfoText>Sorry, purchase was denied. {failText}</InfoText>
        </DialogContainer>
      </Dialog>
    </>
  );
};
