import { Flex, Box, Grid, SimpleGrid } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import Articles from "../components/articles";
import Card from "../components/card";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage, games }) => {
  console.log({ games });
  const [latestArticle, setLatestArticle] = useState(
    articles[articles.length - 1]
  );
  useEffect(() => {
    setLatestArticle(articles[articles.length - 1]);
  }, [articles]);

  console.log({ latestArticle });
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <Hero></Hero>
      <SimpleGrid columns="2" spacing={8} m="16">
        <Card article={latestArticle}></Card>;
        <SimpleGrid columns="1" spacing={4}>
          {games.map((game) => {
            <Card article={game} />;
          })}
        </SimpleGrid>
      </SimpleGrid>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, games] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/games"),
  ]);

  return {
    props: { articles, categories, homepage, games },
    revalidate: 1,
  };
}

export default Home;
