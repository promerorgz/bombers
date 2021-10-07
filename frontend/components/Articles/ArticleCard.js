import React from "react";
import Link from "next/link";
import Image from "../../common/Image";
import { Box, LinkBox, Badge, Text, Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { background } from "@chakra-ui/styled-system";
import ReactMarkdown from "react-markdown";

const ArticleCard = ({ article, styles, highlight }) => {
  return (
    <Link
      as={`/article/${article.slug || "hello"}`}
      href="/article/[id]"
      m="16"
    >
      <LinkBox>
        <Box
          maxW="5xl"
          borderWidth="1px"
          overflow="hidden"
          borderRadius="8px"
          borderColor="brand.400"
          cursor="pointer"
          bg="white"
          sx={{
            ...styles,
            transition: "all .2s ease-in-out",
            _hover: {
              transform: "scale(1.05)",
              boxShadow: "0px 5px 10px #21212150",
            },
          }}
          bgGradient="gradient.main"
        >
          <Image image={article.image} sx={{ objectFit: "cover" }} />
          <Box
            p="4"
            ml="4"
            mr="8"
            mb="8"
            w="100px"
            borderBottom="3px solid #212121"
          ></Box>
          <Box d="flex" alignItems="baseline" m={4}>
            <Badge
              borderRadius="full"
              px="2"
              bg="brand.800"
              color="brand.400"
              mr="4"
            >
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

          <Flex
            alignItens="start"
            direction="column"
            justifyContent="flex-start"
            m={4}
          >
            <Box fontWeight="semibold" lineHeight="tight">
              <Text
                fontSize={highlight ? "2xl" : "xl"}
                as="h1"
                fontWeight="bold"
                textTransform={highlight ? "uppercase" : "none"}
              >
                {article.title}
              </Text>
            </Box>
            <Box overflowY="scroll">
              <ReactMarkdown>{article.description}</ReactMarkdown>
            </Box>
          </Flex>
        </Box>
      </LinkBox>
    </Link>
  );
};

export default ArticleCard;
