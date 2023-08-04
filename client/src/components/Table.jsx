import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function AnimalTable({ data }) {

  return (
    <TableContainer component={Paper}>
      <Table sx= {{minWidth:"650"}} aria-label="animal table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Habitat</TableCell>
            <TableCell>Diet</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Lifespan</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((animal) => (
            <TableRow key={animal.name}>
              <TableCell>{animal.name}</TableCell>
              <TableCell>{animal.species}</TableCell>
              <TableCell>{animal.class}</TableCell>
              <TableCell>{animal.habitat}</TableCell>
              <TableCell>{animal.diet.join(', ')}</TableCell>
              <TableCell>{animal.weight}</TableCell>
              <TableCell>{animal.lifespan}</TableCell>
              <TableCell>{animal.color}</TableCell>
              <TableCell>{`${animal.location.latitude}, ${animal.location.longitude}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AnimalTable;