import React from "react";
import { Box, VStack, Text, Stack, Image, Button } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import CartItem from "../components/CartItem/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      <Header />
      <VStack marginTop="2rem" color="grey.50">
        <Text color="black.50">Your cart</Text>
        <Text color="grey.50">{`${cartItems.length} items`}</Text>
      </VStack>
      <Stack
        direction="column"
        gap="2rem"
        as="section"
        width={["90%", null, "70%"]}
        margin="4rem auto"
      >
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            picture={item.picture}
            title={item.id}
            price={item.price}
          />
        ))}
      </Stack>
    </>
  );
};

export default Cart;
