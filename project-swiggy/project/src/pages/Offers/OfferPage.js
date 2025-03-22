import { OfferCart } from "./components/OfferCart";
import { OfferHeader } from "./components/OfferHeader";
import { OfferHero } from "./components/OfferHero";
import { OfferApp } from "./components/OfferApp";
import { OfferFooter } from "./components/OfferFooter";

export const OfferPage = () => {
  return (
    <main>
        <OfferHeader />
        <OfferHero />
        <OfferCart />
        <OfferApp />
        <OfferFooter />
    </main>
  )
}
