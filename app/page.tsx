import Image from "next/image";
import Navbar from "./Navbar";
import Swiners from "./Swiners";
import Maincategory from "./Maincategory";
import TopPck from "./TopPck";


export default function Home() {
  return (
    <div className="">

      <Navbar></Navbar>
      <Swiners></Swiners>

      <Maincategory></Maincategory>

      <TopPck></TopPck>

     

    
     
     
    </div>
  );
}
