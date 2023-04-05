import React from "react";
import { Box, VStack, Text, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import Shop from "../components/Shop/Shop";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.totalAmount);
  return (
    <>
      <Shop />
      <VStack marginTop="2rem" color="grey.50">
        <Text color="black.50">Your cart</Text>
        <Text color="grey.50">{`${cartItems.length} items`}</Text>
      </VStack>
      <Box width={["90%", null, "70%"]} mx="auto">
        <Stack direction="column" gap="2rem" as="section" my="4rem">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              picture={item.picture}
              title={item.id}
              price={item.price}
              size={item.size}
              quantity={item.quantity}
            />
          ))}
        </Stack>
        {cartItems.length > 0 && (
          <Stack
            justifyContent="flex-end"
            gap="1rem"
            direction="row"
            alignItems="center"
          >
            <Text>{`Total: $ ${totalAmount.toFixed(2)}`}</Text>
            <Link to="/checkout">
              <Button border="1px solid #000" py=".5rem" w="10rem">
                CHECKOUT
              </Button>
            </Link>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default Cart;
