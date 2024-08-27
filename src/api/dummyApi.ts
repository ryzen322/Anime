import { TypePlan } from "../components/SubscriptionList";

export const dummyApi = [
  {
    category: "Play",
    id: 1,
    item: [
      {
        id: 1,
        name: "Fortnine",
      },
      {
        id: 2,
        name: "Rocket League",
      },
      {
        id: 3,
        name: "Fall Guys",
      },
    ],
  },
  {
    category: "Discovery",
    id: 2,
    item: [
      {
        id: 1,
        name: "Epic Games Store",
      },
      {
        id: 2,
        name: "Fab",
      },
      {
        id: 3,
        name: "Sketchfab",
      },
      {
        id: 4,
        name: "ArtStation",
      },
    ],
  },
  {
    category: "Create",
    id: 3,
    item: [
      {
        id: 1,
        name: "Unreal Engine",
      },
      {
        id: 2,
        name: "Create in Fortnite",
      },
      {
        id: 3,
        name: "MetaHuman",
      },
      {
        id: 4,
        name: "Twinmotion",
      },
      {
        id: 5,
        name: "RealityScan",
      },
      {
        id: 6,
        name: "RealityCapture",
      },
      {
        id: 7,
        name: "Epic Online Services",
      },
      {
        id: 8,
        name: "Publish on Epic Games Store",
      },
      {
        id: 9,
        name: "Kinds Web Services",
      },
      {
        id: 10,
        name: "Developer Commnunity",
      },
    ],
  },
];
export const dummyLoadingData = Array.from({ length: 20 }, (_, index) => {
  return {
    id: index + 1,
  };
});

export const subcriptionPlan: TypePlan[] = [
  {
    id: "1",
    description: [
      "4k + HDR",
      "4 mobile-only Premium account",
      "One-time payment",
      "it can be canceled anytime",
      "Community Support",
    ],
    discount: 0.15,
    plan: "Annual Standard",
    price: 499,
  },
  {
    id: "2",
    description: [
      "1080p",
      "2 mobile-only Premium acc",
      "it can be canceled anytime",
      "Community Support",
    ],
    discount: 0.25,
    plan: "Quarterly Standard",
    price: 237,
  },
  {
    id: "3",
    description: [
      "720p",
      "Renewed automatically",
      "it can be canceled anytime",
      "Community Support",
    ],
    discount: 0.25,
    plan: "Monthly Standard",
    price: 200,
  },
  {
    id: "4",
    description: [
      "480p",
      "1 verified Premium account",
      "Discount for eligible students",
      "Subscribe or one-time payment",
    ],
    discount: 0.4,
    plan: "Student",
    price: 139,
  },
];
