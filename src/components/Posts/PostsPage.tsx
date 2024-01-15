import { Box, Grid } from '@mui/material';
import Posts from "./Posts.tsx";

const PostsPage = () => {
    return (
        <Grid container direction="row" spacing={5}>
            <Grid item xs={8}>
                <Posts />
            </Grid>
            <Grid item xs={4}>
                <Box style={{ backgroundColor: '#DAF2FB' }}>
                    {/*<Comments />*/}
                </Box>
            </Grid>
        </Grid>
    );
};

export default PostsPage;
