import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SingleBook from "../components/SingleBook";

describe("SingleBook component", () => {
	it("border changes color on click", () => {
		const mockBook = {
			asin: "123",
			img: "url-to-image",
			title: "Test Book",
			price: "10",
		};

		// Simula lo stato del genitore che gestisce la selezione
		const ParentComponent = () => {
			const [selected, setSelected] = useState(false);

			return <SingleBook book={mockBook} onSelect={() => setSelected(!selected)} selected={selected} />;
		};

		render(<ParentComponent />);

		const card = screen.getByTestId(`card-${mockBook.asin}`);
		expect(card).toHaveStyle("borderColor: transparent");

		fireEvent.click(card);

		expect(card).toHaveStyle("borderColor: green");
	});
});
