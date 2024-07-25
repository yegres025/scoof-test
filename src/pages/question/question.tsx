import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import { useState } from "react";
  import { scoofData } from "./helper/consts/const";
  import { useNavigate } from "react-router-dom";
  import { observer } from "mobx-react-lite";
  import totalStore from "../../store/total-store";
  
  const Question = observer(() => {
    const [page, setPage] = useState<number>(0);
    const [nextPageAcces, setNextPageAcces] = useState<boolean>(false);
    const [variant, setVariant] = useState<number>(0);
    const navigate = useNavigate();
  
    const handleChange = (value: number) => {
      console.log(value);
      setVariant(value);
  
      if (nextPageAcces) return;
      setNextPageAcces(!nextPageAcces);
    };
  
    const handleClick = () => {
      if (page === 9) {
        navigate("/answer");
        return;
      }
  
      setPage((prevPage) => {
        prevPage += 1;
        return prevPage;
      });
  
      totalStore.increment(variant);
      setNextPageAcces(false);
    };
  
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
      >
        <Box
          component="img"
          src={scoofData[page].img}
          maxHeight="45vh"
          maxWidth="45vw"
        />
        <FormControl>
          <FormLabel sx={{ color: "white", mt: "12px" }}>
            {scoofData[page].question}
          </FormLabel>
          <RadioGroup name="radio-buttons-group">
            {scoofData[page].variants.map((variant) => (
              <FormControlLabel
                key={variant.name}
                control={<Radio />}
                label={variant.name.toString()}
                value={variant.name}
                onChange={() => handleChange(variant.value)}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button
          sx={{ width: "150px" }}
          variant="contained"
          color="secondary"
          disabled={!nextPageAcces}
          onClick={() => handleClick()}
        >
          {page !== 9 ? "Далее" : "Узнать ответ"}
        </Button>
      </Box>
    );
  });
  
  export default Question;