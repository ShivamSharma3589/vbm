import {
  BANNER,
  CATEGORY,
  HORIZONTAL_PRODUCTS,
  PRODUCT_GRID,
  VERTICAL_PRODUCTS,
} from "../constants";

const home = {
  elements: [
    {
      type: BANNER,
      data: [
        {
          id: 1,
          name: "Bhaji box",
          src: "https://www.dl.dropboxusercontent.com/s/wn8cw3h0btsjw9b/images%20%288%29.jpeg?dl=0",
          title: "",
          content: "",
          alt: "Bhaji box",
        },
        {
          id: 2,
          name: "Bhaji box",
          src: "https://www.dl.dropboxusercontent.com/s/d9xu889cgyllt0d/9d3fb81789baf063c724e53a674929d0.jpg?dl=0",
          title: "",
          content: "",
          alt: "Bhaji box",
        },
      ],
    },
    {
      type: CATEGORY,
      data: [
        {
          id: 1,
          src: "https://www.dl.dropboxusercontent.com/s/28erpcxi5ragbeg/promolist-1.jpg?dl=0",
          alt: "Promolist 1",
          title: "Promolist 1",
        },
        {
          id: 2,
          src: "https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0",
          alt: "Promolist 2",
          title: "Promolist 2",
        },
        {
          id: 3,
          src: "https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0",
          alt: "Promolist 3",
          title: "Promolist 3",
        },
        {
          id: 4,
          src: "https://www.dl.dropboxusercontent.com/s/opnbvo88evwmx42/promolist-4.jpg?dl=0",
          alt: "Promolist 4",
          title: "Promolist 4",
        },
        {
          id: 5,
          src: "https://www.dl.dropboxusercontent.com/s/8pbe9yyk598kri0/promolist-5.jpg?dl=0",
          alt: "Promolist 5",
          title: "Promolist 5",
        },
      ],
    },
    {
      type: PRODUCT_GRID,
      data: [
        {
          id: 1,
          src: "https://www.dl.dropboxusercontent.com/s/28erpcxi5ragbeg/promolist-1.jpg?dl=0",
          alt: "Promolist 1",
          title: "Promolist 1",
          price: "₹100",
        },
        {
          id: 2,
          src: "https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0",
          alt: "Promolist 2",
          title: "Promolist 2",
          price: "₹100",
        },
        {
          id: 3,
          src: "https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0",
          alt: "Promolist 3",
          title: "Promolist 3",
          price: "₹100",
        },
        {
          id: 4,
          src: "https://www.dl.dropboxusercontent.com/s/opnbvo88evwmx42/promolist-4.jpg?dl=0",
          alt: "Promolist 4",
          title: "Promolist 4",
          price: "₹100",
        },
        {
          id: 5,
          src: "https://www.dl.dropboxusercontent.com/s/8pbe9yyk598kri0/promolist-5.jpg?dl=0",
          alt: "Promolist 5",
          title: "Promolist 5",
          price: "₹100",
        },
      ],
    },
    {
      type: HORIZONTAL_PRODUCTS,
      data: [],
    },
    {
      type: VERTICAL_PRODUCTS,
      data: [],
    },
  ],
};

export default home;
