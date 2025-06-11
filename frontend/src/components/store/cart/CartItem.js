import { useDispatch } from "react-redux";

import { cart } from "../../../reducers/cart";
import {
  ItemContainer,
  ImageTitleBox,
  ProductImage,
  ProductText,
  ButtonContainer,
  AddDeleteButton,
  QuantityText,
} from "./Styling";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <ImageTitleBox>
        <ProductImage
          src={require(`../assets/${product.image}`)}
          alt={product.title}
        />
        <ProductText>{product.title}</ProductText>
      </ImageTitleBox>
      <ButtonContainer>
        <AddDeleteButton
          type="button"
          onClick={() => dispatch(cart.actions.removeItem(product))}
        >
          -
        </AddDeleteButton>
        <QuantityText>{product.quantity}</QuantityText>
        <AddDeleteButton
          type="button"
          onClick={() => dispatch(cart.actions.addItem(product))}
        >
          +
        </AddDeleteButton>
      </ButtonContainer>
      <ProductText>{product.price * product.quantity}$</ProductText>
    </ItemContainer>
  );
};
