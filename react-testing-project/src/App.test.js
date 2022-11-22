// App.test.js

import React from "react";
import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
   test("Code Sweetly Test Handling", () => {
      render(<App />);
      expect(screen.getByRole("heading", {level: 1})).toHaveTextContent(/codesweetly test/i);
   });

   test("Update Text with button click", () => {
      render (<App />);

      const button = screen.getByRole("button", {name: "Update Heading"});

      userEvent.click(button)

      expect(screen.getByRole("heading")).toHaveTextContent(/a codesweetly project/i);

   });
});

