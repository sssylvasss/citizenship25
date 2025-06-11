import Dialog from "@mui/material/Dialog";

import { SmallDialog } from "../reusables/SmallDialog";
import {
  DialogContainer,
  InvestTitle,
  InvestInfo,
  PriceInfo,
  QuestionText,
  InvestButton,
  InputContainer,
  InputAmount,
  Available,
  TotalValueText,
  CloseIcon,
} from "./Styling";

export const ExchangeDialog = ({
  openExchange,
  onCloseExchange,
  rate,
  onChange,
  totalExchange,
  onClick,
  value,
  open,
  badges,
  onClose,
  confirmText,
  buttonText,
}) => {
  return (
    <>
      <Dialog open={openExchange} onClose={onCloseExchange}>
        <DialogContainer>
          <InvestTitle>
            Space Exchange
            <CloseIcon onClick={onCloseExchange} />
          </InvestTitle>
          <InvestInfo>
            Here you can exchange badges for coins! It&apos;s important to have some
            money since you need it to invest, buy things in the store etc.
          </InvestInfo>
          <PriceInfo>Exchange rate: 5 badges = {rate} $</PriceInfo>
          <QuestionText>How many badges do you want to exchange?</QuestionText>
          <InputContainer>
            <InputAmount
              type="text"
              placeholder="Enter quantity"
              onChange={onChange}
              value={value}
            ></InputAmount>
            <TotalValueText> = {totalExchange} $</TotalValueText>
          </InputContainer>
          <Available>Your available badges: {badges} </Available>
          <InvestButton onClick={onClick}>Make Exchange</InvestButton>
        </DialogContainer>
        <SmallDialog
          open={open}
          onClose={onClose}
          headerText="Citizen Exchange"
          text={confirmText}
          onClick={onClose}
          confirmButton={buttonText}
        />
      </Dialog>
    </>
  );
};
