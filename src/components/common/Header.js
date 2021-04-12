import React from 'react';
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";

export function Header() {

    const headerStyles = {
        toolBar: {
            display: "flex",
            justifyContent: 'space-between'
        }
    }
    return (
        <AppBar position='static'>
            <Container maxWidth='md'>
                <Toolbar style={headerStyles.toolBar}>
                    <Typography variant='h4'>
                        Note_Board
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

