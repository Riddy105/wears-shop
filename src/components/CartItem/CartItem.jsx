import React from "react";
import { Box, Text, HStack, Image, Button } from "@chakra-ui/react";
import { cartSliceActions } from "../../store";
import { useDispatch } from "react-redux";
const CartItem = ({ picture, title, price, size, quantity }) => {
  const dispatch = useDispatch();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const removeItemHandler = () => {
    dispatch(cartSliceActions.removeFromCart({ id: title }));
  };
  const increamentItemHandler = (e) => {
    dispatch(
      cartSliceActions.increamentItem({
        id: title,
        value: Number(e.target.value),
      })
    );
  };
  return (
    <Box
      display="grid"
      gridTemplateColumns={["1fr auto", null, "1fr 1fr auto"]}
      rowGap={["5"]}
    >
      <HStack>
        <Image src={picture} w="70px" h="70px" objectFit="cover"></Image>
        <Text color="grey.50">{title}</Text>
      </HStack>
      <HStack
        gap={["1rem", null, "0"]}
        color="grey.50"
        justifyContent="space-between"
        gridRow={["2", null, "1"]}
        justifySelf={["end", null, "auto"]}
        gridColumn={["span 2", null, "2"]}
      >
        <HStack>
          <Text>Qty:</Text>
          <select defaultValue={quantity} onChange={increamentItemHandler}>
            {arr.map((number) => (
              <option key={number}>{number}</option>
            ))}
          </select>
        </HStack>
        <Text>{`Size: ${size}`}</Text>
        <Text>{`$ ${price}`}</Text>
      </HStack>
      <Button
        alignSelf="center"
        marginLeft="1rem"
        width="fit-content"
        justifySelf={["end"]}
        onClick={removeItemHandler}
      >
        X
      </Button>
    </Box>
  );
};

export default CartItem;
