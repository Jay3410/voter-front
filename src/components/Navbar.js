import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Grid,
  TextField
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default ({ filter, changeFilterState }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            maxWidth: 300,
            background: "white",
            padding: "3px 10px"
          }}
        >
          <Grid item xs={1}>
            <Search
              style={{
                color: "grey"
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <TextField
              value={filter}
              onChange={changeFilterState}
              fullWidth
              placeholder="Search name, area"
            />
          </Grid>
        </Grid>
        <div style={{ flex: 1 }} />
        <Button variant="outlined" color="inherit">
          <Link to="/register">register</Link>
        </Button>
      </Toolbar>
    </AppBar>
  </>
);
