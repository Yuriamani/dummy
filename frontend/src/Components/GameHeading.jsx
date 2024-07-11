import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading marginY={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
