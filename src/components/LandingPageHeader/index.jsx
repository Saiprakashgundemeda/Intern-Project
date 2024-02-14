import React, { useEffect, useState } from "react";
import { Button, Img, List, Text } from "components";
import { useNavigate } from "react-router-dom";
import { checkIsLoggedIn, Helper } from "utils";

const LandingPageHeader = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const onLoginClick = () => {
    window.location.href = Helper.appConfig.adminWebURL;
  };

  const onLogoutClick = () => {
    localStorage.clear();
    window.location.href = Helper.appConfig.adminWebURL;
  };

  const onDashboardClick = () => {
    window.location.href = `${Helper.appConfig.adminWebURL}views/dashboard`;
  };

  const onSignupClick = () => {
    window.location.href = `${Helper.appConfig.adminWebURL}signUp`;
  };

  useEffect(() => {
    const { user, authToken } = checkIsLoggedIn();
    if (user && authToken) {
      setIsLoggedIn(true);
      localStorage.setItem("user", user);
      localStorage.setItem("authToken", authToken);
    }
  }, []);

  return (
    <>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img className="h-10 w-10" src="images/db_logo.png" alt="home" />
              <Text
                className="text-orange-A700 text-xl w-auto"
                size="txtMarkoOneRegular20"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Dirghayu Bharat
              </Text>
            </div>
            <div
              className="mobile-menu"
              onClick={() => setIsNavOpen((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <span
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </span>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <span
                    onClick={() => navigate("/listing")}
                    style={{ cursor: "pointer" }}
                  >
                    Property
                  </span>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <span
                    onClick={() => navigate("/agentlist")}
                    style={{ cursor: "pointer" }}
                  >
                    Vendors
                  </span>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <span
                    onClick={() => navigate("/aboutus")}
                    style={{ cursor: "pointer" }}
                  >
                    About Us
                  </span>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <span
                    onClick={() => navigate("/contactpage")}
                    style={{ cursor: "pointer" }}
                  >
                    Contact Us
                  </span>
                </li>
                {isLoggedIn ? (
                  <>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <span onClick={onDashboardClick} style={{ cursor: "pointer" }}>
                        Dashboard
                      </span>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <span onClick={onLogoutClick} style={{ cursor: "pointer" }}>
                        Log out
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <span onClick={onSignupClick} style={{ cursor: "pointer" }}>
                        Signup
                      </span>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <span onClick={onLoginClick} style={{ cursor: "pointer" }}>
                        Log in
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-3"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-1.5 items-start">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-start">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/listing")}
                >
                  Property
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-start">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/agentlist")}
                >
                  Vendor
                </Text>
              </div>
            </List>
            <Text
              className="text-base text-center text-gray-900 w-auto"
              size="txtManropeSemiBold16"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/aboutus")}
            >
              About Us
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/contactpage")}
            >
              Contact Us
            </Text>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            {isLoggedIn ? (
              <>
                <Button
                  onClick={onDashboardClick}
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-2"
                      src="images/img_user.svg"
                      alt="signup"
                    />
                  }
                >
                  <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                    Dashboard
                  </div>
                </Button>

                <Button
                  onClick={onLogoutClick}
                  className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full"
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={onSignupClick}
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-2"
                      src="images/img_user.svg"
                      alt="signup"
                    />
                  }
                >
                  <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                    Signup
                  </div>
                </Button>
                <Button
                  onClick={onLoginClick}
                  className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full"
                >
                  Log in
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
