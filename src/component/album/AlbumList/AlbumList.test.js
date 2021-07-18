import {render, screen, waitFor} from '@testing-library/react';
import api from "../../../utils/api";
import {useParams} from "react-router";
import AlbumList from "./AlbumList";

const mockData = [
    {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
    },
];
jest.mock('react-router');
jest.mock('../../../utils/api');
test('render album list', async () => {
    useParams.mockReturnValue({userId : 1});
    api.get.mockResolvedValue({data: mockData});
    render(<AlbumList/>);
    await waitFor(() => screen.getByText(/quidem molestiae enim/i))
    expect(screen.getByText(/quidem molestiae enim/i)).toBeInTheDocument();
});
