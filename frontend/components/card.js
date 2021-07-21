import React from "react";
import Link from "next/link";
import Image from "./image";
import { Box, LinkBox, Badge, Text } from "@chakra-ui/layout";
import styled from "styled-components";
import { background } from "@chakra-ui/styled-system";

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug || "hello"}`} href="/article/[id]">
      <LinkBox>
        <Box
          maxW="5xl"
          borderWidth="2px"
          overflow="hidden"
          borderRadius="2xl"
          cursor="pointer"
          sx={{
            transition: "all .2s ease-in-out",
            boxShadow: "0px 5px 10px #212121",
            _hover: {
              transform: "scale(1.05)",
              boxShadow: "0px 5px 10px #21212150",
            },
          }}
          bgGradient="linear-gradient(
            120deg,
            #212121 60%,
            #21212150 60%,
            #21212150 60%,
            #21212130 70%
          );"
        >
          <Image image={article.image} sx={{ objectFit: "cover" }} />
          <Box p="4"></Box>
          <Box d="flex" alignItems="baseline" m={8}>
            <Badge borderRadius="full" px="2" bg="brand.800" color="brand.400">
              {article.category.name}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {new Date(article.publishedAt).toLocaleDateString()}
            </Box>
          </Box>

          <Box bg="brand.transparent" p={8} m={8}>
            <Box
              mt="2"
              fontWeight="semibold"
              as="h1"
              lineHeight="tight"
              isTruncated
              pb={8}
            >
              <Text fontSize="2xl">{article.title}</Text>
            </Box>
            <Text fontSize="md" noOfLines={10}>
              {article.description}
            </Text>
          </Box>
        </Box>
      </LinkBox>
    </Link>
  );
};

export default Card;
