import * as HelperUtils from "./helper";

export const handleSectionNavigation = (id) => {
  const element = document.getElementById(id);
  const offset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const checkIsLoggedIn = () => {
  return {
    user: localStorage.getItem("user"),
    authToken: localStorage.getItem("authToken"),
  };
};

export const Helper = HelperUtils;
