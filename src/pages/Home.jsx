import { Grid, GridItem, VStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

const Home = () => {
  const ALL_CATEGORIES = useSelector((state) => state.allCategories);
  return (
    <Grid
      as="section"
      templateColumns="1fr 1fr"
      rowGap="4"
      columnGap={["4", null, "0"]}
      w="95%"
      mx="auto"
    >
      {ALL_CATEGORIES.map((catergory, index) => (
        <Categories
          key={index}
          photo={catergory.cover}
          name={catergory.title}
          link={catergory.id}
          span={`${index === 0 || index === 1 ? "span 2" : ""}`}
        />
      ))}
    </Grid>
  );
};

const Categories = ({ name, photo, span, link }) => {
  return (
    <GridItem gridColumn={span}>
      <Image
        src={photo}
        w="100%"
        h={["240px", null, "320px"]}
        objectFit="cover"
      ></Image>
      <VStack py="4">
        <Text>{name}</Text>
        <Link to={`/list/${link}`}>
          <Text border="2px" borderWidth="black.50" py="2" px="4">
            SHOP NOW
          </Text>
        </Link>
      </VStack>
    </GridItem>
  );
};
export default Home;
