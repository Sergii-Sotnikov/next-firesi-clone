import Advantages from "@/components/Advantages/Advantages";
import Arguments from "@/components/Arguments/Arguments";
import Contact from "@/components/Contact/Contact";
import Faq from "@/components/Faq/Faq";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Fire from "@/components/Fire/Fire";
import HeroMain from "@/components/HeroMain/HeroMain";
import Solution from "@/components/Solution/Solution";
import VideoMainPage from "@/components/VideoMainPage/VideoMainPage";
import Choice from "@/components/Сhoice/Сhoice";


export default function Home() {
   return (
    <>
      <HeroMain />
      <Fire/>
      <Advantages/>
      <VideoMainPage/>
      <Solution/>
      <Arguments/>
      <Choice/>
      <Feedbacks/>
      <Faq/>
      <Contact/>
    </>
  );
}
