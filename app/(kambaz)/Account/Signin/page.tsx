import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h2>Sri Ram Sathiya Naryanan</h2>
      <h1>Sign in</h1>

      <FormControl
        id="wd-username"
        defaultValue="SriRam"
        placeholder="username"
        className="mb-2"
      /><br />

      <FormControl
        id="wd-password"
        type="password"
        defaultValue="12eqdw"
        placeholder="password"
        className="mb-2"
      /><br />

      <Link
        id="wd-signin-btn"
        href="/Dashboard"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Link><br />

      <Link
        id="wd-signup-link"
        href="/Account/Signup"
        className="d-block mb-2"
      >
        Sign up
      </Link>

      <a
        id="wd-github-link"
        href="https://github.com/sgsriram25/kambaz-next-js2"
        className="d-block text-decoration-underline text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Github
      </a>
    </div>
  );
}
