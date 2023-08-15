import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Card component", () => {
  const mockCardProps = {
    imageUrl: "test-image-url",
    title: "Test Title",
    subtitle: "Test Subtitle",
    price: 19.99,
    onAddToCart: jest.fn(),
  };

  test("renders card with correct content", () => {
    render(<Card {...mockCardProps} />);

    const titleElement = screen.getByText(mockCardProps.title);
    const subtitleElement = screen.getByText(mockCardProps.subtitle);
    const priceElement = screen.getByText(`R$ ${mockCardProps.price.toFixed(2)}`);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  test("renders 'Adicionar' button and triggers onAddToCart when clicked", () => {
    render(<Card {...mockCardProps} />);

    const addButton = screen.getByText("Adicionar");

    expect(addButton).toBeInTheDocument();

    addButton.click();

    expect(mockCardProps.onAddToCart).toHaveBeenCalled();
  });

  
});
