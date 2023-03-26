import React from "react";
import { Box, Text, HStack, Image, Button } from "@chakra-ui/react";
import moc from "../../Assets/Images/mens_outerwear_cover.jpg";

const CartItem = ({ picture, title, price }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Box display="grid" gridTemplateColumns={["1fr 1fr", null, "1fr 1fr auto"]}>
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
          <select>
            {arr.map((number) => (
              <option key={number}>{number}</option>
            ))}
          </select>
        </HStack>
        <Text>{`Size: ${price}`}</Text>
        <Text>{`$ ${price}`}</Text>
      </HStack>
      <Button
        alignSelf="center"
        marginLeft="1rem"
        width="fit-content"
        justifySelf={["end"]}
      >
        X
      </Button>
    </Box>
  );
};

export default CartItem;
