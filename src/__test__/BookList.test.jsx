import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookList from "../components/BookList";

// Mock di un array di libri
const booksData = [
	{ title: "The Last Wish: Introducing the Witcher", price: "9.59", category: "fantasy" },
	{
		title: "Justice on Trial: The Kavanaugh Confirmation and the Future of the Supreme Court",
		price: "17.39",
		category: "history",
	},
];

describe("BookList component", () => {
	it("selecting a second book causes the first book border to return to normal", async () => {
		// Renderizza il componente BookList
		render(<BookList selectedBook={null} setSelectedBook={() => {}} />);

		// Ottieni i riferimenti ai libri basandoti sui data-testid
		const firstBookCard = screen.getByTestId(`card-${booksData[0].asin}`);
		const secondBookCard = screen.getByTestId(`card-${booksData[1].asin}`);

		// Simula il click sul primo libro e verifica che il bordo sia verde
		fireEvent.click(firstBookCard);
		expect(firstBookCard).toHaveStyle("borderColor: green");

		// Simula il click sul secondo libro
		fireEvent.click(secondBookCard);

		// Verifica che il bordo del primo libro sia tornato trasparente
		expect(firstBookCard).toHaveStyle("borderColor: transparent");
		// Verifica che il bordo del secondo libro sia verde
		expect(secondBookCard).toHaveStyle("borderColor: green");
	});
});
