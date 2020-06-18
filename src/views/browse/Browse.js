import React from 'react';
import NavBar from '../../components/common/navbar/NavBar';
import {
  Container,
  Grid,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
  InputAdornment,
  Box
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

const Browse = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box marginTop="1rem">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="search">
                  Search shops and products
                </InputLabel>
                <OutlinedInput
                  id="search"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={197}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Browse;
