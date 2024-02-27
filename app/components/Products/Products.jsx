import React from "react";
import Picture from "./ProductPicture/Picture";
import Product from "./../../../public/assets/product.png";
import Special from "./ProductPicture/Special";
import Rating from "./Rating/Rating";
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";
import "../../styles/products.scss";

const Products = () => {
  return (
    <div className="products-container">
      <div className="product-container">
        <div className="picture">
          <Special text="Best Choice" />
          <Picture number={1} name="Builder 1" image={Product} />
        </div>
        <div className="description">
          <p>
            <span className="bold">
              WixPro 72-Inch Responsive Website Builder
            </span>
            - Comprehensive Digital Creation Tool, Streamlined Design Interface
            for Professional Websites and Online Stores (Black/Blue)
          </p>
          <p className="bold">Main highlights</p>
          <p>
            [What You Get]: Recieve the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <div className="show-more">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating">
          <div className="rating-component">
            <Rating rating={9.8} comment="Exceptional" stars={5} />
          </div>
          <button>View</button>
        </div>
      </div>
      <div className="product-container">
        <div className="picture">
          <Special text="Best Value" />
          <Picture number={2} name="Builder" image={Product} />
        </div>
        <div className="description">
          <p>
            <span className="bold">
              SiteCraft 68-Inch Ultimate Web Design Studio-
            </span>
            - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
            Dynamic Websites and E-commerce Platforms (Green/White)
          </p>
          <p className="bold">Main highlights</p>
          <p>
            [What You Get]: Gain access to the SiteCraft design studio,
            featuring a robust selection of design elements, SEO optimization
            tools, and e-commerce integrations.
          </p>
          <div className="show-more">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating">
          <div className="rating-component">
            <Rating rating={9.5} comment="Exceptional" stars={4.5} />
          </div>
          <button>View</button>
        </div>
      </div>
      <div className="product-container">
        <div className="picture">
          <Picture number={3} name="Builder 1" image={Product} />
        </div>
        <div className="description">
          <p>
            <span className="bold">
              WixPro 72-Inch Responsive Website Builder
            </span>
            - Comprehensive Digital Creation Tool, Streamlined Design Interface
            for Professional Websites and Online Stores (Black/Blue)
          </p>
          <p className="bold">Main highlights</p>
          <p>
            [What You Get]: Recieve the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <div className="show-more">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating">
          <div className="rating-component">
            <Rating rating={9.3} comment="Exceptional" stars={5} />
          </div>
          <button>View</button>
        </div>
      </div>
      <div className="product-container">
        <div className="picture">
          <Picture number={4} name="CDK" image={Product} />
        </div>
        <div className="description">
          <p>
            <span className="bold">CDK Responsive Builder:</span>
            An extensive library of widgets and apps, and detailed step-by-step
            guides
          </p>
          <p className="discount">26% Off</p>
          <p className="bold">Main highlights</p>
          <div className="table-content">
            <div>
              <p>
                <span>9.9</span> Building Responsive
              </p>
              <p>
                <span>8.9</span> Cool
              </p>
              <p>
                <span>8.9</span> Docs
              </p>
            </div>
          </div>
          <div className="features">
            <p>Why we love it</p>
            <p>
              <span>
                <MdDone />
              </span>{" "}
              Documentation
            </p>
            <p>
              <span>
                <MdDone />
              </span>{" "}
              Easy Use
            </p>
            <p>
              <span>
                <MdDone />
              </span>{" "}
              Out Of Box
            </p>
          </div>

          <div className="show-more">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating">
          <div className="rating-component">
            <Rating rating={9.1} comment="Very Good" stars={4} />
          </div>
          <button>View</button>
        </div>
      </div>
    </div>
  );
  70;
};

export default Products;
