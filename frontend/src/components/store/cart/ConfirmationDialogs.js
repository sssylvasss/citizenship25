import { SmallDialog } from "../../reusables/SmallDialog";

export const ConfirmationDialogs = ({
  openConfirmation,
  onConfirmed,
  openFail,
  onFail,
}) => {
  return (
    <>
      <SmallDialog
        open={openConfirmation}
        headerText="Citizen Shop"
        onClose={onConfirmed}
        text="Purchase successful! You can now see your items on your profile."
        confirmButton="Thanks"
        onClick={onConfirmed}
      />
      <SmallDialog
        open={openFail}
        headerText="Citizen Shop"
        onClose={onFail}
        text="Your purchase was denied due to insufficient funds."
        confirmButton="Keep on making money!"
        onClick={onFail}
      />
    </>
  );
};
