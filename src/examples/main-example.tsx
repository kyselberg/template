import React from "react";
import ReactDOM from "react-dom/client";
import { OnboardingProvider } from "./contexts/OnboardingContext";
import "./index.css"; // This now loads the example CSS
import WelcomePage from "./pages/WelcomePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OnboardingProvider>
      <WelcomePage />
    </OnboardingProvider>
  </React.StrictMode>
);
