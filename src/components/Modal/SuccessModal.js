import React from "react";
import { Box, VStack, Image, Text } from "@chakra-ui/react";
import success from "../../Assets/Images/success.png";
import { Link } from "react-router-dom";
const SuccessModal = () => {
  return (
    <Link to="/">
      <Box bg="blue.50" zIndex="3" position="relative">
        <Box
          bg="#000"
          position="fixed"
          top="0"
          right="0"
          w="100vw"
          h="100vh"
        ></Box>
        <VStack
          borderRadius=".8rem"
          py="10"
          pl={["4", null, "0"]}
          color="white"
          bg="#1245A8"
          gap="8"
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w={["80%", null, "480px"]}
          fontSize={["1rem", null, "1.5rem"]}
          textAlign="center"
        >
          <Text>Great Job!</Text>
          <Image src={success} alt="Success Image"></Image>
          <Text>Your order has been successfully submitted</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default SuccessModal;
