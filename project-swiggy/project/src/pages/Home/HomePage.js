import { Header } from "../../components/Layouts/Header";
import { Hero } from "./components/Hero";
import { TopRestaurant } from "./components/TopRestaurant";
import { OnlineDelivery } from "./components/OnlineDelivery";
import { BestPlaces } from "./components/BestPlaces";
import { BestCuisines } from "./components/BestCuisines";
import { Explore } from "./components/Explore";
import { Footer } from "../../components/Layouts/Footer";

export const HomePage = () => {
  return (
    <main>
       <Header />
      <Hero />
      <TopRestaurant />
      <OnlineDelivery />
      <BestPlaces />
      <BestCuisines />
      <Explore />
      <Footer />
    </main>
  )
}
