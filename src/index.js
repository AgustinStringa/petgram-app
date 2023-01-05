import React from "react";
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector("#app")); // createRoot(container!) if you use TypeScript
root.render(<h1>'HOLAA PLATZI'</h1>);
