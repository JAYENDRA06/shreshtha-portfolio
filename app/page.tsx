import ServicesComp from "./components/ServicesComp/ServicesComp";
import OuterWrapper from "./components/OuterWrapper";
import Main from "./components/Main/Main";

export default function Home() {
  return (
    <center>
      <OuterWrapper bg={true}><Main /></OuterWrapper>
      <OuterWrapper bg={false}><ServicesComp /></OuterWrapper>
    </center>
  );
}
