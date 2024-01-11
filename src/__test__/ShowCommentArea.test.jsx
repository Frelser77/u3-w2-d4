import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookList from "../components/BookList";

const mockSelectedBookWithComments = {
	asin: "123",
	img: "url-to-image",
	title: "Test Book",
	price: "10",
	comments: [
		{
			id: 1,
			text: "This is a comment 1",
			rate: 5,
		},
		{
			id: 2,
			text: "This is a comment 2",
			rate: 4,
		},
	],
};

describe("BookList component", () => {
	test("comments are displayed when a book with comments is selected", () => {
		render(<BookList selectedBook={null} setSelectedBook={() => {}} />);

		const card = screen.getByTestId(`card-${mockSelectedBookWithComments.asin}`);
		fireEvent.click(card);

		// Verifica che il componente CommentArea sia presente nel DOM
		const commentArea = screen.getByTestId("comment-area");
		expect(commentArea).toBeInTheDocument();

		// Verifica che i commenti siano presenti nel DOM
		mockSelectedBookWithComments.comments.forEach((comment) => {
			const commentText = screen.getByText(comment.text);
			expect(commentText).toBeInTheDocument();
		});
	});
});
