import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";

const root = createRoot(document.querySelector("#app")); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
    <App />
</React.StrictMode>
);
