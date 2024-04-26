import {render, screen } from "@testing-library/react";
import App from "App";

describe('Testing render App message "Ola Mundo!', ()=> {
    it('should render App with Ola Mundo message', () => {
        render(<App/>)
        screen.getByText("OLA MUNDO!")
    })
})