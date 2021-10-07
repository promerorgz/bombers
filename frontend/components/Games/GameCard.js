import React from "react";
import {
  Badge,
  Box,
  Text,
  SimpleGrid,
  Flex,
  Grid,
  Heading,
  Stack,
} from "@chakra-ui/layout";
import { Button, Link, LinkBox } from "@chakra-ui/react";

import Card from "../../common/Card";
import Image from "../../common/Image";
import GameInfo from "./GameInfo";

const GameCard = ({ title, link, linkDisplay, games = [] }) => {
  const styles = {
    backgroundColor: "#121212",
    // backgroundImage:
    //   "linear-gradient(to right bottom, #212121 50%, #7f8c8d 50.3%)",
    boxShadow: "0 1px 4px #151515",
  };
  console.log({ games });

  return (
    <Box position="relative" top="-100px" m="auto">
      <Card styles={styles}>
        <Stack
          direction="row"
          // m="auto"
          p="8"
          justifyContent="space-around"
          alignItems="center"
        >
          {games.map(
            ({
              home,
              away,
              location,
              date,
              home_score,
              away_score,
              division,
            }) => {
              const gameInfo = {
                homeTeam: { ...home, score: home_score },
                awayTeam: { ...away, score: away_score },
                location: location,
                date: date,
              };

              return (
                <GameInfo {...gameInfo} division={division} preview></GameInfo>
              );
            }
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default GameCard;
