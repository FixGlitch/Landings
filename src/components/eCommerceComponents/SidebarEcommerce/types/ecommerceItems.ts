interface NavItem {
  href: string;
  label: string;
}

interface SidebarItem {
  label?: string;
  value?: string;
}

const ecommerceItems: NavItem[] = [
  { href: "/e-commerce/t-shirt", label: "T-Shirt" },
  { href: "/e-commerce/sweatshirt", label: "Sweatshirt" },
  { href: "/e-commerce/dress", label: "Dress" },
  { href: "/e-commerce/pants-and-skirt", label: "Pants and Skirt" },
  { href: "/e-commerce/sweater", label: "Sweater" },
  { href: "/e-commerce/stuff-and-accessories", label: "Stuff and Accessories" },
];

const typeItems: SidebarItem[] = [
  { label: "Basic", value: "basic" },
  { label: "Pattern", value: "pattern" },
  { label: "Hoodie", value: "hoodie" },
  { label: "Zipper", value: "zipper" },
  { label: "Oversize", value: "oversize" },
];

const colorsItems: SidebarItem[] = [
  { label: "Black", value: "black" },
  { label: "Red", value: "red" },
  { label: "Brown", value: "brown" },
  { label: "Multicolour", value: "multicolour" },
  { label: "Grey", value: "grey" },
];

const sizeItems: SidebarItem[] = [
  { label: "S", value: "s" },
  { label: "M", value: "m" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
  { label: "XXL", value: "xxl" },
];

export interface PriceRange {
  min: number;
  max: number;
}

const priceFilter: PriceRange = {
  min: 0,
  max: 1000,
};

export { ecommerceItems, typeItems, colorsItems, sizeItems, priceFilter };
