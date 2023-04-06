import React, { useReducer, useState } from "react";
import {
  Grid,
  GridItem,
  Text,
  Input,
  Box,
  Stack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Shop from "../components/Shop/Shop";
import { useSelector, useDispatch } from "react-redux";
import SuccessModal from "../components/Modal/SuccessModal";
import { cartSliceActions } from "../store";

const inputsReducerFn = (state, action) => {
  if (action.type === "email") {
    return {
      ...state,
      email: action.value,
      emailIsValid: action.value.includes("@") && action.value.includes("."),
    };
  }
  if (action.type === "emailVisited") {
    return {
      ...state,
      emailVisited: true,
    };
  }
  if (action.type === "phone") {
    return {
      ...state,
      phone: action.value,
      phoneIsValid: action.value.trim().length > 10,
    };
  }
  if (action.type === "phoneVisited") {
    return {
      ...state,
      phoneVisited: true,
    };
  }
  if (action.type === "address") {
    return {
      ...state,
      address: action.value,
      addressIsValid: action.value.trim().length > 10,
    };
  }
  if (action.type === "addressVisited") {
    return {
      ...state,
      addressVisited: true,
    };
  }
  if (action.type === "city") {
    return {
      ...state,
      city: action.value,
      cityIsValid: action.value.trim().length > 2,
    };
  }
  if (action.type === "cityVisited") {
    return {
      ...state,
      cityVisited: true,
    };
  }
  if (action.type === "state") {
    return {
      ...state,
      state: action.value,
      stateIsValid: action.value.trim().length > 2,
    };
  }
  if (action.type === "stateVisited") {
    return {
      ...state,
      stateVisited: true,
    };
  }
  if (action.type === "postal") {
    return {
      ...state,
      postal: action.value,
      postalIsValid: action.value.trim().length > 5,
    };
  }
  if (action.type === "postalVisited") {
    return {
      ...state,
      postalVisited: true,
    };
  }
  if (action.type === "country") {
    return {
      ...state,
      country: action.value,
    };
  }
  if (action.type === "name") {
    return {
      ...state,
      name: action.value,
      nameIsValid: action.value.trim().length > 6,
    };
  }
  if (action.type === "nameVisited") {
    return {
      ...state,
      nameVisited: true,
    };
  }
  if (action.type === "cardNumber") {
    return {
      ...state,
      cardNumber: action.value,
      cardNumberIsValid: action.value.trim().length > 16,
    };
  }
  if (action.type === "cardNumberVisited") {
    return {
      ...state,
      cardNumberVisited: true,
    };
  }
  if (action.type === "cvv") {
    return {
      ...state,
      cvv: action.value,
      cvvIsValid: action.value.trim().length > 2,
    };
  }
  if (action.type === "cvvVisited") {
    return {
      ...state,
      cvvVisited: true,
    };
  }

  return state;
};
const defaultInputsData = {
  email: "",
  emailIsValid: false,
  emailVisited: false,
  phone: "",
  phoneIsValid: false,
  phoneVisited: false,
  address: "",
  addressIsValid: false,
  addressVisited: false,
  city: "",
  cityIsValid: false,
  cityVisited: false,
  state: "",
  stateIsValid: false,
  stateVisited: false,
  postal: "",
  postalIsValid: false,
  postalVisited: false,
  country: "United States",
  name: "",
  nameIsValid: false,
  nameVisited: false,
  cardNumber: "",
  cardNumberIsValid: false,
  cardNumberVisited: false,
  cvv: "",
  cvvIsValid: false,
  cvvVisited: false,
  expiryMonth: "Jan",
  expiryYear: "2023",
};
const Checkout = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.totalAmount);
  const [inputsData, inputsDispatchFn] = useReducer(
    inputsReducerFn,
    defaultInputsData
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = [2023, 2024, 2025, 2026, 2027, 2028];
  const {
    emailIsValid,
    emailVisited,
    phoneIsValid,
    phoneVisited,
    addressIsValid,
    addressVisited,
    cityIsValid,
    cityVisited,
    stateIsValid,
    stateVisited,
    postalIsValid,
    postalVisited,
    country,
    nameIsValid,
    nameVisited,
    cardNumberIsValid,
    cardNumberVisited,
    expiryMonth,
    expiryYear,
    cvvIsValid,
    cvvVisited,
  } = inputsData;

  const emailIsInvalid = !emailIsValid && emailVisited;
  const phoneIsInvalid = !phoneIsValid && phoneVisited;
  const addressIsInvalid = !addressIsValid && addressVisited;
  const cityIsInvalid = !cityIsValid && cityVisited;
  const stateIsInvalid = !stateIsValid && stateVisited;
  const postalIsInvalid = !postalIsValid && postalVisited;
  const nameIsInvalid = !nameIsValid && nameVisited;
  const cardNumberIsInvalid = !cardNumberIsValid && cardNumberVisited;
  const cvvIsInvalid = !cvvIsValid && cvvVisited;
  const formIsValid =
    emailIsValid &&
    phoneIsValid &&
    addressIsValid &&
    cityIsValid &&
    stateIsValid &&
    postalIsValid &&
    nameIsValid &&
    cardNumberIsValid &&
    cvvIsValid;
  const changeHandler = (e) => {
    const name = e.target.name;
    inputsDispatchFn({ type: name, value: e.target.value });
  };
  const blurHandler = (e) => {
    const name = e.target.name;
    inputsDispatchFn({ type: `${name}Visited` });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    inputsDispatchFn({ type: "emailVisited" });
    inputsDispatchFn({ type: "phoneVisited" });
    inputsDispatchFn({ type: "addressVisited" });
    inputsDispatchFn({ type: "cityVisited" });
    inputsDispatchFn({ type: "stateVisited" });
    inputsDispatchFn({ type: "postalVisited" });
    inputsDispatchFn({ type: "nameVisited" });
    inputsDispatchFn({ type: "cardNumberVisited" });
    inputsDispatchFn({ type: "cvvVisited" });
    if (formIsValid) {
      setIsSubmitting(true);
      dispatch(cartSliceActions.clearCart());
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 3000);
    }
  };
  return (
    <>
      <Shop />
      {submitted && <SuccessModal />}
      <Text textAlign="center" fontWeight="bold" color="black.50" px="3">
        This is a Demo app. Form data will not be sent
      </Text>
      <Grid
        as="form"
        onSubmit={submitHandler}
        templateColumns={["1fr", null, "1fr 1fr"]}
        gap="10"
        width={["90%", null, "70%"]}
        mx="auto"
        my="10"
        opacity={`${isSubmitting ? "0.4" : "1"}`}
      >
        <GridItem>
          <Text color="black.50" fontWeight="bold" mb="4">
            Account Information
          </Text>
          <Box mb="8">
            <Input
              placeholder="Email"
              variant="flushed"
              borderBottom={`${
                emailIsInvalid ? "1px solid red" : "1px solid #ddd"
              }`}
              onChange={changeHandler}
              onBlur={blurHandler}
              name="email"
            />
            {emailIsInvalid && (
              <Text color="red" fontSize="14px">
                Invalid Email Address
              </Text>
            )}
          </Box>
          <Box mb="8">
            <Input
              type="number"
              placeholder="Phone Number"
              variant="flushed"
              borderBottom={`${
                phoneIsInvalid ? "1px solid red" : "1px solid #ddd"
              }`}
              name="phone"
              onChange={changeHandler}
              onBlur={blurHandler}
            />
            {phoneIsInvalid && (
              <Text color="red" fontSize="14px">
                Enter a valid phone number
              </Text>
            )}
          </Box>
          <Text color="black.50" fontWeight="bold" mb="4">
            Shipping Address
          </Text>
          <Box mb="8">
            <Input
              placeholder="Address"
              variant="flushed"
              borderBottom={`${
                addressIsInvalid ? "1px solid red" : "1px solid #ddd"
              }`}
              onChange={changeHandler}
              onBlur={blurHandler}
              name="address"
            />
            {addressIsInvalid && (
              <Text color="red" fontSize="14px">
                Invalid Address
              </Text>
            )}
          </Box>
          <Box mb="8">
            <Input
              placeholder="City"
              variant="flushed"
              borderBottom={`${
                cityIsInvalid ? "1px solid red" : "1px solid #ddd"
              }`}
              onChange={changeHandler}
              onBlur={blurHandler}
              name="city"
            />
            {cityIsInvalid && (
              <Text color="red" fontSize="14px">
                Invalid City
              </Text>
            )}
          </Box>
          <Stack direction="row" gap="4" mb="8">
            <Box width="50%">
              <Input
                placeholder="State/Province"
                variant="flushed"
                borderBottom={`${
                  stateIsInvalid ? "1px solid red" : "1px solid #ddd"
                }`}
                onChange={changeHandler}
                onBlur={blurHandler}
                name="state"
              />
              {stateIsInvalid && (
                <Text color="red" fontSize="14px">
                  Invalid State
                </Text>
              )}
            </Box>
            <Box width="50%">
              <Input
                placeholder=" Zip/Postal Code"
                variant="flushed"
                borderBottom={`${
                  postalIsInvalid ? "1px solid red" : "1px solid #ddd"
                }`}
                onChange={changeHandler}
                onBlur={blurHandler}
                name="postal"
              />
              {postalIsInvalid && (
                <Text color="red" fontSize="14px">
                  Invalid Zip/Postal Code
                </Text>
              )}
            </Box>
          </Stack>
          <Text
            color="black.50"
            fontSize="14px"
            pl="1"
            fontWeight="medium"
            mb="2"
          >
            Country
          </Text>
          <select
            className="country"
            defaultValue={country}
            onChange={changeHandler}
            name="country"
          >
            <option>United States</option>
            <option>Canada</option>
          </select>
        </GridItem>
        <GridItem>
          <Text color="black.50" fontWeight="bold" mb="4">
            Payment Method
          </Text>
          <Box mb="8">
            <Input
              placeholder="Cardholder Name"
              variant="flushed"
              borderBottom={`${
                nameIsInvalid ? "1px solid red" : "1px solid #ddd"
              }`}
              onChange={changeHandler}
              onBlur={blurHandler}
              name="name"
            />
            {nameIsInvalid && (
              <Text color="red" fontSize="14px">
                Invalid cardholder Name
              </Text>
            )}
          </Box>
          <Box mb="8">
            <Input
              placeholder="Card Number"
              variant="flushed"
              borderBottom={`${
                cardNumberIsInvalid ? "1px solid red" : "1px solid #ddd"
              }`}
              onChange={changeHandler}
              onBlur={blurHandler}
              name="cardNumber"
            />
            {cardNumberIsInvalid && (
              <Text color="red" fontSize="14px">
                Invalid cardholder Name
              </Text>
            )}
          </Box>
          <Text
            color="black.50"
            fontSize="14"
            pl="1"
            fontWeight="medium"
            mb="2"
          >
            Expiry
          </Text>
          <Grid templateColumns="1fr 1fr 1fr" columnGap="3">
            <select className="month" defaultValue={expiryMonth}>
              {months.map((month, index) => (
                <option key={index}>{month}</option>
              ))}
            </select>
            <select className="year" defaultValue={expiryYear}>
              {years.map((year, index) => (
                <option key={index}>{year}</option>
              ))}
            </select>
            <Box>
              <Input
                placeholder="CVV"
                variant="flushed"
                borderBottom={`${
                  cvvIsInvalid ? "1px solid red" : "1px solid #ddd"
                }`}
                onChange={changeHandler}
                onBlur={blurHandler}
                name="cvv"
              />
              {cvvIsInvalid && (
                <Text color="red" fontSize="14px">
                  Invalid CVV
                </Text>
              )}
            </Box>
          </Grid>
          <Text
            color="black.50"
            fontSize="14"
            pl="1"
            fontWeight="medium"
            my="4"
          >
            Order Summary
          </Text>
          <Stack gap="2">
            {cartItems.map((item, index) => (
              <ItemsToCheckout
                key={index}
                title={item.id}
                price={item.price * item.quantity}
              />
            ))}
          </Stack>
          <HStack
            justifyContent="space-between"
            mt="10"
            mb="8"
            pb={["3rem", null, "0"]}
          >
            <Text>Total: </Text>
            <Text>{`$${totalAmount.toFixed(2)}`}</Text>
          </HStack>
          <Button
            type="submit"
            border="2px solid #000"
            width={["100%", null, "200px"]}
            textAlign="center"
            background={["#172C50", null, "none"]}
            borderRadius="none"
            position={["fixed", null, "relative"]}
            bottom="0"
            left="0"
            color={["white", null, "black"]}
            padding={["2rem 0", null, "0"]}
          >
            Place Order
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default Checkout;

const ItemsToCheckout = ({ title, price }) => {
  return (
    <HStack justifyContent="space-between">
      <Text>{title}</Text>
      <Text>{`$${price.toFixed(2)}`}</Text>
    </HStack>
  );
};
