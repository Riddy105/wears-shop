import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import moc from "../Assets/Images/mens_outerwear_cover.jpg";
import mtc from "../Assets/Images/mens_tshirts_cover.jpg";
import loc from "../Assets/Images/ladies_outerwear_cover.jpg";
import ltc from "../Assets/Images/ladies_tshirts_cover.jpg";
import mtsfz from "../Assets/Images/Men's Tech Shell Full-Zip.jpg";
import alscn from "../Assets/Images/Anvil L S Crew Neck Grey.jpg";
import gffzh from "../Assets/Images/Green Flex Fleece Zip Hoodie.jpg";
import anpj from "../Assets/Images/Android Nylon Packable Jacket.jpg";
import yuhs from "../Assets/Images/YouTube Ultimate Hooded Sweatshirt.jpg";
import ghfzh from "../Assets/Images/Grey Heather Fleece Zip Hoodie.jpg";
import lmsfz from "../Assets/Images/Ladies Modern Stretch Full Zip.jpg";
import lcwj from "../Assets/Images/Ladies Colorblock Wind Jacket.jpg";
import lvfj from "../Assets/Images/Ladies Voyage Fleece Jacket.jpg";
import lplsh from "../Assets/Images/Ladies Pullover L S Hood.jpg";
import lshkj from "../Assets/Images/Ladies Sonoma Hybrid Knit Jacket.jpg";
import lykqz from "../Assets/Images/Ladies Yerba Knit Quarter Zip.jpg";
import yoctg from "../Assets/Images/YouTube Organic Cotton T-Shirt - Grey.jpg";
import isat from "../Assets/Images/Inbox - Subtle Actions T-Shirt.jpg";
import aast from "../Assets/Images/Adult Android Superhero T-Shirt.jpg";
import mvht from "../Assets/Images/Men's Vintage Heather T-Shirt.jpg";
import bbt from "../Assets/Images/Basic Black T-Shirt.jpg";
import lgt from "../Assets/Images/Local Guides T-Shirt.jpg";
import lct from "../Assets/Images/Ladies Chrome T-Shirt.jpg";
import lgnyt from "../Assets/Images/Ladies Google New York T-Shirt.jpg";
import lgmt from "../Assets/Images/Ladies Gmail T-Shirt.jpg";
import lglwt from "../Assets/Images/Ladies G Logo White T-Shirt.jpg";
import lapt from "../Assets/Images/Ladies Android Pride T-Shirt.jpg";
import lrcn from "../Assets/Images/Ladies Ringspun Crew Neck.jpg";

