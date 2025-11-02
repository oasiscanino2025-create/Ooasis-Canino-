import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Hero from "@/components/Hero";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Adoptions from "@/pages/Adoptions";
import Events from "@/pages/Events";
import Restaurant from "@/pages/Restaurant";
import Pricing from "@/pages/Pricing";
import Location from "@/pages/Location";
import NotFound from "@/pages/not-found";

function Router() {
  const [showHero, setShowHero] = useState(true);
  
  if (showHero) {
    return <Hero onEnter={() => setShowHero(false)} />;
  }
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios" component={Services} />
      <Route path="/productos" component={Products} />
      <Route path="/adopciones" component={Adoptions} />
      <Route path="/eventos" component={Events} />
      <Route path="/restaurante" component={Restaurant} />
      <Route path="/tarifas" component={Pricing} />
      <Route path="/ubicacion" component={Location} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
