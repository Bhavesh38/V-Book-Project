import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";

import history from "./Utility/history";
import PrivateRoute from "./Utility/private-route";
import Chat from "./Chat/Chat";
const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#58a5f0",
			main: "#0277bd",
			dark: "#004c8c",
		},
		secondary: {
			light: "#ffd95a",
			main: "#f9a825",
			dark: "#c17900",
			contrastText: "#212121",
		},
		background: {
			default: "#f0f0f0",
		},
	},
	typography: {
		useNextVariants: true,
	},
});

function Vchat() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider maxSnack={3} autoHideDuration={3000}>
				<Router history={history}>
					<Route path="/" exact component={Home} />
					<PrivateRoute path="/chat" component={Chat} />
				</Router>
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default Vchat;
