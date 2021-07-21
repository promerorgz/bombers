import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {
  Box,
  Stack,
  Flex,
  Grid,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Diagonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5%;
  min-height: 50vh;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: linear-gradient(
      120deg,
      #000 40%,
      #00000060 40%,
      #00000060 50%,
      transparent 50%,
      transparent
    ),
    url("images/mcb-hero.jpeg");
`;
const Hero = () => {
  const variant = useBreakpointValue({ base: "solid", md: "outline" });
  return (
    <Diagonal>
      <Flex
        direction="row"
        align="center"
        justify="space-evenly"
        width={{
          sm: "100%",
          md: "50%",
        }}
      >
        <Box>
          <Text
            fontSize="5xl"
            casing="uppercase"
            as="b"
            color="white"
            style={{ marginBottom: 12 }}
          >
            St Louis Bombers Rugby Club
          </Text>
          <Stack spacing={4} direction="row" align="center" marginTop={8}>
            <Button
              colorScheme="gray"
              size="md"
              color="brand.800"
              variant={variant}
            >
              Shop
            </Button>
            <Button
              colorScheme="gray"
              size="md"
              color="brand.800"
              variant={variant}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Box flex="1" color="transparent">
        o
      </Box>
    </Diagonal>
  );
};

export default Hero;
