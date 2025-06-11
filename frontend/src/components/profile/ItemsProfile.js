import { ItemsContainer, ItemsTitle } from "./Styling";

export const ItemsProfile = ({ item }) => {
  return (
    <ItemsContainer>
      <ItemsTitle>{item.title} </ItemsTitle>
    </ItemsContainer>
  );
};
