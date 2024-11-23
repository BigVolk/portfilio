import { Button, MenuItem, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { TextSettings } from '../constanst';
import '../assests/fonts.css';


const NavBar = () => {
    const menuItemsInfo = [
        {
            title: "המספר שלי",
            link: "/"
        },
        {
            title: "למה לבחור בי?",
            link: "/"
        },
        {
            title: "מיקום",
            link: "/"
        },
        {
            title: "הזמנת שיעור",
            link: "/"
        }
    ]

    return (
        <>
            <AppBar position='fixed'>
                <Container maxWidth="xl">
                    <Toolbar sx={{dispaly: 'flex', justifyContent: 'space-between'}}>
                        {menuItemsInfo.map((itemName) => (
                            <Button
                                sx={
                                    {
                                        direction: TextSettings.textDirection,
                                        textDecoration: "underLine",
                                        color: "white",
                                        fontFamily: 'heebo'
                                    }
                                }>
                                {itemName.title}
                            </Button>
                        )
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar