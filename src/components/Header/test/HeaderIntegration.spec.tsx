import React from "react";
import Header from "../containers/Container";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "config";


// Mock para window.matchMedia
beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: query.includes("max-width: 600px"),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }));
});

const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Header Component", () => {
    test("renders mobile menu button when screen width is small", () => {
        (window.matchMedia as jest.Mock).mockReturnValueOnce({
            matches: true,
            media: "(max-width: 600px)",
        });

        const mockOpenMenu = jest.fn();
        renderWithRouter(<Header openMenu={mockOpenMenu} />);

        const menuButton = screen.getByRole("button", { name: /menu/i });
        expect(menuButton).toBeInTheDocument();

        fireEvent.click(menuButton);
        expect(mockOpenMenu).toHaveBeenCalled();
    });

    test("does not render mobile menu button when screen width is large", () => {
        (window.matchMedia as jest.Mock).mockReturnValueOnce({
            matches: false,
            media: "(min-width: 601px)",
        });

        renderWithRouter(<Header openMenu={() => { }} />);
        const menuButton = screen.queryByRole("button", { name: /menu/i });
        expect(menuButton).not.toBeInTheDocument();
    });

    test("highlights the clicked navigation item", () => {
        renderWithRouter(<Header openMenu={() => { }} />);

        const navItem = screen.getByText("Home");
        fireEvent.click(navItem);

        expect(navItem).toHaveStyle(`color: ${Theme.dark.palette.secondary.contrastText}`);
    });

    test("displays loading indicator when loading", async () => {
        renderWithRouter(<Header openMenu={() => { }} />);

        const navItem = screen.getByText("Home");
        fireEvent.click(navItem);

        const loadingOverlay = screen.getByTestId("loading-overlay");
        expect(loadingOverlay).toBeInTheDocument();

        await waitFor(() => expect(loadingOverlay).not.toBeInTheDocument(), { timeout: 600 });
    });
});