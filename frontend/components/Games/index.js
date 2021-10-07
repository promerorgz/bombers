import { SimpleGrid, Flex, Box, Grid, GridItem } from "@chakra-ui/layout";
// import Link from "next/link";
import React, { useState } from "react";
import GameCard from "./GameCard";

const Games = ({ games }) => {
  console.log({ games });

  const upcoming = games.filter((game) => !game.finished);

  const played = games.filter((game) => game.finished);
  console.log({ upcoming, played });

  const byDivision = (gameArray) => {
    return gameArray.reduce(
      (acc, upcomingGame) => {
        return {
          ...acc,
          [upcomingGame.division]: [
            ...acc[upcomingGame.division],
            upcomingGame,
          ],
        };
      },
      { d1: [], d3: [] }
    );
  };

  console.log({ byDivision: byDivision(upcoming) });
  console.log({ byDivision: byDivision(played) });

  const gameCards = [
    {
      games: upcoming,
      title: "Next Game",
      link: "/schedule",
      linkDisplay: "Schedule",
    },
    {
      games: played,
      title: "Last Game",
      link: "/schedule",
      linkDisplay: "Results",
    },
  ];

  return (
    <Grid
      h="auto"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
      m={8}
    >
      {gameCards.map((game) => (
        <GridItem colSpan={[1, 2, 2, 1, 1]} rowSpan={[2, 1, 1, 2, 2]}>
          <GameCard {...game} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Games;
