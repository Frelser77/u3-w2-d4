// CommentArea.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

// Mock per simulare il libro selezionato
const mockBook = { asin: "123", title: "Test Book" };

describe("CommentArea component", () => {
	it("renders correctly with comments", async () => {
		render(<CommentArea book={mockBook} />);

		// Assumi che ci sia un elemento con testo "Comments" e il titolo del libro
		const commentsHeader = await screen.findByText(`Comments: ${mockBook.title}`);
		expect(commentsHeader).toBeInTheDocument();
	});
});
