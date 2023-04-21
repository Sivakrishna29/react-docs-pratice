import { useState } from "react";

import MyButton from "./Components/Basics/MyButton";
import AboutPage from "./Components/Basics/AboutPage";
import Profile from "./Components/Basics/Profile";
import ShoppingList from "./Components/Basics/ShoppingList";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <MyButton count={count} handleClick={handleClick} />
      <br />
      <MyButton count={count} handleClick={handleClick} />
      <AboutPage />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;
