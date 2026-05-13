import Image from "next/image";
import Navbar from "./Navbar";
import Swiners from "./Swiners";
import Maincategory from "./Maincategory";
import TopPck from "./TopPck";
import Promotional_Banner from "./Promotional_Banner";


export default function Home() {
  return (
    <div className="">

      <Navbar></Navbar>
      <Swiners></Swiners>

      <Maincategory></Maincategory>

      <TopPck></TopPck>

      <Promotional_Banner></Promotional_Banner>

     

    
     
     
    </div>
  );
}
