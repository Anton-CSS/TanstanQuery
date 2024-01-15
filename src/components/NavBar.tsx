import { AppBar, Box, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Monospace',
    fontSize: 20,
};

export default function NavBar(): JSX.Element {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box mr={5}>
                        <NavLink to="/posts" style={linkStyle}>
                            Posts
                        </NavLink>
                    </Box>
                    <Box>
                        <NavLink to="/form" style={linkStyle}>
                            Add Post
                        </NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
