import { Box, Flex, Grid, Link, Button, Heading } from "@radix-ui/themes";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

function Header() {
  return (
    <header>
      <nav>
        <Flex className="desktop-header" justify="between" align="center">
          <Box>
            <Heading style={{ lineHeight: "16px" }} size="7">
              Furnituristic <br /> ...
            </Heading>
          </Box>
          <Box>
            <Flex gap="5" align="center">
              <Link size="4" href="#">Home</Link>
              <Link size="4" href="#">Catalog</Link>
            </Flex>
          </Box>
          <Box>
            <Grid gap="8" columns="2">
              <Button>ENG</Button>
              <Button className="ru">RU</Button>
              <Button><CiSearch size={28} /></Button>
              <Button><CiShoppingCart size={28} /></Button>
            </Grid>
          </Box>
        </Flex>

        {/* Mobile view */}
        <Box className="mobile-header">
          <Flex justify="between" align="center">
            <Box mt={"6"}>
              <Heading style={{ lineHeight: "16px" }} size="7">
                Furnituristic <br /> ...
              </Heading>
            </Box>
            <Grid gap="8" columns="2">
              <Button>ENG</Button>
              <Button className="ru">RU</Button>
            </Grid>
          </Flex>
          <Flex mt="8" gap="5" align="center">
            <Link size="3" href="#">Home</Link>
            <Link size="3" href="#">Catalog</Link>
          </Flex>
        </Box>
      </nav>
      <style jsx>{`
        .desktop-header {
          display: flex;
        }
        .mobile-header {
          display: none;
        }
        @media (max-width: 800px) {
          .desktop-header {
            display: none;
          }
          .mobile-header {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
