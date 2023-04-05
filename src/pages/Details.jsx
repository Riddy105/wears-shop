import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Grid,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/index";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const presentCloth = params.cloth.replace("*", "/"); // To solve the problem of cloth item that contains '/'
  const presentCategory = params.category;
  const [formDetails, setFormDetails] = useState({ size: "M", quantity: 1 });
  const category = useSelector(
    (state) =>
      state.allCategories.find((category) => category.id === presentCategory) //Get your present category data out of the big object holding all the categories and their respective clothes
  );
  const cloth = category.clothes.find((cloth) => cloth.id === presentCloth);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const addToCartHandler = () => {
    dispatch(cartSliceActions.addToCart({ category, cloth, formDetails }));
  };
  const sizeChangeHandler = (e) => {
    setFormDetails((prev) => {
      return { quantity: prev.quantity, size: e.target.value };
    });
  };
  const quantityChangeHandler = (e) => {
    setFormDetails((prev) => {
      return { quantity: Number(e.target.value), size: prev.size };
    });
  };
  return (
    <Grid
      as="section"
      templateColumns={["1fr", null, "1fr 1fr"]}
      width={["90%", null, "70%"]}
      margin="3rem auto 0 auto"
      gap={["10", "20"]}
      paddingBottom="5rem"
    >
      <Image src={cloth.picture}></Image>
      <Box>
        <Heading color="black.50" fontSize="2xl" marginBottom=".5rem">
          {cloth.id}
        </Heading>
        <Text color="grey.50">{`$ ${cloth.price}`}</Text>
        <Box margin="3rem 0">
          <HStack
            borderTop="1px solid #ccc"
            borderBottom="1px solid #ccc"
            padding=".3rem 0"
          >
            <label className="sizes-label">Sizes</label>
            <select
              defaultValue="M"
              className="sizes"
              onChange={sizeChangeHandler}
            >
              {sizes.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </HStack>
          <HStack borderBottom="1px solid #ccc" padding=".3rem 0">
            <label color="grey.50">Quantity</label>
            <select
              defaultValue="1"
              className="quantity"
              onChange={quantityChangeHandler}
            >
              {sizes.map((size, index) => (
                <option key={index}>{index + 1}</option>
              ))}
            </select>
          </HStack>
        </Box>
        <Box as="article">
          <Heading
            fontSize="lg"
            color="black.50"
            fontWeight="medium"
            marginBottom="1rem"
          >
            Description
          </Heading>
          <Text color="grey.50">{cloth.description}</Text>
        </Box>
        <Box color="grey.50" margin="1rem 0">
          {cloth.features.length > 0 && <Text>Features</Text>}
          <VStack
            as="ul"
            listStyleType="disc"
            gap=""
            paddingLeft="2rem"
            alignItems="flex-start"
            margin="1rem 0 0 0"
          >
            {cloth.features.map((feature, index) => (
              <Text as="li" key={index}>
                {feature}
              </Text>
            ))}
          </VStack>
        </Box>
        <Link to="/cart">
          <Button
            border="2px solid #000"
            width={["100%", null, "40%"]}
            textAlign="center"
            background={["#172C50", null, "none"]}
            borderRadius="none"
            position={["fixed", null, "relative"]}
            bottom="0"
            left="0"
            color={["white", null, "black"]}
            padding={["2rem 0", null, "0"]}
            onClick={addToCartHandler}
          >
            ADD TO CART
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default Details;
