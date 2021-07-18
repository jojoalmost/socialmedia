import {render, screen} from '@testing-library/react';
import ModalPhoto from "./ModalPhoto";
import {useSelector} from "react-redux";

jest.mock("react-redux");
test('render modal photo', () => {
    useSelector.mockReturnValue({
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
    });
    render(<ModalPhoto show onClose={jest.fn()}/>);
    const linkElement = screen.getByText(/accusamus beatae ad facilis cum similique qui sunt/i);
    expect(linkElement).toBeInTheDocument();
});
