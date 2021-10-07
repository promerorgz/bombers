import { Box, Center, Flex, LinkBox } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const DiagonalBg = styled(Flex)`
  background-color: #212121;
  background-image: linear-gradient(135deg, #212121 50% #e2e2e2 50%);
`;

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

  return (
    <nav>
      <DiagonalBg style={{ minHeight: 100 }}>
        <Center w="100px">
          <LinkBox>
            <Link href={`/`}>
              <a>
                <img src="/images/logo.png" alt="Your Name" />
              </a>
            </Link>
          </LinkBox>
        </Center>
        <Center flex="1" size="150px" justifyContent="space-evenly">
          {navs.map((nav) => (
            <LinkBox
              className="link"
              key={nav.id}
              color="brand.light"
              _hover={{
                borderBottom: "3px solid white",
              }}
            >
              <Link href={`/${nav.name}`}>
                <a style={{ color: "brand.light", textDecoration: "none" }}>
                  {nav.name.toUpperCase()}
                </a>
              </Link>
            </LinkBox>
          ))}
        </Center>
        <Flex p="4" flex="1" justifyContent="flex-end" alignItems="flex-end">
          powered by Elephantech
        </Flex>
      </DiagonalBg>
    </nav>
  );
};

export default Nav;
