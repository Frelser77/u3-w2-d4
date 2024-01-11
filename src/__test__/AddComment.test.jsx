import React from "react";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("App component", () => {
	test("no AddComment components in DOM on page load", () => {
		render(<CommentArea />);

		// Verifica che non ci siano istanze del componente AddComment nel DOM
		const addCommentComponents = screen.queryAllByClassName("add-comment-form");
		expect(addCommentComponents).not.toBeInTheDocument();
	});
});
