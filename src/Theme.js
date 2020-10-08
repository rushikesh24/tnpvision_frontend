import { createMuiTheme } from "@material-ui/core/styles";

import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {      
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: pink[500]
    }
  }
});

export default theme;