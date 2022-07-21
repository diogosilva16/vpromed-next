import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Loader from "./Loader";
import ButtonComp from "./ButtonComp";
import { useRouter } from "next/router";

const Sweet = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getCardInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/5/1`
      );
      const data = await response.json();
      setCardInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCardInfo();
  }, []);

  const router = useRouter();
  let { id } = router.query;

  const goToPage = (id) => {
    console.log("yes");
    // router.push(`/tendencia/${id}`);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Grid container direction="row" pt={5} pb={5}>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1">
                {cardInfo[0].NAME_SEO}
              </Typography>
            </Box>
            <Box pt={2} pb={2}>
              <Typography
                variant="h2"
                sx={{ textTransform: "uppercase", color: "white" }}
              >
                {JSON.parse(cardInfo[0].CUSTOMCAMPS).main_description}
              </Typography>
            </Box>
            <Box>
              <Typography>
                {JSON.parse(cardInfo[0].CUSTOMCAMPS).small_description}.
              </Typography>
            </Box>
            <Box pt={2} pb={2}>
              <ButtonComp
                text={"Saber Mais"}
                goTo={() => goToPage(cardInfo[0].ARTICLE_ID)}
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Especialidade"
              width="100%"
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Sweet;
