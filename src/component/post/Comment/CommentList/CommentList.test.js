import {render, screen, waitFor} from '@testing-library/react';
import api from "../../../../utils/api";
import CommentList from "./CommentList";

const mockData = [
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
    },
];

jest.mock("../../../../utils/api");
test('render comment list', async () => {
    api.get.mockResolvedValue({data: mockData});
    render(<CommentList postId={1} userId={1}/>);
    await waitFor(() => screen.getByText(/id labore ex et quam laborum/i))
    expect(screen.getByText(/id labore ex et quam laborum/i)).toBeInTheDocument();
});
