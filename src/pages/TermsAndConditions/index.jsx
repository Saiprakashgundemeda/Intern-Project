import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import LandingPageFooter from "components/LandingPageFooter";

const TermsAndConditions = () => {
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
                    Terms And Conditions
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
                    1. Acceptance Of Terms
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    By accessing or using the services provided by Dirghayu Bharat ("the Company"),
                     you agree to be bound by the terms and conditions outlined herein. If you do
                      not agree to these terms, please refrain from using our services
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    2. Services
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    Dirghayu Bharat offers a range of IT services, including but 
                    not limited to software development, web development, IT 
                    consulting, and related services.
                    <br />
                    <br/>
                    The specifics of the services provided, including project scope,
                     timelines, and deliverables, will be detailed in a separate
                      project agreement.

                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    3.Payment And Invoicing
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    Clients agree to pay the fees specified in the project agreement 
                    for the services rendered by Dirghayu Bharat.
                      <br />
                      <br/>
                      Invoices will be issued according to the payment schedule outlined
                       in the project agreement,and payment is due within the specified timeframe.
                      <br />
                      <br/>
                      Late payments may incur interest charges as outlined in the project agreement.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    4. Confidentiality
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    Both parties agree to maintain the confidentiality of any
                     proprietary or confidential information disclosed during 
                     the course of the engagement.
                      <br />
                      <br />
                      Dirghayu Bharat will take reasonable measures to protect 
                      client data and confidential information.
                      
                      
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    5. Intellectual Property
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                    
                  >
                   Dirghayu Bharat retains ownership of all intellectual 
                   property developed during the provision of services unless otherwise
                    specified in the project agreement.
                    <br />
                    <br/>
                    Clients may use the deliverables for the intended 
                    purpose outlined in the project agreement, and any 
                    additional use requires explicit written permission.

                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    6. Limitation Of Liability
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                   Dirghayu Bharat is not liable for any direct, indirect,
                    incidental, or consequential damages arising from the 
                    use of our services.
                    <br />
                    <br/>
                    The total liability of Dirghayu Bharat, whether in contract, tort,
                     or otherwise, is limited to the total amount paid by the client
                      for the specific services that gave rise to the liability.                  
                      </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    7. Termination
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                     Either party may terminate the engagement with written
                      notice if the other party breaches these terms. 
                      Termination does not relieve the client's obligation 
                      to pay for services rendered before termination.                    <br />
                    <br/>
                    Dirghayu Bharat may terminate the engagement if the
                     client fails to make timely payments or breaches other
                      material terms outlined in the project agreement.
                    </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    8. Governing Law
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    These terms and conditions are governed by and 
                    construed in accordance with the laws.

                     <br />
                    
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    9. Amendments
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                   Dirghayu Bharat reserves the right to update or modify 
                   these terms and conditions at any time. Clients will be 
                   notified of any changes, and continued use of our services 
                   constitutes acceptance of the updated terms.
                    <br />
                    
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                    style={{cursor: "pointer"}}
                  >
                    10. Contact Information
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    For any inquiries or concerns regarding these 
                    terms and conditions, please contact us at dirghayubharathelp@gmail.com
                    <br />
                    
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

export default TermsAndConditions;
