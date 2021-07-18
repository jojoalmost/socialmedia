import {render, screen, waitFor} from '@testing-library/react';
import api from "../../../utils/api";
import PostDetail from "./PostDetail";
import {useParams} from "react-router";

const mockDataPost = {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
};

const mockDataComments = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }
];


jest.mock('../../../utils/api');
jest.mock('react-router');
test('render post detail', async () => {
    useParams.mockReturnValue({postId: 2});
    api.get.mockImplementation((params) => new Promise((resolve, reject) => {
        if (params.endsWith('comments')) {
            resolve({data: mockDataComments});
        } else {
            resolve({data: mockDataPost});
        }
    }));
    render(<PostDetail/>);
    await waitFor(() => screen.getByText(/qui est esse/i))
    expect(screen.getByText(/qui est esse/i)).toBeInTheDocument();
});
