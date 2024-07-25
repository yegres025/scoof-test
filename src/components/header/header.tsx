import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      py="4px"
      px="18px"
      display="flex"
      alignItems='center'
      justifyContent="space-between"
      borderBottom="1px solid rgba(0,0,0,0.1)"
      boxShadow="0px 1px 4px rgba(255, 255, 255, 0.8)"
      sx={{background: 'rgba(255,255,255,0.3)'}}
    >
      <Box
        component="img"
        borderRadius="50%"
        height="50px"
        src="https://funny.klev.club/uploads/posts/2024-03/funny-klev-club-p-smeshnie-kartinki-lisii-i-tolstii-1.jpg"
        />
      <Typography>Скуфатория</Typography>
    </Box>
  );
};

export default Header;
