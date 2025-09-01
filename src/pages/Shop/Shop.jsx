import React from "react";
import "./Shop.css";
import Container from "../../components/Container/Container";
import Navigation from "../../components/Navigation/Navigation";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import PriceRange from "./PriceRange/PriceRange";
// these data will come from database
const products = [
  {
    id: 1,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/98443f37-4b1a-4cb9-ad9b-f36d26b949c9.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 2,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/efaad78d-5e27-4c2a-9472-48258ae7c03b.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 3,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/c4c77c95-5a07-4085-ae37-8ad66740675f.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },

  {
    id: 5,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/ff71a261-8310-4733-8a81-6fb5abc58ea4.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 6,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/5a64a3ed-0b43-406c-a288-ae1883d4b200.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 7,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/abe5a83f-48f0-4168-bebf-5412328d41f2.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 8,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/e67a5eba-6949-4ea1-b523-4b426761b513.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },

  {
    id: 9,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/61001ad4-5adf-4820-9d9d-bd5e0c589104.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 10,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/3f89abf5-17c8-4537-8fd7-c138051f3016.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 11,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/f155ddbb-a08c-42ca-baee-17807826ccc7.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 12,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/95e48ba2-04c2-4e60-85d6-eff32863413b.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },

  {
    id: 13,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/9f7bc87f-3613-4818-9d8c-d482430d2ad0.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 14,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/8d17aa27-2438-4548-b651-a33a6516d6af.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 15,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/8ddb00d6-b898-4263-868e-2ddd2485ca73.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 16,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/681541f7-f986-4d4b-bd8f-78b857341f0f.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },

  {
    id: 17,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/a19c15a6-60a9-4b0a-956d-04d12761609e.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
];
const Shop = () => {
  return (
    <Container>
      <div id="shop">
        {/* Filter */}
        <div className="shopLeft">
          <div className="filterCheckboxContainer">
            <FilterCheckbox
              title="BRAND"
              inputs={[
                { label: "Nano-Tech", value: "nano-tech" },
                { label: "ACC", value: "acc" },
              ]}
            />
            {/* Price range slider */}
            <PriceRange />
            <FilterCheckbox
              title="COOLING CAPACITY (TON)"
              inputs={[
                { label: "0.75 Ton", value: "0.75" },
                { label: "1 Ton", value: "1" },
                { label: "1.25 Ton", value: "1.25" },
                { label: "2 Ton", value: "2" },
              ]}
            />
            <FilterCheckbox
              title="SERIES NAME"
              inputs={[
                { label: "Inverna", value: "inverna" },
                { label: "Oceanus", value: "oceanus" },
                { label: "Diamond", value: "Diamond" },
                { label: "Avian", value: "avian" },
                { label: "Venturi", value: "Venturi" },
              ]}
            />
            <FilterCheckbox
              title="TECHNOLOGY"
              inputs={[
                { label: "ProGen Inverter", value: "ProGen Inverter" },
                {
                  label: "Intelligent Inverter",
                  value: "Intelligent Inverter",
                },
                { label: "Non-Inverter", value: "Non-Inverter" },
                { label: "Twinfold Inverter", value: "Twinfold Inverter" },
              ]}
            />
          </div>
        </div>
        {/* Products */}
        <div className="shopRight">
          {/* Navigation */}
          <Navigation
            title={"Split AC"}
            links={[
              { label: "Home", href: "/" },
              { label: "Air Conditioner", href: "/" },
            ]}
          />
          {/* Result and Sort dropdown */}
          <div className="resultAndSort">
            <div className="filterResultCount">
              <img src="/icon-wish.webp" alt="result icon" /> <b>128</b> items
              found in Split AC
            </div>
            <div className="filterInputSort">
              <img src="/sort.webp" alt="sort icon" /> <b>Sort By</b>
              <select className="filterSelect" name="filter" id="">
                <option value="best_match">Best Match</option>
                <option value="price_hl">Price High to Low</option>
                <option value="price_lh">Price Low to High</option>
              </select>
            </div>
          </div>
          {/* Main Product Section */}
          <div className="shopProductsContainer">
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
