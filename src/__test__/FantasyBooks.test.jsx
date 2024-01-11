import React from "react";
import { render, screen } from "@testing-library/react";
import BooksFantasy from "../components/FantasyBooks";
import booksFantasyData from "../data/fantasy.json";

describe("BooksFantasy component", () => {
	it("renders correct number of cards", () => {
		render(<BooksFantasy />);

		// Trova tutte le card nel componente
		const cards = screen.getAllByRole("img");
		expect(cards).toHaveLength(booksFantasyData.length);
	});
});
