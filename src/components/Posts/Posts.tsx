import {Box, Button, Divider, Typography} from '@mui/material';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import ApiService from "../../APIService/ApiService.ts";
import {PostType} from "../../Types/types.ts";

const Posts = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['posts'],
        queryFn: ApiService.getAllPosts
    });
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (id: PostType['id']) => ApiService.deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
    })

    const posts = data;
    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            { posts && posts.map((post) => (
                <Box m={2} key={post.id}>
                    <Typography
                        variant="h5"
                        style={{ cursor: 'pointer' }}
                    >
                        {post.title}
                    </Typography>
                    <Box my={3}>
                        <Typography variant="body2">{post.body}</Typography>
                    </Box>
                    <Button
                        type="button"
                        variant="contained"
                        sx={{margin: '10px'}}
                        onClick={() => {mutation.mutate(post.id)}}> DELETE</Button>
                    <Divider />
                </Box>
            ))}

        </>
    );
};

export default Posts;
