import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { Center } from "@chakra-ui/react";
function App() {
  return (
    <div>
      <Center bg="#9A68AF" h="100px" color="white">
        Star wars with Redux
      </Center>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
