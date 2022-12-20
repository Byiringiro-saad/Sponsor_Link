import React from "react";
import styled from "styled-components";
import { Stack, Pagination } from "@mui/material";

const Paginate = () => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Stack spacing={2}>
        <Pagination count={20} color="secondary" />
      </Stack>
    </Container>
  );
};

const Container = styled.div``;

export default Paginate;
