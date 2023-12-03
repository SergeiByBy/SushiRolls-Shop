import React from "react";
import Logo from "../Header/Logo/Logo";
import "./Footer.style.css";
// import PolitSave from "./PolicalSave";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_part flex">
            <Logo />
            <div className="footer_icons">
              <ul>
                <li>
                  <a target="blank" href="https://vk.com/skushajsushi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="VK"
                      role="img"
                      viewBox="0 0 512 512"
                      width="64px"
                      height="64px"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <rect
                          width="512"
                          height="512"
                          rx="15%"
                          fill="#5281b8"
                        ></rect>
                        <path
                          fill="#ffffff"
                          d="M274 363c5-1 14-3 14-15 0 0-1-30 13-34s32 29 51 42c14 9 25 8 25 8l51-1s26-2 14-23c-1-2-9-15-39-42-31-30-26-25 11-76 23-31 33-50 30-57-4-7-20-6-20-6h-57c-6 0-9 1-12 6 0 0-9 25-21 45-25 43-35 45-40 42-9-5-7-24-7-37 0-45 7-61-13-65-13-2-59-4-73 3-7 4-11 11-8 12 3 0 12 1 17 7 8 13 9 75-2 81-15 11-53-62-62-86-2-6-5-7-12-9H79c-6 0-15 1-11 13 27 56 83 193 184 192z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://t.me/s/instagram">
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect
                          x="2"
                          y="2"
                          width="28"
                          height="28"
                          rx="6"
                          fill="url(#paint0_radial_87_7153)"
                        ></rect>{" "}
                        <rect
                          x="2"
                          y="2"
                          width="28"
                          height="28"
                          rx="6"
                          fill="url(#paint1_radial_87_7153)"
                        ></rect>{" "}
                        <rect
                          x="2"
                          y="2"
                          width="28"
                          height="28"
                          rx="6"
                          fill="url(#paint2_radial_87_7153)"
                        ></rect>{" "}
                        <path
                          d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                          fill="white"
                        ></path>{" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                          fill="white"
                        ></path>{" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                          fill="white"
                        ></path>{" "}
                        <defs>
                          {" "}
                          <radialGradient
                            id="paint0_radial_87_7153"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                          >
                            {" "}
                            <stop stopColor="#B13589"></stop>{" "}
                            <stop offset="0.79309" stopColor="#C62F94"></stop>{" "}
                            <stop offset="1" stopColor="#8A3AC8"></stop>{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint1_radial_87_7153"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                          >
                            {" "}
                            <stop stopColor="#E0E8B7"></stop>{" "}
                            <stop offset="0.444662" stopColor="#FB8A2E"></stop>{" "}
                            <stop offset="0.71474" stopColor="#E2425C"></stop>{" "}
                            <stop
                              offset="1"
                              stopColor="#E2425C"
                              stopOpacity="0"
                            ></stop>{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint2_radial_87_7153"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                          >
                            {" "}
                            <stop
                              offset="0.156701"
                              stopColor="#406ADC"
                            ></stop>{" "}
                            <stop offset="0.467799" stopColor="#6A45BE"></stop>{" "}
                            <stop
                              offset="1"
                              stopColor="#6A45BE"
                              stopOpacity="0"
                            ></stop>{" "}
                          </radialGradient>{" "}
                        </defs>{" "}
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_part flex">
            <h2>О продукте</h2>
            <ul>
              <li>
                <a href=".">Продуктовая пора</a>
              </li>
              <li>
                <a href=".">Статья про хрень</a>
              </li>
              <li>
                <a href=".">Статья про хрень</a>
              </li>
            </ul>
          </div>
          <div className="footer_part flex">
            <h2>О компании</h2>
            <ul>
              <li>
                <a href=".">Продуктовая пора</a>
              </li>
              <li>
                <a href=".">Статья про хрень</a>
              </li>
              <li>
                <a href=".">Статья про хрень</a>
              </li>
            </ul>
          </div>
          <div className="footer_part flex">
            <h2>Рекомендации</h2>
            <ul>
              <li>
                <a href=".">Продуктовая пора</a>
              </li>
              <li>
                <a href=".">Статья про хрень</a>
              </li>
              <li>
                <a href=".">Статья про хрень</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <p>2017 - 2023 Скушай-суши ©</p>
          <p>
            <Link to="/PolitSave">Политика конфиденциальности</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
