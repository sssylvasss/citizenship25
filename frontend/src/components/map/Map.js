import { Classroom } from "./Classroom";
import { Bedroom } from "./Bedroom";
import { Restaurant } from "./restaurant/Restaurant";
import { Quiz } from "./Quiz";
import { Store } from "./Store";
import { Info } from "./info/Info";
import { Gym } from "./Gym";
import { Memory } from "./Memory";
import { ProteinFarm } from "./ProteinFarm";
import { SpaceBall } from "./SpaceBall";
import { GridContainer } from "./Styling";

export const Map = () => {
  return (
    <GridContainer>
      <Classroom />
      <Bedroom />
      <Restaurant />
      <Quiz />
      <Store />
      <Info />
      <Gym />
      <Memory />
      <ProteinFarm />
      <SpaceBall />
    </GridContainer>
  );
};
