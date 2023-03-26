import React from "react";
import { GridItem, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const IndividualCloth = ({ image, title, price, presentPath }) => {
  const titleSplit = title.replace("/", "*"); // To solve the problem of cloth item that contains '/'
  return (
    <Link to={`/list/${presentPath}/${titleSplit}`}>
      <GridItem>
        <Image src={image} w="300px" h="300px" objectFit="contain"></Image>
        <VStack>
          <Heading color="black.50" fontSize="md" textAlign="center">
            {title}
          </Heading>
          <Text color="grey.50">{`$ ${price}`}</Text>
        </VStack>
      </GridItem>
    </Link>
  );
};

export default IndividualCloth;
