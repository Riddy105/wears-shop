import { Box, Heading, Text, Image, Stack, Grid } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IndividualCloth from "../components/IndividualCloth/IndividualCloth";

const Category = () => {
  const params = useParams();
  const presentPath = params.category;
  const ALL_CATEGORIES = useSelector((state) => state.allCategories);
  const presentPathData = ALL_CATEGORIES.find(
    (category) => category.id === presentPath
  );
  const transformTitle = (rawTitle) => {
    const titleInLowerCase = rawTitle.split("_").join(" ");
    const indexOfSpace = titleInLowerCase.indexOf(" ");
    const titleInUpperCase =
      titleInLowerCase[0].toUpperCase() +
      titleInLowerCase.slice(1, indexOfSpace) +
      " " +
      titleInLowerCase[indexOfSpace + 1].toUpperCase() +
      titleInLowerCase.slice(indexOfSpace + 2);
    return titleInUpperCase;
  };

  const transformedTitle = transformTitle(presentPathData.id); // transforming the id of the cloth category to a Capitalized Header for didplay on screen. i.e mens_category to Mens Category

  return (
    <Box as="section">
      <Stack direction="column" align="center">
        <Image src={presentPathData.cover}></Image>
        <Heading color="black.50">{presentPathData.title}</Heading>
        <Text color="grey.50">{`${presentPathData.clothes.length} items`}</Text>
      </Stack>
      <Grid
        templateColumns={["repeat(2, 1fr)", null, "repeat(3, 1fr)"]}
        justifyItems="center"
      >
        {presentPathData.clothes.map((cloth) => (
          <IndividualCloth
            key={cloth.id}
            image={cloth.picture}
            title={cloth.id}
            price={cloth.price}
            presentPath={presentPathData.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
