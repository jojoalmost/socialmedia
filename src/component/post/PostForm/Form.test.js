import {render, screen} from '@testing-library/react';
import React from "react";
import Form from "./Form";

test('render post form input', () => {
    render(
        <Form
            body='est rerum tempore vitae'
            title='qui est esse'
            onChangeInput={jest.fn()}/>
    );
    const linkElementTitle = screen.getByDisplayValue(/qui est esse/i);
    expect(linkElementTitle).toBeInTheDocument();
    const linkElementBody = screen.getByDisplayValue(/qui est esse/i);
    expect(linkElementBody).toBeInTheDocument();
});
