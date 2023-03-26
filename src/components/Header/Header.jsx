import React from "react";
import cartIcon from "../../Assets/Icon/cart-sharp.svg";
import { Box, Image, Wrap, WrapItem, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [fixNav, setFixNav] = useState(false);
  window.addEventListener("scroll", () => {});
  return (
    <Box as="header" p="5">
      <HStack w="50%" ml="auto" justify="space-between">
        <Link to="/">
          <Heading fontWeight="semibold" color="grey.100">
            SHOP
          </Heading>
        </Link>
        <Link to="/cart">
          <Image src={cartIcon} w="24px" h="24px"></Image>
        </Link>
      </HStack>
      <Wrap
        mt="8"
        spacing="6"
        justify="center"
        color="grey.50"
        fontSize={["sm", null, "md"]}
        fontWeight="semibold"
      >
        <WrapItem>
          <Link to="/list/mens_outerwear">Men's outerwear</Link>
        </WrapItem>
        <WrapItem>
          <Link to="/list/ladies_outerwear">Ladies outerwear</Link>
        </WrapItem>
        <WrapItem>
          <Link to="/list/mens_tshirts">Men's T-shirts</Link>
        </WrapItem>
        <WrapItem>
          <Link to="/list/ladies_tshirts">Ladies T-shirts</Link>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Header;
