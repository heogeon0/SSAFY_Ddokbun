import React, { useEffect, useRef, useState } from "react";
import { ShopHoverNav, Slider, Wrapper } from "./styles";
import Bag from "../../assets/commerce/bag.svg";
import User from "../../assets/commerce/user.svg";
import Search from "../../assets/icon/search.svg";
import Dot from "../../assets/icon/dot.svg";
import Image from "next/image";
import Link from "next/link";
import Plant1 from "../../assets/commerce/plants/plant1.jpg";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NabAni, NabCategoryAni } from "../../styles/animations/animation";
import NavCard from "../NavCard";
import Starter from "../../assets/commerce/plants/starter-banner.jpg";
import Pet from "../../assets/commerce/plants/pet-banner.jpg";
import Home from "../../assets/commerce/plants/home-banner.jpg";
import Air from "../../assets/commerce/plants/air-banner.jpg";
import Survey from "../../assets/commerce/plants/survey-banner.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";

const Navbar = () => {
  const token = getCookie("token") as string;
  const ref = useRef<HTMLDivElement>(null);
  const userseq = useSelector((state: RootState) => state.authSlice.userSeq);
  const carts = useSelector((state: RootState) => state.cartList);
  const [slider, setSlider] = useState(false);
  const [shopCate, setShopCate] = useState(false);
  const [shopHover, setShopHover] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleButton = () => {
    if (ref.current?.classList.contains("open")) {
      ref.current.classList.remove("open");
      setSlider(false);
    } else {
      ref.current?.classList.add("open");
      setSlider(true);
    }
    // ref.current.classList.value.toggle("open");
  };

  const handleShopCate = () => {
    setShopCate(val => !val);
  };

  const handleShopEnter = () => {
    setShopHover(true);
  };
  const handleShopLeave = () => {
    setShopHover(false);
  };

  const route = useRouter();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove("open");
    }
    if (slider === true) {
      setSlider(false);
      setShopCate(false);
    }
    setShopHover(false);
  }, [route]);

  useEffect(() => {
    setCartCount(0);
    carts.forEach(item => {
      if (item) {
        setCartCount(val => val + 1);
      }
    });
  }, [carts]);

  const shopHoverAni = {
    hover: {
      opacity: 1,
    },
  };

  const click = () => {
    Swal.fire({
      title: "???????????? ????????? ??????????????????.",
      text: "????????? ???????????? ????????????????",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "??????",
      cancelButtonText: "??????",
    }).then(result => {
      if (result.isConfirmed) {
        window.location.replace("/welcome");
      }
      if (result.isDismissed) {
      }
    });
  };

  return (
    <>
      <Wrapper>
        <div className="wrapper">
          <div className="icon-wrapper">
            <div ref={ref} id="nav-icon2" onClick={toggleButton}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="logo">
            <Link href={"/commerce"}>Ddokbbun</Link>
          </div>
          <div className="menu-wrap">
            {token ? (
              <Link href={`/manage/${userseq}`}>
                <a>IoT</a>
              </Link>
            ) : (
              <button onClick={click}>
                <a>IoT</a>
              </button>
            )}

            <div onMouseEnter={handleShopEnter} onMouseLeave={handleShopLeave}>
              Shopping ???{" "}
            </div>
          </div>

          <div className="img-wrap">
            <Link href={"/search"}>
              <Search />
            </Link>

            {token ? (
              <Link href={"/commerce/cart"}>
                <div className="bag-wrap">
                  {cartCount ? <span>{cartCount}</span> : null}
                  <Bag />
                </div>
              </Link>
            ) : (
              <div className="bag-wrap" onClick={click}>
                <Bag />
              </div>
            )}
            {token ? (
              <Link href={`/mypage/${userseq}`}>
                <User viewBox="0 0 512 512" />
              </Link>
            ) : (
              <button onClick={click}>
                <User viewBox="0 0 512 512" />
              </button>
            )}
          </div>
        </div>
        <ShopHoverNav
          initial={false}
          variants={shopHoverAni}
          animate={{ display: shopHover ? "block" : "none" }}
          onMouseEnter={handleShopEnter}
          onMouseLeave={handleShopLeave}
        >
          <div className="grid-wrapper">
            <div className="gird-left">
              <Image src={Plant1} layout="fill" objectFit="cover" />
              <h3>Smart Plant Pot</h3>
              <p>
                ????????? ???????????? ????????? <br />
                ????????? ????????? ???????????????
              </p>
              <Link href={"/commerce"}>
                <div className="button">
                  <a>????????????</a>
                </div>
              </Link>
            </div>
            <Link href={"/commerce/list/????????????"}>
              <div className="grid-col">
                <NavCard
                  source={Starter}
                  title="Beginner"
                  content="?????? ???????????? ?????? ????????? ??????"
                />
              </div>
            </Link>
            <Link href={"/commerce/list/????????????"}>
              <div className="grid-col">
                <NavCard
                  source={Home}
                  title="Home Decoration"
                  content="????????? ?????? ???????????????"
                />
              </div>
            </Link>
            <Link href={"/commerce/list/????????????"}>
              <div className="grid-col">
                <NavCard
                  source={Pet}
                  title="Gardening with Pets"
                  content="??????????????? ???????????? ?????????"
                />
              </div>
            </Link>
            <Link href={"/commerce/list/????????????"}>
              <div className="grid-col">
                <NavCard
                  source={Air}
                  title="Air Purifying Plants"
                  content="??????????????? ???????????? ?????????"
                />
              </div>
            </Link>
            <Link href={"/commerce/survey"}>
              <div className="grid-bottom">
                <Image src={Survey} layout="fill" objectFit="cover" />
                <div className="contents">
                  <h1>
                    ????????? ????????? ?????? <span>????????? ??????</span>??? ?????????????????????
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </ShopHoverNav>
      </Wrapper>

      <Slider
        initial={false}
        variants={NabAni}
        animate={slider ? "open" : "closed"}
      >
        {/* <Slider> */}
        <div className="menu">
          {token ? (
            <Link href={`/manage/${userseq}`}>
              <div className="title">IoT</div>
            </Link>
          ) : (
            <button onClick={click}>
              <div className="title">IoT</div>
            </button>
          )}

          <div className="title" onClick={handleShopCate}>
            Shopping
          </div>

          <motion.div
            className="drop-down"
            variants={NabCategoryAni}
            animate={shopCate ? "open" : "closed"}
          >
            <Link href={"/commerce"}>
              <p>Commerce Home</p>
            </Link>
            <Link href={"/commerce/list/????????????"}>
              <span>
                <Dot /> ????????????
              </span>
            </Link>
            <Link href={"/commerce/list/????????????"}>
              <span>
                <Dot /> ????????????
              </span>
            </Link>
            <Link href={"/commerce/list/????????????"}>
              <span>
                <Dot /> ????????????
              </span>
            </Link>
            <Link href={"/commerce/list/????????????"}>
              <span>
                <Dot /> ????????????
              </span>
            </Link>
            <Link href={"/commerce"}>
              <p>Recommendation</p>
            </Link>
            <Link href={"/commerce/survey"}>
              <span>
                <Dot /> ?????? ?????? ????????????
              </span>
            </Link>
          </motion.div>

          <Link href={"/search"}>
            <div className="title">Search</div>
          </Link>

          {token ? (
            <Link href={`/mypage/${userseq}`}>
              <div className="title">MyPage</div>
            </Link>
          ) : (
            <button onClick={click}>
              <div className="title">MyPage</div>
            </button>
          )}

          {!token ? (
            <Link href={`/welcome`}>
              <div className="title">Login</div>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </Slider>
    </>
  );
};

export default Navbar;
