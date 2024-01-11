// Welcome.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome component", () => {
	it("renders correctly", () => {
		render(<Welcome />);

		expect(screen.getByText("Welcome in our shop")).toBeInTheDocument();
		expect(screen.getByText("Buy more books for more points and rewards!")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Close me" })).toBeInTheDocument();
	});
});
