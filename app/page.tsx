"use client";
import ServicesComp from "./components/ServicesComp/ServicesComp";
import OuterWrapper from "./components/OuterWrapper";
import Main from "./components/Main/Main";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import { Provider } from "./(context)/context";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <center>
      <Provider>
        <OuterWrapper bg={true}>
          <Main />
        </OuterWrapper>
        <OuterWrapper bg={false}>
          <ServicesComp />
        </OuterWrapper>
        <OuterWrapper bg={true}>
          <Pricing />
        </OuterWrapper>
        <OuterWrapper bg={false}>
          <WhyChoose />
        </OuterWrapper>
        <OuterWrapper bg={true}>
          <Testimonials />
        </OuterWrapper>
        <OuterWrapper bg={false}>
          <ContactUs />
        </OuterWrapper>
        <Footer />
      </Provider>
    </center>
  );
}
