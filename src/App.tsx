import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BackgroundDesign from "./components/BackgroundDesign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Notifications */}
      <Toaster />
      <Sonner />

      {/* Routing */}
      <BrowserRouter>
        {/* Global Background */}
        <div className="relative min-h-screen bg-[linear-gradient(135deg,#0fffc1_0%,#22223b_50%,#7e0fff_100%)] animate-gradient-x overflow-hidden">
          <BackgroundDesign />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
