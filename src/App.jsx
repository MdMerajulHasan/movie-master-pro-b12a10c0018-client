import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase.init";
function App() {
  const createUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        const user = newUser.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error :", error.message, error.code);
      });
  };

  return (
    <>
      <h1>Movie Master Pro</h1>
      <form onSubmit={createUser}>
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
