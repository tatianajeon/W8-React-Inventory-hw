import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid'; 
import { serverCalls } from '../../api'; 
import { useGetData } from '../../custom-hooks/FetchData'; 
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle 
} from '@mui/material'; 
import { GolfForm } from '../../components'; 



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {  
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

interface gridData{
  data:{
    id?: string;
    name?: string;
  }
}


export const DataTable =  () => {
  
  let { golfData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  }

  console.log(gridData) // a list of id's from checked rows

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Golf Clubs In Inventory</h2>
          <DataGrid 
						rows={golfData} 
						columns={columns} 
						pageSize={5} 
						checkboxSelection 
						onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
						{...golfData}  
					/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Drone</DialogTitle>
          <DialogContent>
            <DialogContentText>Drone id: {gridData[0]}</DialogContentText>
              <GolfForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );
}