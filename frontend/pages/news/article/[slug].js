import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../../lib/api";
import Layout from "../../../common/Layout";
import Pic from "../../../common/Pic";
import Seo from "../../../common/Seo";
import { getStrapiMedia } from "../../../lib/media";
import gfm from "remark-gfm";
import styled from "styled-components";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

const ArticleHeader = styled.div`
  font-size: 44px;
  color: white;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(33, 33, 33, 1) 35%,
    rgba(48, 48, 48, 1) 100%
  );
  padding: 16px;
  border: 4px solid white;
  width: 100%;
  text-align: center;
`;

const defaultArticle = {
  image: {},
  title: "",
  description: "",
  author: {},
  published_at: "",
  content: "",
};

const Article = ({ article = defaultArticle }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const textVariants = useBreakpointValue({
    base: "2xl",
    xs: "4xl",
    s: "4xl",
    md: "5xl",
    lg: "5xl",
    xl: "6xl",
  });

  return (
    <Layout>
      <Seo seo={seo} />

      <Flex
        justifyContent="center"
        alignItems="flex-end"
        id="banner"
        h="md"
        className="uk-background-cover"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <Box w="75%">
          <Text
            color="brand.400"
            as="h1"
            fontSize={textVariants}
            fontWeight="bolder"
            textTransform="uppercase"
            textAlign="start"
            m="8"
            sx={{
              "-webkit-backface-visibility": "hidden",
            }}
          >
            {article.title}
          </Text>
        </Box>
      </Flex>
      <Flex py="70px">
        <Box w="75%" m="auto" p="4">
          <Flex className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <Box>
              {article.author.picture && (
                <Pic
                  image={article.author.picture}
                  style={{
                    position: "static",
                    borderRadius: "50%",
                    height: 30,
                  }}
                />
              )}
            </Box>
            <Box className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </Box>
          </Flex>
          <Divider size="2px" variant="solid" m="8"></Divider>

          <Box>
            <ReactMarkdown
              source={article.content}
              escapeHtml={false}
              remarkPlugins={[gfm]}
            />
          </Box>
          <hr className="uk-divider-small" />
        </Box>
      </Flex>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log({ params });
  const [article] =
    (await fetchAPI(`/articles?slug=${params.slug}&status=published`)) || {};

  console.log({ article });

  return {
    props: { article },
    revalidate: 1,
  };
}

export default Article;
