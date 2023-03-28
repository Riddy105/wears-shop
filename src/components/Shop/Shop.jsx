import React from "react";
import cartIcon from "../../Assets/Icon/cart-sharp.svg";
import { Box, Image, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Shop = () => {
  const itemInCart = useSelector((state) => state.itemInCart);
  return (
    <HStack
      w={["100%", null, "60%"]}
      m={["0 auto", null, "0 0 0 auto"]}
      justify="space-between"
      p="5"
    >
      <Link to="/">
        <Heading fontWeight="semibold" color="grey.100" fontSize="2xl">
          RIDDY'S SHOP
        </Heading>
      </Link>
      <Box position="relative">
        <Link to="/cart">
          <Image src={cartIcon} w="24px" h="24px"></Image>
        </Link>
        {itemInCart > 0 && (
          <Box
            bg="black.50"
            h="1.5rem"
            w="1.5rem"
            borderRadius="50%"
            color="white"
            position="absolute"
            top="-.5rem"
            left="1rem"
            textAlign="center"
          >
            {itemInCart}
          </Box>
        )}
      </Box>
    </HStack>
  );
};

export default Shop;
