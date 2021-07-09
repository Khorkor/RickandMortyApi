import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    display: "flex",
    marginBottom: "15px",
    marginTop: "15px",
  },
}));

const Page = () => {
  const classes = useStyles();
  const { info, fetchPage } = useGlobalContext();

  return (
    <Box mx={10}>
      <Pagination
        className={classes.root}
        count={info.pages}
        color="primary"
        showFirstButton
        showLastButton
        size="medium"
        boundaryCount={2}
        onChange={(event, page) => fetchPage(page)}
      ></Pagination>
    </Box>
  );
};

export default Page;
