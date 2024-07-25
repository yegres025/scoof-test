import { Box, Button, Typography } from "@mui/material";
import { scoofAnswer } from "./helper/consts/consts";
import { observer } from "mobx-react-lite";
import totalStore from "../../store/total-store";
import { Link } from "react-router-dom";

const getAnswer = (total: number) => {
  if (total < 8) {
    return scoofAnswer[0];
  } else if (total > 8 && total < 16) {
    return scoofAnswer[1];
  } else if (total > 16 && total < 24) {
    return scoofAnswer[2];
  } else {
    return scoofAnswer[3];
  }
};

const Answer = observer(() => {
  const answer = getAnswer(totalStore.total);

  return (
    <Box
      sx={{ background: "rgba(255,255,255,0.2)" }}
      p="12px"
      border="8px"
      width="40vw"
      minHeight="55vh"
      display="flex"
      flexDirection="column"
      position="absolute"
      justifyContent="center"
      alignItems="center"
    >
      <Box component="img" src={answer.img} maxHeight="35vh" maxWidth="45vw" />
      <Typography mt="40px">{answer.text}</Typography>
      <Button variant="contained" color="secondary" sx={{ width: "160px" }}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white", fontWeight: "600" }}
        >
          Пройти тест снова
        </Link>
      </Button>
    </Box>
  );
});

export default Answer;
