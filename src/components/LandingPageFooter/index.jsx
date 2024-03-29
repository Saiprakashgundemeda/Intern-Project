import React from "react";
import { useNavigate } from "react-router-dom";
import { Img, Text } from "components";

const LandingPageFooter = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]">
                <Img
                  className="h-10 w-10"
                  src="images/db_logo.png"
                  alt="home_One"
                  style={{cursor: "pointer"}}
                />
                <Text
                  className="text-orange-A700 text-xl w-auto"
                  size="txtMarkoOneRegular20"
                >
                  Dirghayu Bharat
                </Text>
              </div>
              <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full">
                <Text
                  className="leading-[160.00%] text-base text-gray-900"
                  size="txtManropeSemiBold16"
                >
                  <>
                    Kunj Tilak Nagar,Rukanpura Manoka,
                    <br />
                    Patna Bihar-800014
                  </>
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    +91 75200 91334
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                    style={{cursor: "pointer"}}
                  >
                    dirghayubharathelp@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_plus.svg"
                      alt="plus"
                      style={{cursor: "pointer"}}
                    />
                  </div>
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                      style={{cursor: "pointer"}}
                    />
                  </div>
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_instagram_orange_a700_30x30.svg"
                    alt="instagram"
                    style={{cursor: "pointer"}}
                  />
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                    style={{cursor: "pointer"}}
                  />
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_clock_orange_a700.svg"
                      alt="clock"
                      style={{cursor: "pointer"}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Features
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/AgentList")}
                  >
                    Vendors
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Information
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/AboutUs")}
                  >
                    About Us
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/AgentList")}
                  >
                    Vendors
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Documentation{" "}
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/BlogPage")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/FAQ")}
                  >
                    FAQ
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/PrivacyPolicy")}
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/TermsAndConditions")}
                  >
                    Terms & Conditions
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Others
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                  >
                    Log in
                  </Text>
                  
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    style={{ cursor: "pointer" }}
                  >
                   Forgot Password
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="text-base text-gray-900 w-full"
            size="txtManropeSemiBold16"
            onClick={() => window.open("https://divisoftsolutions.in/")}
            style={{ cursor: "pointer" }}
          >
            © Copyright {new Date().getFullYear()} | Divisoft Solutions. All
            Rights Reserved
          </Text>
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;
