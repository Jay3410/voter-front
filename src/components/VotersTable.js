import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default ({ voters }) => (
  <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {voters.map((voter, i) => {
          return (
            <TableRow key={voter._id}>
              <TableCell align="left">{i + 1}</TableCell>
              <TableCell
                align="left"
                style={{
                  color: "blue"
                }}
              >
                <Link
                  to={{
                    pathname: `/voter/${voter._id}`,
                    state: {
                      name: voter.name,
                      address: voter.address,
                      imgName: voter.img
                    }
                  }}
                >
                  {voter.name}
                </Link>
              </TableCell>
              <TableCell align="left">{voter.address}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </>
);
