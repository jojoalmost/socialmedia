import {render, screen, waitFor} from '@testing-library/react';
import api from "../../../utils/api";
import PostList from "./PostList";

const mockData = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
];

jest.mock('../../../utils/api');
test('render post list', async () => {
    api.get.mockResolvedValue({data: mockData});
    render(<PostList userId={1}/>);
    await waitFor(() => screen.getByText(/qui est esse/i))
    expect(screen.getByText(/qui est esse/i)).toBeInTheDocument();
});
