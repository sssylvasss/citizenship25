import { useSpring, animated } from "react-spring";

import { useImagesContext } from "./ImagesContext";
import { Task, Container, Image, PlateContainerTitle } from "./Styling";

export const Plates = ({ foodToCook, selectedIndex }) => {
  const { images } = useImagesContext();

  const foodSelected = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
  });

  return (
    <Container>
      <PlateContainerTitle>Food to plate</PlateContainerTitle>
      <Task>
        {foodToCook.map((item, i) => (
          <animated.div
            key={`p${i}`}
            className={`item ${item.selected ? null : "gray"}`}
            style={item.selected && selectedIndex === i ? foodSelected : null}
          >
            <Image src={images[item.name + ".png"]} alt={item.name} />
          </animated.div>
        ))}
      </Task>
    </Container>
  );
};
