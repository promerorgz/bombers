import { SimpleGrid, Grid, GridItem } from "@chakra-ui/layout";
import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { groupBy } from "lodash";
import React from "react";
import Hero from "../common/Hero";
import Layout from "../common/Layout";
import Seo from "../common/Seo";
import Articles from "../components/Articles/articles";
import Games from "../components/Games";
import PaypalButton from "../components/Paypal/paypal-button";
import Sponsors from "../components/Sponsors";
import { fetchAPI } from "../lib/api";

const Home = (props) => {
  const { articles, categories, homepage, games, sponsors, ...rest } = props;
  console.log({ props });

  const buttons = [
    {
      display: "Shop",
      link: "/shop",
    },
    {
      display: "Contact",
      link: "/contact",
    },
  ];

  return (
    <Layout categories={categories} seo={homepage.seo} dark>
      <Seo seo={homepage.seo} />
      <Hero
        text="St. Louis Bombers Rugby Club"
        image="images/nationals17.jpg"
        buttons={buttons}
      />
      <SimpleGrid m="0" p="2">
        <Games games={games} />
        <Grid
          py="8"
          h="auto"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          mx="8px"
          mt="-50px"
        >
          <GridItem rowSpan={[1, null, 2]} colSpan={[5, 5, 3, 3, 3]}>
            <Heading
              as="h3"
              size="2xl"
              fontFamily="Big Shoulders Display"
              fontWeight="700"
              textTransform="uppercase"
              mb="8"
              textDecoration="underline"
              textUnderlineOffset="10px"
            >
              News
            </Heading>
            <Articles articles={articles}></Articles>
          </GridItem>
          <GridItem rowSpan={1} colSpan={[2, 5, 2, 2, 2]}>
            <Heading
              as="h3"
              size="2xl"
              fontFamily="Big Shoulders Display"
              fontWeight="700"
              textTransform="uppercase"
              mb="8"
              textDecoration="underline"
              textUnderlineOffset="10px"
            >
              Dues and Donations
            </Heading>
            <PaypalButton />
          </GridItem>

          <GridItem rowSpan={1} colSpan={[2, 5, 2, 2, 2]}>
            <Heading
              as="h3"
              size="2xl"
              fontFamily="Big Shoulders Display"
              fontWeight="700"
              textTransform="uppercase"
              mb="8"
              textDecoration="underline"
              textUnderlineOffset="10px"
            >
              Our Sponsors
            </Heading>
            <Sponsors sponsors={sponsors} />
          </GridItem>
        </Grid>
      </SimpleGrid>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articles,
    categories,
    homepage,
    games,
    players,
    coaches,
    sponsors,
  ] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/games"),
    fetchAPI("/players"),
    fetchAPI("/coaches"),
    fetchAPI("/sponsors"),
  ]);

  return {
    props: {
      articles,
      categories,
      homepage,
      games,
      players,
      coaches,
      sponsors,
    },
    revalidate: 1,
  };
}

export default Home;
