
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Promotions from "@/components/Promotions";
import Testimonials from "@/components/Testimonials";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-pizza-pattern">
        <Navbar />
        <Hero />
        <Menu />
        <Promotions />
        <Testimonials />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
