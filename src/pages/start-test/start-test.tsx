import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const StartTest = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="8px"
      justifyContent="center"
    >
      <Typography fontSize="24px" fontWeight="700">
        Узнай, какой ты скуф
      </Typography>
      <Button variant="contained" color="secondary" >
        <Link
          to="/question"
          style={{ textDecoration: "none", color: "white", fontWeight: "600", width: '100%'}}
        >
          Начать
        </Link>
      </Button>
    </Box>
  );
};

export default StartTest;
