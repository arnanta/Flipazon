import React from "react";
import style from "./styles/HomePage.module.css";
import { Link } from "react-router-dom";
import { Cart, Favorite, Search } from "../assets/icons";
import SideBar from "../components/SideBar";
import mainImage from "../assets/main-image.png";
const HomePage = () => {
  //HomePage - design
  //navbar in the top
  //Then the page is divided into two sections - a left side bar - taking 30% width and the main feature products section - 70%
  // Let's design the navbar first and then will divide the remaining page into main section
  return (
    <div className={style.container}>
      {/*Navbar containing div - everything of navbar- separate it out to a different  */}
      <div className={style.navContainer}>
        <div className={style.section}>
          <Link to="/" className={`${style.navLink} ${style.companyName}`}>
            Flipazon
          </Link>
        </div>

        <div className={style.section}>
          <nav className={style.navbar}>
            <Link to="/home" className={style.navLink}>
              Home
            </Link>
            <Link to="/contact" className={style.navLink}>
              Contact
            </Link>
            <Link to="/about" className={style.navLink}>
              About
            </Link>
            <Link to="/signup" className={style.navLink}>
              Signup
            </Link>
          </nav>
        </div>
        <div className={style.rightMostSection}>
          <div className={style.inputWithIcon}>
            <input
              type="text"
              placeholder="What are you looking for?"
              name="serachProducts"
            />
            <Search />
          </div>
          <div className={style.otherIcons}>
            <Favorite />
            <Cart />
          </div>
        </div>
      </div>
      {/* Div containing the content section of the page - will have the whole product listing */}
      <div className={style.contentSection}>
        <div className={style.sidebar}>
          <SideBar />
        </div>
        <div className={style.mainContent}>
          <img src={mainImage} alt="Main Image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
