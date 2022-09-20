import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import {CircularProgress, CssBaseline, ThemeProvider} from "@mui/material";
import TopAppBar from "./components/TopAppBar.jsx";
import { createTheme } from '@mui/material/styles';
import MessageAppBar from "./components/MessageAppBar.jsx";

const siteTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#16213E"
    },
    primary: {
      main: "#647DEE"
    }
  },
});

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress/>;
  }

  return (
    <ThemeProvider theme={siteTheme}>
      <CssBaseline/>
      <TopAppBar/>
      {signInCheckResult.signedIn && <Channel/>}
    </ThemeProvider>
  );
}
