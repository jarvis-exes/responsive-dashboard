import { signInWithGoogle } from "../firebase";

const Header = () => (
  <header className="p-4 bg-blue-500 text-white flex justify-between">
    <h1>Responsive Dashboard</h1>
    <button
      onClick={signInWithGoogle}
      className="bg-white text-blue-500 px-4 py-2 rounded"
    >
      Login with Google
    </button>
  </header>
);

export default Header;
