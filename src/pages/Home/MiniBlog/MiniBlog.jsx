import React from "react";
import "./MiniBlog.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const MiniBlog = () => {
  return (
    <section id="miniBlog">
      <SectionTitle title={"Top Stories"} />
      <div className="infoContainer">
        <div className="infoContent">
          <h5>Nano Tech</h5>
          <p>
            Nano Tech is the largest selling and distribution network for Walton
            products in the country. Nano Tech began its business in 2003. From
            then on, it continued to grow rapidly by providing quality service
            to customers. As of today, Nano Tech has more than 642
            well-furnished and compliance-based sales outlets and 81 service
            points all over the country. We look forward to setting up of more
            sales outlets & service points in near future to meet the rapidly
            increasing customer demand in the vast domestic market.
            “waltonplaza.com.bd” is a B2C platform for Nano Tech. It is an
            online retail system that enables anyone from anywhere in Bangladesh
            to purchase all available Walton manufactured products.
            “waltonplaza.com.bd” started its journey in 2019. The main strength
            of “waltonplaza.com.bd” is a reliable source of more than 3000
            electronics and electrical products. One can easily place an order
            through “waltonplaza.com.bd” & choose nearest delivery point to pick
            up the ordered products. Besides this, it also allows full cash on
            home delivery system for customer’s convenience. The main goal of
            “waltonplaza.com.bd” is to become a trustful & reliable online
            platform by which customers can buy genuine Walton products with
            good customer service, competitive prices & fastest delivery service
            ever.
          </p>
        </div>
        <div className="infoContent">
          <h5>Payment Support</h5>
          <p>
            Customers can pay by Cash on Delivery method after getting the
            product. It also allows a Secure Online Payment system by which
            customers can pay the charges of product & also delivery fees by
            their own. Our secure payment gateway also supports "International
            Bank Cards" & customers can place order and can pay by international
            bank cards easily & get the delivery anywhere in Bangladesh. We also
            have MFS (Mobile Financial Service) to make the payment system
            easier & more reliable. We also offer EMI facility by bank credit
            card for up to 12 months with renowned 32 banks in Bangladesh.
          </p>
        </div>
        <div className="infoContent">
          <h5>Customer Support</h5>
          <p>
            We also have an efficient customer support team. They are always
            ready to serve customers by taking queries and solving them in a
            minimal time frame. So, customers can easily connect to us by a
            simple phone call or social media messages & our customer support
            team will reply to your query at the same time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiniBlog;
