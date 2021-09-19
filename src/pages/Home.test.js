import React from "react";
import { render, screen, fireEvent, act } from '@testing-library/react'

import Home from "./Home";
import { MemoryRouter } from "react-router";

describe('Home', () => {
    test('Home text', () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )

        expect(screen.getByText(/HOME/)).toBeInTheDocument();
        expect(screen.getByText(/ABOUT/)).toBeInTheDocument();
        expect(screen.getByText(/EXPERIENCES/)).toBeInTheDocument();
        expect(screen.getByText(/CONTACT/)).toBeInTheDocument();
        expect(screen.getByText(/NEWS/)).toBeInTheDocument();
        expect(screen.getByText(/Hi, my name is/)).toBeInTheDocument();
        expect(screen.getByText(/Anne Sullivan/)).toBeInTheDocument();
        expect(screen.getByText(/I build things for the web/)).toBeInTheDocument();
        expect(screen.getByText(/Get In Touch/)).toBeInTheDocument();
        expect(screen.getByText(/Today/)).toBeInTheDocument();

    })
})