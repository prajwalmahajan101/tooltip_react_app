
//Bootsrap Files
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//ToolTip From Material UI
import Tooltip from '@mui/material/Tooltip';
// Create Theme
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const defaultTheme = createTheme();
const theme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "2em",
                    color: "whitesmoke",
                    backgroundColor: "black"
                }
            }
        }
    }
});

let ToolTip = (props) =>{
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Tooltip
                    title={props.position}
                    placement={props.position}
                    arrow={true}
                    leaveDelay={200}
                >
                    <button className={"btn btn-dark text-light buttons"}>{props.children}</button>
                </Tooltip>
            </ThemeProvider>
        </div>
    )
}


export default ToolTip;