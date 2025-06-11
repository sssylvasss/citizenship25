import Dialog from "@mui/material/Dialog";

import { SmallDialog } from "../reusables/SmallDialog";
import {
  DialogContainer,
  InvestTitle,
  InvestInfo,
  PriceInfo,
  QuestionText,
  InvestButton,
  Available,
  InputContainer,
  InputAmount,
  TotalValueText,
  CloseIcon,
} from "./Styling";

export const InvestDialog = ({
  open,
  onClose,
  rate,
  onChange,
  spaceValue,
  coins,
  onClick,
  value,
  openConfirm,
  onCloseConfirm,
  confirmText,
  buttonText,
}) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContainer>
          <InvestTitle>
            Space Invest
            <CloseIcon onClick={onClose} />
          </InvestTitle>
          <InvestInfo>
            You have an opportunity as a citizen to invest your money in SPACE$.
            This means that when you invest the money you lock the money in on
            the current price of the SPACE$. Since it is very volatile (price
            moves up and down) you can both make money but also lose money! So
            it is important to be careful and never invest more than you are
            ready to lose! So let&apos;s say if you invest 100$ when the price is 8$
            and then it goes up to 10$, your money will be worth 125$! If you
            see that the price has decreased a lot the last week it could be a
            good opportunity to invest.
          </InvestInfo>
          <PriceInfo>Current price: {rate} $</PriceInfo>
          <QuestionText>How much do you want to invest?</QuestionText>
          <InputContainer>
            <InputAmount
              type="text"
              placeholder="Enter quantity"
              onChange={onChange}
              value={value}
            ></InputAmount>
            <TotalValueText> = {spaceValue} $</TotalValueText>
          </InputContainer>
          <Available>Your available coins: {coins}$</Available>
          <InvestButton onClick={onClick}>Make Investment</InvestButton>
        </DialogContainer>
      </Dialog>
      <SmallDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        headerText="Citizen Invest"
        text={confirmText}
        onClick={onCloseConfirm}
        confirmButton={buttonText}
      />
    </>
  );
};
