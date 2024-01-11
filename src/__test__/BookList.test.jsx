import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import booksFantasyData from "../data/fantasy.json";
import booksHistoryData from "../data/history.json";

// Prendi due libri dai dati per il test
const firstBook = booksFantasyData[0];
const secondBook = booksHistoryData[0];

describe("BookList component", () => {
	it("selecting a second book causes the first book border to return to normal", async () => {
		render(<BookList selectedBook={null} setSelectedBook={() => {}} />);

		const firstBookCard = screen.getByTestId(`card-${firstBook.asin}`);
		const secondBookCard = screen.getByTestId(`card-${secondBook.asin}`);

		expect(firstBookCard).toHaveStyle("borderColor: transparent");
		fireEvent.click(firstBookCard);
		expect(firstBookCard).toHaveStyle("borderColor: green");

		fireEvent.click(secondBookCard);

		expect(firstBookCard).not.toHaveStyle("borderColor: green");
		expect(secondBookCard).toHaveStyle("borderColor: green");
	});
});
