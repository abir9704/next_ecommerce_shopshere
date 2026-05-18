import Image from "next/image";
import Navbar from "./Navbar";
import Swiners from "./Swiners";
import Maincategory from "./Maincategory";
import TopPck from "./TopPck";
import Promotional_Banner from "./Promotional_Banner";
import Footer from "./Footer";
import Foot from "./Foot";
import DiscoverStyle from "./DiscoverStyle";


export default function Home() {
  return (
    <div className="">

      <Navbar></Navbar>
      <Swiners></Swiners>

      <Maincategory></Maincategory>

      <TopPck></TopPck>

      <Promotional_Banner></Promotional_Banner>
      <DiscoverStyle></DiscoverStyle>

    <Foot></Foot>

     

    
     
     
    </div>
  );
}
