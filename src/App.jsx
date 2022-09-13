import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import SignInOutButton from "./components/SignInOutButton";
import {CircularProgress} from "@mui/material";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress/>;
  }

  return (
    <>
      <SignInOutButton />
      {signInCheckResult.signedIn && <Channel />}
    </>
  );
}
