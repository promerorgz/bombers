import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  Flex,
  Button,
  Center,
  Text,
  Square,
  Box,
  LinkBox,
  ListItem,
  List,
} from "@chakra-ui/react";

const Nav = ({ categories }) => {
  const navs = [
    {
      name: "news",
      id: "news",
      slug: "news",
    },
    {
      name: "schedule",
      id: "schedule",
      slug: "schedule",
    },
    {
      name: "team",
      id: "team",
      slug: "team",
    },
    {
      name: "contact",
      id: "contact",
      slug: "contact",
    },
    {
      name: "more",
      id: "more",
      slug: "more",
    },
    {
      name: "shop",
      id: "shop",
      slug: "shop",
    },
  ];
  const DiagonalBg = styled(Flex)`
    background-color: #212121;
    background-image: -webkit-linear-gradient(150deg, #e2e2e2 35%, #212121 35%);
  `;
  return (
    <div>
      <nav>
        <DiagonalBg style={{ minHeight: 100 }}>
          <Center w="100px">
            <img src="/images/logo.png" alt="Your Name" />
          </Center>
          <Center flex="1" size="150px" justifyContent="space-evenly">
            {navs.map((nav) => (
              <LinkBox color="brand.400">
                <Link href={`/${nav.name}`}>
                  <a>{nav.name.toUpperCase()}</a>
                </Link>
              </LinkBox>
            ))}
          </Center>
          <Box flex="1"></Box>
        </DiagonalBg>
      </nav>
    </div>
  );
};

export default Nav;
