import { Box, Button } from "@mui/material";
import React from "react";
import PageRoutes from "navigations/Routes";
import { BrowserRouter as Router  } from "react-router-dom";


function App(){
    return (
        <Box height="100%" overflow="hidden">
            <Router basename={process.env.PUBLIC_URL}>
                <PageRoutes />
            </Router>
        </Box>
    )
}

export default App;