import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { Paper } from "@mui/material";
import "./profile.css";

function createData(attr, val) {
  return { attr, val };
}

export default function Profile() {
  const rows = [
    createData("Date of Birth", "22 April 2003"),
    createData("Gender", "Male"),
    createData("Phone Number", 1234567890),
    createData("Aadhaar ID", "1111 2222 3333"),
  ];
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
        className="profile-box"
      >
        <nav aria-label="main mailbox folders">
          <div className="iconandtext">
            <div>
              <FontAwesomeIcon icon={faUserCircle} size={"6x"} />
            </div>
            <div>
              <Typography variant="h5">Bhuvan Bokka</Typography>
            </div>
            <div>
              <Divider />
              <List>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.attr}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.attr}
                          </TableCell>
                          <TableCell align="right">{row.val}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </List>
            </div>
          </div>
        </nav>
        <Divider />
      </Box>
    </div>
  );
}
