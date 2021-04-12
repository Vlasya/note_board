import Loader from "react-loader-spinner";

import React from 'react';
import {Grid} from "@material-ui/core";

export function Spinner() {
    return (
        <Grid container justify='center' alignItems='center'>
            <Grid item>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </Grid>
        </Grid>
    );
}