const ALL_CATEGORIES = [
  {
    id: "mens_outerwear",
    title: "Men's Outerwear",
    cover: moc,
    clothes: [
      {
        id: "Men's Tech Shell Full-Zip",
        price: 50.2,
        picture: mtsfz,
        description:
          "A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player. ",
        features: [
          "100% polyester.",
          "Smooth, technical front with textured mesh back.",
          "Drawstring bottom for adjustable fit.",
          "Raglan sleeves.",
          "Available in forest green with the white Google logo embroidered at left chest.",
        ],
      },
      {
        id: "Anvil L/S Crew Neck - Grey",
        price: 22.15,
        picture: alscn,
        description:
          "You'll be swooning over this crew neck as soon as you feel how soft it is. ",
        features: [
          "40% preshrunk ring-spun cotton, 60% polyester terry fleece. ",
          "Available in dark heather charcoal with the white Google logo screen printed across center chest.",
        ],
      },
      {
        id: "Green Flex Fleece Zip Hoodie",
        price: 46.65,
        picture: gffzh,
        description:
          "Ultra soft. Ultra cozy. Our popular flex fleece hoodie now available in speckled green.  ",
        features: [
          "50% cotton / 50% polyester. ",
          "Made in the USA. ",
          "Full-zip",
          "Available in green with specks of blue and the white Google logo embroidered at left bicep.",
        ],
      },
      {
        id: "Android Nylon Packable Jacket",
        price: 33.6,
        picture: anpj,
        description:
          "Pack. Pack. Pack it up! This nylon jacket with reflective trim can literally be packed into itself in seconds. Features a waterproof nylon fabric, Android eyes & antennaes on the hood and a carrying strap when jacket is fully packed. Android robot is printed on back above zipper in a reflective, metallic finish.",
        features: [],
      },

      {
        id: "YouTube Ultimate Hooded Sweatshirt",
        price: 32.35,
        picture: yuhs,
        description:
          "Stay warm in this cozy hoodie made of 50% cotton and 50% polyester. This comfortable design features set in sleeves, dyed to match draw cord and a front pouch pocket. Available in Charcoal with the full color YouTube logo screen printed across the chest. Unisex sizing.",
        features: [],
      },
      {
        id: "Grey Heather Fleece Zip Hoodie",
        price: 38.85,
        picture: ghfzh,
        description: "Cozy up with this full-zip hoodie. ",
        features: [
          "60% combed, ring-spun cotton, 40% polyester.",
          "Unisex sizing.",
          "Retail fit.",
          "Contrast zipper.",
          "Kangaroo pockets with ribbed cuffs and waistband.",
          "Available in dark heather with the white Google logo embroidered at left chest.",
        ],
      },
    ],
  },
  {
    id: "ladies_outerwear",
    title: "Ladies Outerwear",
    cover: loc,
    clothes: [
      {
        id: "Ladies Modern Stretch Full Zip",
        price: 41.6,
        picture: lmsfz,
        description:
          "With an updated fit and figure-flattering details, this full-zip combines ultra soft cotton with a dash of spandex to retain its shape all day long. ",
        features: [
          "96% cotton, 4% spandex.",
          "Gently contoured silhouette & longer length design for a style that moves with you.",
          "Self-fabric hood.",
          "Dyed-to-match zipper.",
          "Front slash pockets.",
          "Open cuffs & hem.",
          "Available in Mosaic Blue with the white Google logo embroidered at left chest. ",
        ],
      },
      {
        id: "Ladies Colorblock Wind Jacket",
        price: 45.9,
        picture: lcwj,
        description:
          "Brighten up your commute on gloomy days. This lightweight jacket features a subtle grid texture and a punch of bright pink at each side panel.",
        features: [
          "100% polyester dobby shell with jersey lining.",
          "Packable zip-in hood with contrast pink zipper.",
          "Cadet collar and elastic cuffs.",
          "Adjustable toggles at waist can be cinched for a flattering fit.",
          "Available in grey/dark rose with the white Google logo embroidered at left chest.",
        ],
      },
      {
        id: "Ladies Voyage Fleece Jacket",
        price: 48.0,
        picture: lvfj,
        description:
          "Perhaps the equivalent to that comfort blanket you had years ago is a cozy fleece. This full-zip is the perfect layering piece for those 'in-between' months when mother nature just can't make up her mind. ",
        features: [
          "100% polyester anti-pill yarn fleece. ",
          "100% polyester taffeta lining in sleeves.",
          "Tricot-lined lower pockets with reverse coil zippers.",
          "Available in purple with the white Google logo embroidered at left chest.",
          "Please note! Sizing runs larger than normal. Consider ordering a size smaller than normal. ",
        ],
      },
      {
        id: "Ladies Pullover L/S Hood",
        price: 36.5,
        picture: lplsh,
        description:
          "A longsleeve layering piece with a hood. What more can you ask for between season changes?  ",
        features: [
          "85% polyester, 15% cotton",
          "Ultra lightweight, tissue jersey fabric",
          "Scoop-neck with hood.",
          "Available in jewel blue with the white Google logo screenprinted across center chest.",
        ],
      },
      {
        id: "Ladies Sonoma Hybrid Knit Jacket",
        price: 84.85,
        picture: lshkj,
        description:
          "A modern styled sport jacket that combines a classic silhouette with moisture-wicking fabrics. Technical features include a reversed coil zipper with reflective stripe, interior media exit port, and built-in media pocket.",
        features: [
          "94% polyester, 6% spandex.",
          "Available in black with the white Google logo heat transferred onto right hip along zipper.",
        ],
      },
      {
        id: "Ladies Yerba Knit Quarter Zip",
        price: 64.2,
        picture: lykqz,
        description: "This on-trend quarter zip doubles as workout gear. ",
        features: [
          "81% polyester, 19% spandex jersey knit.",
          "Textured knit fabric features a moisture-wicking finish.",
          "Exposed contrast reverse coil zipper with contrast inner collar",
          "Lightweight design with added stretch.",
          "Available in heathered indigo with the white Google logo heat transferred vertically onto front right hip.",
        ],
      },
    ],
  },
  {
    id: "mens_tshirts",
    title: "Men's T-shirts",
    cover: mtc,
    clothes: [
      {
        id: "YouTube Organic Cotton T-Shirt - Grey",
        price: 14.75,
        picture: yoctg,
        description:
          "Stay casual and cool in this 100% organic pre-shrunk cotton T-shirt. Available in charcoal grey with full-color YouTube logo screened on front.",
        features: [],
      },
      {
        id: "Inbox - Subtle Actions T-Shirt",
        price: 17.05,
        picture: isat,
        description:
          "Sometimes even the subtlest of actions can make a big difference. This tee highlights all of the icons & features available in your Gmail inbox! ",
        features: [
          "60% cotton, 40% polyester blend.",
          "Available in charcoal heather with the inbox icons screenprinted at front chest and inbox tag sewn onto left sleeve.",
        ],
      },
      {
        id: "Adult Android Superhero T-Shirt",
        price: 14.95,
        picture: aast,
        description:
          "Mr. Kent has nothing on Super Droid, especially since this robot has only one weakness-a sweet tooth (considering all of its confectionery-themed versions)! This adorable Bella+Canvas tee features a unisex fit that is sure to please both male and female Android fans.",
        features: [
          "100% combed, ringspun cotton. ",
          "Unisex fit.",
          "Tag-free label for added comfort.",
          "Available in royal blue with the Super Droid robot screen printed at center chest.",
          "Sizes run smaller than normal. Reference men's sizing chart for additional details. ",
        ],
      },
      {
        id: "Men's Vintage Heather T-Shirt",
        price: 15.8,
        picture: mvht,
        description:
          "A casual-cool, vintage-inspired tee perfect for all. Just remember that the best part about any classic is that it only improves with age. The more you wash it, the softer it feels.   ",
        features: [
          "65% polyester, 35% cotton.",
          "Available in heather navy, blue, purple or green with the white Google logo screened across center chest of each.",
        ],
      },
      {
        id: "Basic Black T-Shirt",
        price: 16.9,
        picture: bbt,
        description:
          "Word on the street is that 'black is the new black.' Embellish your basic fashion statement with the Google logo on an authentic American Apparel t-shirt.           ",
        features: [
          "100% organic combed cotton for ultimate softness. ",
          "Flattering fit.",
          "Available in Black with the Google logo screen printed in White across center chest.",
          "Sizes run smaller than normal. Please reference men's size chart for fit.",
        ],
      },
      {
        id: "Local Guides T-Shirt",
        price: 15.7,
        picture: lgt,
        description:
          "Do you live to explore? Are you the first to tell your friends about the best venues, restaurants and hot spots in town? If you're already a local guide, sport your t-shirt with pride. This ultra soft style is comfortable enough to wear all day long - perfect for all of those adventures you'll tell us about later. To learn more about Local Guides, visit us here: https://www.google.com/local/guides/.        ",
        features: [
          "52% combed, ring-spun cotton / 48% polyester.",
          "Retail fit.",
          "Available in charcoal with the Local Guides logo screenprinted at front chest and Google logo screenprinted in white at left bicep.          ",
        ],
      },
    ],
  },
  {
    id: "ladies_tshirts",
    title: "Ladies T-shirts",
    cover: ltc,
    clothes: [
      {
        id: "Ladies Chrome T-Shirt",
        price: 13.3,
        picture: lct,
        description:
          "The best of three fabrics combined into one seductively-soft tee.  ",
        features: [
          "50% polyester, 25% combed and ring-spun cotton, 25% rayon.",
          "Side-seamed.",
          "Semi-relaxed fit. ",
          "Available in heather blue with the white Google Chrome logo screenprinted at center chest. ",
        ],
      },
      {
        id: "Ladies Google New York T-Shirt",
        price: 18.35,
        picture: lgnyt,
        description:
          "Are you feeling lucky? Inspired by city lights in The Big Apple, this tee features the 'I'm Feeling Lucky New York' phrase at back. ",
        features: [
          "100% cotton.",
          "American Apparel shirt designed with a ladies fit in mind.",
          "Available in Black with the Google logo and 'I'm Feeling Lucky' New York printed on back yoke in White.",
          "Sizing runs smaller than normal. Please reference size chart before ordering.",
        ],
      },
      {
        id: "Ladies Gmail T-Shirt",
        price: 16.4,
        picture: lgmt,
        description:
          "Show your inbox some love. The new Gmail tee has arrived, complete with a subtle Mvelope design that showcases all of the Gmail icons you use on the daily.",

        features: [
          "50% polyester, 25% cotton.",
          "Bella+Canvas.",
          "Available in vintage red with the new Gmail print screenprinted across center chest.",
        ],
      },
      {
        id: "Ladies G Logo White T-Shirt",
        price: 13.3,
        picture: lglwt,
        description:
          "There's a new G in town and it's here to stay. Get your hands on this comfy white tee with the new Google icon. ",
        features: [
          "100% combed and ring-spun cotton.",
          "Side seamed, relaxed fit.",
          "Bella+Canvas.",
          "Available in white with the Google 'G' icon screenprinted at front.",
        ],
      },
      {
        id: "Ladies Android Pride T-Shirt",
        price: 19.1,
        picture: lapt,
        description: "Stand out proud in this Ladies' Android Pride T-shirt.",
        features: [
          "100% cotton.",
          "Available in black and features two Androids holding hands and waving a rainbow flag printed across the front. Google logo screen printed in white on the sleeve. ",
          "Sizing runs smaller than normal. Please reference size chart before ordering.",
        ],
      },
      {
        id: "Ladies Ringspun Crew Neck",
        price: 19.7,
        picture: lrcn,
        description:
          "Cheery colors make the world a happier place. This bright pink tee is ultra soft and features a comfortable, ladies fit.",
        features: [
          "100% cotton.",
          "Tagless label for added comfort.",
          "Relaxed fit.",
          "Available in hot pink with the white Google logo screenprinted at center chest.",
        ],
      },
    ],
  },
];
const INITIALSTATE = {
  allCategories: ALL_CATEGORIES,
  cartItems: [],
  totalAmount: 0,
  itemInCart: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: INITIALSTATE,
  reducers: {
    addToCart(state, action) {
      const useableState = current(state);
      // const category = state.allCategories.find(
      //   (category) => category.id === action.payload.category.id
      // );

      // const cloth = category.clothes.find(
      //   (cloth) => cloth.id === action.payload.cloth.id
      // );
      const cloth = action.payload.cloth;
      const updatedCloth = {
        ...cloth,
        size: action.payload.formDetails.size,
        quantity: action.payload.formDetails.quantity,
      };

      // Checking if the cloth already exists in cart before pushing
      const existingClothIndex = useableState.cartItems.findIndex(
        (item) => item.id === cloth.id
      );
      if (existingClothIndex !== -1) {
        const existingCloth = state.cartItems[existingClothIndex];
        state.cartItems[existingClothIndex] = {
          ...existingCloth,
          quantity: existingCloth.quantity + updatedCloth.quantity,
        };
        state.totalAmount =
          state.totalAmount + updatedCloth.quantity * updatedCloth.price;
        state.itemInCart = state.itemInCart + updatedCloth.quantity;
        return;
      }
      state.cartItems.push(updatedCloth);
      state.itemInCart = state.itemInCart + updatedCloth.quantity;
      state.totalAmount =
        state.totalAmount + updatedCloth.quantity * updatedCloth.price;
    },
    removeFromCart(state, action) {
      const usableState = current(state); // Why use current() here to access state? A MILLION DOLLAR QUESTION!!! Cos state always return a proxy, a confusing, non-editable, object.

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const removedCloth = usableState.cartItems.find(
        (cloth) => cloth.id === action.payload.id
      );
      state.itemInCart = state.itemInCart - removedCloth.quantity;
      state.totalAmount =
        state.totalAmount - removedCloth.quantity * removedCloth.price;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartSliceActions = cartSlice.actions;
export default store;
