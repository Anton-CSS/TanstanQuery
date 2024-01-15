import React from 'react';
import { Stack, TextField} from "@mui/material";

const FormAddPost = () => {
    return (

        <Stack component="form" spacing={2} direction="column" >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
    );
};

export default FormAddPost;
