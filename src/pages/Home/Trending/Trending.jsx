import React, { useState } from "react";
import "./Trending.css";
import { Link } from "react-router";
import useLang from "../../../hooks/useLang";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "../../../components/ProductCard/ProductCard";
import SmallProductCard from "../../../components/SmallProductCard/SmallProductCard";
// These products details will come from database
const products = [
  {
    id: 1,
    name: "Walton No-Frost Refrigerator 660L",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/98443f37-4b1a-4cb9-ad9b-f36d26b949c9.jpeg",
    price: 18000,
  },
  {
    id: 2,
    name: "Walton No-Frost Refrigerator 660L",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/efaad78d-5e27-4c2a-9472-48258ae7c03b.jpeg",
    price: 18000,
  },
  {
    id: 3,
    name: "Walton No-Frost Refrigerator 660L",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/c4c77c95-5a07-4085-ae37-8ad66740675f.jpeg",
    price: 18000,
  },
  {
    id: 4,
    name: "Walton No-Frost Refrigerator 660L",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/bb1229b3-4f2d-4e2b-b298-ca04282579ab.jpeg",
    price: 18000,
  },
  {
    id: 5,
    name: "Walton No-Frost Refrigerator 660L",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/ff71a261-8310-4733-8a81-6fb5abc58ea4.png",
    price: 18000,
  },
  {
    id: 6,
    name: "Walton No-Frost Refrigerator 660L",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/abe5a83f-48f0-4168-bebf-5412328d41f2.jpeg",
    price: 18000,
  },
];
const Trending = () => {
  const { isBangla } = useLang();
  // These categories will come from the database
  const categories = [
    {
      id: 1,
      link: "/",
      image:
        "https://cdn.waltonplaza.com.bd/9976c403-0341-47b6-a317-2e845f620825.png",
      name: isBangla ? "হোম এপ্লায়েন্স" : "Home Appliances",
      subCategories: ["sub cat 1", "sub cat 2", "sub cat 3"],
    },
    {
      id: 2,
      link: "/",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "কিচেন ওয়্যার" : "Kitchen Wear",
      subCategories: ["sub cat 4", "sub cat 5", "sub cat 6"],
    },
    {
      id: 3,
      link: "/",
      image:
        "https://cdn.waltonplaza.com.bd/7bb9040f-8233-47d3-a531-ebf4300d7544.png",
      name: isBangla ? "ক্রোকারিজ" : "Crockeries",
      subCategories: ["sub cat 7", "sub cat 8", "sub cat 9"],
    },
    {
      id: 4,
      link: "/",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "প্লাস্টিক" : "Plastic",
      subCategories: ["sub cat 11", "sub cat 12", "sub cat 13"],
    },
    {
      id: 5,
      link: "/",
      image:
        "https://cdn.waltonplaza.com.bd/29f37d46-6308-4daa-b43e-e50d1e1f537d.png",
      name: isBangla ? "কম্পিউটার" : "Computer",
      subCategories: ["sub cat 12", "sub cat 15", "sub cat 16"],
    },
    {
      id: 6,
      link: "/",
      image: "https://i.ibb.co.com/4R7Pt7jn/Keyboard-Wire.png",
      name: isBangla ? "কম্পিউটার এসসেসোরিস" : "Computer Accessories",
      subCategories: ["sub cat 1a", "sub cat 2d", "sub cat 3f"],
    },
    {
      id: 7,
      link: "/",
      image:
        "https://cdn.waltonplaza.com.bd/1736e5f5-9252-40b8-9c0d-09eb3da95853.png",
      name: isBangla ? "মোবাইল" : "Mobile",
      subCategories: [],
    },
    {
      id: 8,
      link: "/",
      image: "https://i.ibb.co.com/TDPq9Rzt/61-ZHv0-v-PRL-UF1000-1000-QL80.jpg",
      name: isBangla ? "মোবাইল এসসেসোরিস" : "Mobile Accessories",
      subCategories: ["sub cat 1k", "sub cat d2", "sub cat g3"],
    },
    {
      id: 9,
      link: "/",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "গ্র্যাডজেটস" : "Gadgets",
      subCategories: ["sub cat b1", "sub cat h2", "sub cat j3"],
    },
  ];
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <section id="trending">
      <div
        onMouseOver={() => setIsSideOpen(true)}
        onMouseOut={() => setIsSideOpen(false)}
        className="categories"
      >
        <h5>Categories</h5>
        <div className="categoriesList">
          {categories?.map((category) => (
            <Link
              onMouseOver={() =>
                setSelectedSubCategories(category.subCategories)
              }
              key={category.id}
            >
              <div className="innerCat">
                <img src={category.image} alt={category.name} />
                {category.name}
              </div>
              {category.subCategories.length > 0 && <MdKeyboardArrowRight />}
            </Link>
          ))}
        </div>
        {isSideOpen && selectedSubCategories.length > 0 && (
          <div className="subCategories">
            {selectedSubCategories?.map((cat, index) => (
              <Link key={index}>{cat}</Link>
            ))}
          </div>
        )}
      </div>
      {/* all trending products */}
      <div className="trendingProducts">
        {products?.map((product) => (
          <SmallProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
