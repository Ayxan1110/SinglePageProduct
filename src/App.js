import './App.css';
import { Theme, Box } from "@radix-ui/themes";
import Product from './components/Product';
import Header from './components/Header';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <Theme>
        <Box px={{initial: "20px", xs: "20px", sm: "40px", md: "50px", lg: "100px", xl: "100px"}} py={"20px"} style={{backgroundColor: "#dfdfdf"}}>
          <Header />
          <Product />
        </Box>
        <Description />
      </Theme>
    </div>
  );
}

export default App;
