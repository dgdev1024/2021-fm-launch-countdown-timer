/**
 * @file index.jsx
 * @brief The application's entry point.
 */

// Imports
import React from "react";
import { render } from "react-dom";
import App from "./app";

// Mount To Root
const appRoot = document.querySelector(".app-root");
render(<App />, appRoot);
