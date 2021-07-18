import {render, screen, waitFor} from '@testing-library/react';
import api from "../../../utils/api";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import AlbumDetail from "./AlbumDetail";
import {getModalData} from "../../../stores/photos/selectors";

const mockData = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
];

const mockStores = {
    photos: {
        modal: {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        }
    }
}
jest.mock('react-router');
jest.mock('../../../utils/api');
jest.mock("react-redux");
test('render album detail', async () => {
    useParams.mockReturnValue({albumId: 1});
    useDispatch.mockReturnValue(mockStores);
    useSelector.mockImplementation(getModalData);
    api.get.mockResolvedValue({data: mockData});
    render(<AlbumDetail/>);
    await waitFor(() => screen.getByText(/officia porro iure quia iusto qui ipsa ut modi/i))
    expect(screen.getByText(/officia porro iure quia iusto qui ipsa ut modi/i)).toBeInTheDocument();
});
