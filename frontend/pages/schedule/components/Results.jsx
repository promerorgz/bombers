import React from "react";
import GameInfo from "../../../components/Games/GameInfo";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, Divider, Stack, Text } from "@chakra-ui/layout";

const Results = ({ results }) => {
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate =
      date.toLocaleDateString("en-US", { weekday: "short" }) +
      " " +
      date.toLocaleDateString("en-US", { month: "short" }) +
      " " +
      date.toLocaleDateString("en-US", { day: "2-digit" });
    const time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return {
      date: formattedDate,
      time,
    };
  };
  const isBombers = (team) => {
    return team === "Bombers";
  };

  const isHome = (homeTeam) => {
    return isBombers(homeTeam);
  };

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {results.map((game) => {
        const gameInfoProps = {
          homeTeam: {
            name: game.home.team_name,
            logo: game.home.logo,
            score: game.home_score,
          },
          awayTeam: {
            name: game.away.team_name,
            logo: game.away.logo,
            score: game.away_score,
          },
          location: game.location,
        };

        return (
          <AccordionItem key={game.slug}>
            <AccordionButton
              _expanded={{ bg: "brand.800", color: "brand.400" }}
            >
              <Stack
                direction="row"
                textAlign="left"
                alignItems="center"
                justifyContent="start"
                w="100%"
              >
                <Box>
                  <Text
                    m={0}
                    fontWeight="light"
                    fontSize="md"
                    textTransform="uppercase"
                    fontFamily="body"
                  >
                    {formatDateTime(game.date).date}
                  </Text>
                </Box>
                <Divider size="xl" orientation="vertical"></Divider>
                <Box flex="1">
                  <Text
                    m={0}
                    fontWeight="bold"
                    fontSize="lg"
                    textTransform="uppercase"
                    fontFamily="body"
                  >
                    {isHome(game?.home?.team_name)
                      ? `${game?.home?.team_name} - ${game?.away?.team_name}`
                      : `${game?.away?.team_name} @ ${game?.home?.team_name}`}
                  </Text>
                </Box>
                <AccordionIcon />
              </Stack>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <GameInfo {...gameInfoProps} />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Results;
