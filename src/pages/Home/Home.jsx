import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Bestsellers from "../../components/products/Bestsellers";
import NewArrivals from "../../components/products/NewArrivals";
import Slider from "../../components/slider/Slider";



export default function Home(){
  return(
    <div>
        <Announcement/>
        <Navbar />
        <Slider/>
        <Categories />
        <NewArrivals />
        <Bestsellers />
        <Newsletter />
        <Footer />
        
    </div>
  );

}