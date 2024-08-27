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
      "Renewed automatically",
      "it can be canceled anytime",
      "Community Support",
    ],
    discount: 0.15,
    plan: "Annual Standard",
    price: 499,
  },
];
