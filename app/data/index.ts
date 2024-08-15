export enum Vendor {
  Alphi = "Alphi",
  Lmbrjk = "Lmbrjk",
  Mal = "Mal",
  Six = "Six",
  Squiggle = "Squiggle",
}

export enum Category {
  All = "All",
  Accessories = "Accessories",
  Clothing = "Clothing",
  Home = "Home",
}

export interface ItemData {
  id: number;
  title: string;
  price: number;
  vendor: Vendor;
  category: Category;
  photoResId: string;
  isPhotoPortrait?: boolean;
}

export function getVendorResId(vendor: Vendor): string {
  switch (vendor) {
    case Vendor.Alphi:
      return "logo_alphi";
    case Vendor.Lmbrjk:
      return "logo_lmb";
    case Vendor.Mal:
      return "logo_mal";
    case Vendor.Six:
      return "logo_6";
    default:
      return "logo_squiggle";
  }
}

export const SampleItems: ItemData[] = [
  {
    id: 0,
    title: "Vagabond sack",
    price: 120,
    vendor: Vendor.Squiggle,
    category: Category.Accessories,
    photoResId: "photo_0",
  },
  {
    id: 1,
    title: "Stella sunglasses",
    price: 58,
    vendor: Vendor.Mal,
    category: Category.Accessories,
    photoResId: "photo_1",
  },
  {
    id: 2,
    title: "Whitney belt",
    price: 35,
    vendor: Vendor.Lmbrjk,
    category: Category.Accessories,
    photoResId: "photo_2",
  },
  {
    id: 3,
    title: "Garden stand",
    price: 98,
    vendor: Vendor.Alphi,
    category: Category.Accessories,
    photoResId: "photo_3",
  },
  {
    id: 4,
    title: "Strut earrings",
    price: 34,
    vendor: Vendor.Six,
    category: Category.Accessories,
    photoResId: "photo_4",
  },
  {
    id: 5,
    title: "Varsity socks",
    price: 12,
    vendor: Vendor.Lmbrjk,
    category: Category.Accessories,
    photoResId: "photo_5",
  },
  {
    id: 6,
    title: "Weave key ring",
    price: 16,
    vendor: Vendor.Six,
    category: Category.Accessories,
    photoResId: "photo_6",
  },
  {
    id: 7,
    title: "Gatsby hat",
    price: 40,
    vendor: Vendor.Six,
    category: Category.Accessories,
    photoResId: "photo_7",
  },
  {
    id: 8,
    title: "Shrug bag",
    price: 198,
    vendor: Vendor.Squiggle,
    category: Category.Accessories,
    photoResId: "photo_8",
  },
  {
    id: 9,
    title: "Gilt desk trio",
    price: 58,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photoResId: "photo_9",
  },
  {
    id: 10,
    title: "Copper wire rack",
    price: 18,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photoResId: "photo_10",
  },
  {
    id: 11,
    title: "Soothe ceramic set",
    price: 28,
    vendor: Vendor.Mal,
    category: Category.Home,
    photoResId: "photo_11",
  },
  {
    id: 12,
    title: "Hurrahs tea set",
    price: 34,
    vendor: Vendor.Six,
    category: Category.Home,
    photoResId: "photo_12",
  },
  {
    id: 13,
    title: "Blue stone mug",
    price: 18,
    vendor: Vendor.Mal,
    category: Category.Home,
    photoResId: "photo_13",
  },
  {
    id: 14,
    title: "Rainwater tray",
    price: 27,
    vendor: Vendor.Six,
    category: Category.Home,
    photoResId: "photo_14",
  },
  {
    id: 15,
    title: "Chambray napkins",
    price: 16,
    vendor: Vendor.Six,
    category: Category.Home,
    photoResId: "photo_15",
  },
  {
    id: 16,
    title: "Succulent planters",
    price: 16,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photoResId: "photo_16",
  },
  {
    id: 17,
    title: "Quartet table",
    price: 175,
    vendor: Vendor.Squiggle,
    category: Category.Home,
    photoResId: "photo_17",
  },
  {
    id: 18,
    title: "Kitchen quattro",
    price: 129,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photoResId: "photo_18",
  },
  {
    id: 19,
    title: "Clay sweater",
    price: 48,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_19",
  },
  {
    id: 20,
    title: "Sea tunic",
    price: 45,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_20",
  },
  {
    id: 21,
    title: "Plaster tunic",
    price: 38,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_21",
    isPhotoPortrait: true,
  },
  {
    id: 22,
    title: "White pinstripe shirt",
    price: 70,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_22",
    isPhotoPortrait: true,
  },
  {
    id: 23,
    title: "Chambray shirt",
    price: 70,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_23",
  },
  {
    id: 24,
    title: "Seabreeze sweater",
    price: 60,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_24",
    isPhotoPortrait: true,
  },
  {
    id: 25,
    title: "Gentry jacket",
    price: 178,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_25",
  },
  {
    id: 26,
    title: "Navy trousers",
    price: 74,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_26",
    isPhotoPortrait: true,
  },
  {
    id: 27,
    title: "Walter henley white",
    price: 38,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_27",
    isPhotoPortrait: true,
  },
  {
    id: 28,
    title: "Surf and perf shirt",
    price: 48,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_28",
  },
  {
    id: 29,
    title: "Ginger scarf",
    price: 98,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_29",
  },
  {
    id: 30,
    title: "Ramona crossover",
    price: 68,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_30",
    isPhotoPortrait: true,
  },
  {
    id: 31,
    title: "Chambray shirt",
    price: 38,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_31",
  },
  {
    id: 32,
    title: "Class white collar",
    price: 58,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_32",
    isPhotoPortrait: true,
  },
  {
    id: 33,
    title: "Cerise scallop tee",
    price: 42,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_33",
  },
  {
    id: 34,
    title: "Shoulder rolls tee",
    price: 27,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_34",
    isPhotoPortrait: true,
  },
  {
    id: 35,
    title: "Grey slouch tank",
    price: 24,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_35",
    isPhotoPortrait: true,
  },
  {
    id: 36,
    title: "Sunshirt dress",
    price: 58,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_36",
    isPhotoPortrait: true,
  },
  {
    id: 37,
    title: "Fine lines tee",
    price: 58,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photoResId: "photo_37",
    isPhotoPortrait: true,
  },
];
