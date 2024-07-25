import { Box } from "@mui/material";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://img.goodfon.ru/original/1920x1080/5/6f/pivo-banka-taranka.jpg")',
      }}
      color="white"
    >
      <Header />
      <Box
        display="flex"
        height="calc(100vh - 59px)"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
