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
          showText: true,
          title: "Bhaji Box",
          subTitle: "We make Bhaji Boxes like no does",
          src: "https://cdn.pixabay.com/photo/2016/03/27/18/52/flower-1283602_960_720.jpg",
          redirectTo: "/",
          titleColor: "#000",
          subTitleColor: "#222",
        },
        {
          id: 2,
          showText: true,
          title: "Shaadi Boxes",
          subTitle: "We make Bhaji Boxes like no does",
          src: "https://cdn.pixabay.com/photo/2016/03/27/18/52/flower-1283602_960_720.jpg",
          redirectTo: "/",
          titleColor: "#000",
          subTitleColor: "#222",
        },
        {
          id: 3,
          showText: true,
          title: "Kamal ke Boxes",
          subTitle: "We make Bhaji Boxes like no does",
          src: "https://cdn.pixabay.com/photo/2016/03/27/18/52/flower-1283602_960_720.jpg",
          redirectTo: "/",
          titleColor: "#000",
          subTitleColor: "#222",
        },
      ],
    },
    {
      type: CATEGORY,
      heading: "Categories",
      showText: true,
      data: [
        {
          id: 1,
          src: "https://www.dl.dropboxusercontent.com/s/28erpcxi5ragbeg/promolist-1.jpg?dl=0",
          title: "Promolist 1",
          redirectTo: "/",
        },
        {
          id: 2,
          src: "https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0",
          title: "Promolist 2",
          redirectTo: "/",
        },
        {
          id: 3,
          src: "https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0",
          title: "Promolist 3",
          redirectTo: "/",
        },
        {
          id: 4,
          src: "https://www.dl.dropboxusercontent.com/s/opnbvo88evwmx42/promolist-4.jpg?dl=0",
          title: "Promolist 4",
          redirectTo: "/",
        },
        {
          id: 5,
          src: "https://www.dl.dropboxusercontent.com/s/8pbe9yyk598kri0/promolist-5.jpg?dl=0",
          title: "Promolist 5",
          redirectTo: "/",
        },
        {
          id: 6,
          src: "https://www.dl.dropboxusercontent.com/s/28erpcxi5ragbeg/promolist-1.jpg?dl=0",
          title: "Promolist 1",
          redirectTo: "/",
        },
        {
          id: 7,
          src: "https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0",
          title: "Promolist 2",
          redirectTo: "/",
        },
        {
          id: 8,
          src: "https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0",
          title: "Promolist 3",
          redirectTo: "/",
        },
        {
          id: 9,
          src: "https://www.dl.dropboxusercontent.com/s/opnbvo88evwmx42/promolist-4.jpg?dl=0",
          title: "Promolist 4",
          redirectTo: "/",
        },
        {
          id: 10,
          src: "https://www.dl.dropboxusercontent.com/s/8pbe9yyk598kri0/promolist-5.jpg?dl=0",
          title: "Promolist 5",
          redirectTo: "/",
        },
        {
          id: 11,
          src: "https://www.dl.dropboxusercontent.com/s/28erpcxi5ragbeg/promolist-1.jpg?dl=0",
          title: "Promolist 1",
          redirectTo: "/",
        },
        {
          id: 12,
          src: "https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0",
          title: "Promolist 2",
          redirectTo: "/",
        },
        {
          id: 13,
          src: "https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0",
          title: "Promolist 3",
          redirectTo: "/",
        },
        {
          id: 14,
          src: "https://www.dl.dropboxusercontent.com/s/opnbvo88evwmx42/promolist-4.jpg?dl=0",
          title: "Promolist 4",
          redirectTo: "/",
        },
        {
          id: 15,
          src: "https://www.dl.dropboxusercontent.com/s/8pbe9yyk598kri0/promolist-5.jpg?dl=0",
          title: "Promolist 5",
          redirectTo: "/",
        },
      ],
    },
    {
      type: PRODUCT_GRID,
      heading: "Products",
      showText: true,
      data: [
        {
          id: 1,
          src: "https://www.dl.dropboxusercontent.com/s/28erpcxi5ragbeg/promolist-1.jpg?dl=0",
          title: "Promolist 1",
          price: "₹100",
        },
        {
          id: 2,
          src: "https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0",
          title: "Promolist 2",
          price: "₹100",
        },
        {
          id: 3,
          src: "https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0",
          title: "Promolist 3",
          price: "₹100",
        },
        {
          id: 4,
          src: "https://www.dl.dropboxusercontent.com/s/opnbvo88evwmx42/promolist-4.jpg?dl=0",
          title: "Promolist 4",
          price: "₹100",
        },
        {
          id: 5,
          src: "https://www.dl.dropboxusercontent.com/s/8pbe9yyk598kri0/promolist-5.jpg?dl=0",
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
