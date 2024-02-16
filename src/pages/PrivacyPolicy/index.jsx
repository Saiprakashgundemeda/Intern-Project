import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import LandingPageFooter from "components/LandingPageFooter";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-start justify-center pl-[120px] pr-[266px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                    style={{cursor: "pointer"}}
                  >
                    Privacy Policy
                  </Text>
                  <br/>
                  
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeRegular18Gray600"
                  >
                    Dirghayu Bharat ("we," "our," or "us") is committed to protecting 
                    the privacy of our users. This Privacy Policy outlines the 
                    types of information we collect, how we use it, and the choices
                     you have regarding your personal information.
                  </Text>

                  
                </div>
                
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    1. Information We Collect
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    Personal Information: We may collect personal 
                    information such as names, contact details, and other
                    identifiable information when you use our website,
                    products, or services.
                    <br/>
                    <br/>
                    Usage Information: We may collect information about 
                    how you interact with our website, applications, and 
                    services, including IP addresses, device information, 
                    and browsing history.
                    <br/>
                    <br/>
                    Cookies and Similar Technologies: We use cookies and 
                    similar technologies to enhance your experience, analyse 
                    trends, and administer the website. You can control the 
                    use of cookies through your browser settings.

                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    2. How We Use Your Information
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    Providing Services: We use your information to provide 
                    and improve our products and services, customize content,
                    and communicate with you.

                    <br />
                    <br/>
                    Analytics: We analyse user behaviour to understand trends,
                    improve our website, and enhance user experience.
                    <br/>
                    <br/>
                    Marketing and Communications: With your consent, we 
                    may send you promotional materials and updates about 
                    our products and services.


                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    3.Information Sharing
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    We do not sell, trade, or otherwise transfer your 
                    personal information to third parties without your 
                    consent, except as described in this Privacy Policy.
                    
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    4. Data Security
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    We implement reasonable security measures to protect 
                    your personal information from unauthorized access, 
                    disclosure, alteration, and destruction.

                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    5. Your Choices
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                   You have the right to access, correct, or delete 
                   your personal information. You may also opt-out of 
                   receiving marketing communications
                  
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    6. Children's Privacy
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                   Our services are not directed towards children under 
                   the age of 13. We do not knowingly collect personal 
                   information from children.
                                     
                      </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    7. Changes To This Privacy Policy
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    We may update this Privacy Policy periodically. 
                    We will notify you of significant changes via email 
                    or by prominently posting the updated Privacy Policy 
                    on our website.
                    
                    </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    8. Contact Us
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    If you have any questions or concerns regarding this 
                    Privacy Policy, please contact us at dirghayubharathelp@gmail.com.
                  </Text>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default PrivacyPolicy;