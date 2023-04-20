// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import tw from "twin.macro";
// import axios from "axios";
// import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
// import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

// // import Alert from "@mui/material/Alert";
// // import Button from "@mui/material/Button";
// // import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// // import { styled } from "@mui/material/styles";
// // import { blue } from "@mui/material/colors";
// // import { Snackbar, IconButton } from "@material-ui/core";
// // import { Close as CloseIcon } from "@material-ui/icons";


// const Container = tw.div`relative`;

// const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

// const HeadingInfoContainer = tw.div`flex flex-col items-center`;

// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

// const SvgDotPattern1 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;

// const SvgDotPattern2 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

// const SvgDotPattern3 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;

// const SvgDotPattern4 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

// export default () => {
//   const [data, setData] = React.useState([]);
// //   const [message, setMessage] = React.useState("");
// //   const [messageErreur, setMessageErreur] = React.useState("");
// //   const [selectedRow, setSelectedRow] = React.useState(null);
// //   const [snackbarOpen, setSnackbarOpen] = React.useState(false);
// //   const [snackbarMessage, setSnackbarMessage] = React.useState("");

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data: response } = await axios.get("/auth/");
//         setData(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const columns = [
//     {
//       field: "Nom",
//       headerName: "Nom",
//       headerClassName: "header-style",
//       width: 140,
//     },
//     {
//       field: "prenom",
//       headerName: "Prenon",
//       headerClassName: "header-style",
//       width: 210,
//     },
//     {
//       field: "mail",
//       headerName: "mail",
//       headerClassName: "header-style",
//       width: 180,
//     },
//     {
//       field: "tel",
//       headerName: "tel",
//       headerClassName: "header-style",
//       width: 150,
//     },
//     {
//       field: "entreprisse",
//       headerName: "entreprise",
//       headerClassName: "header-style",
//       type: "text",
//       width: 140,
//     },
//     // {
//     //   field: "stocks",
//     //   headerName: "Quantité Stock",
//     //   headerClassName: "header-style",
//     //   type: "number",
//     //   width: 140,
//     // },

//     // {
//     //   field: "status",
//     //   headerName: "Disponibilité",
//     //   headerClassName: "header-style",
//     //   width: 130,

//     //   renderCell: (params) => (
//     //     <div className={`status ${params.value.toLowerCase()}`}>
//     //       {params.value}
//     //     </div>
//     //   ),
//     // },

//   ];

//   const rows = data.map((rowData) => {
//     return {
//       nom: rowData.lastname,
//      Prenom: rowData.firstname,
//       mail: rowData.email,
//    tel: rowData.tel,
//       entreprisse: rowData.entreprisse,

//     };
//   });
//   const containerWidth = 200 + columns.length * 130;

// //   const handleRowClick = (params) => {
// //     if (params.row.status === "eddit") {
// //       setMessage(` "${params.row.nom}" `);
// //       setMessageErreur(null);
// //       setSelectedRow(params.row);
// //     } else {
// //       setMessageErreur(` "${params.row.description}" `);
// //       setMessage(null);
// //     }
// //   };

// //   const ColorButton = styled(Button)(({ theme }) => ({
// //     color: theme.palette.getContrastText(blue[500]),
// //     backgroundColor: blue[500],
// //     "&:hover": {
// //       backgroundColor: blue[800],
// //     },
// //   }));

// //   function handleAddToCart() {
// //     const cartItems = JSON.parse(localStorage.getItem("panier")) || [];
// //     cartItems.push(selectedRow);
// //     localStorage.setItem("panier", JSON.stringify(cartItems));
// //     setSnackbarMessage(
// //       `Article "${selectedRow.description}" ajouté au panier avec succés !`
// //     );
// //     setSnackbarOpen(true);
// //   }

// //   const handleSnackbarClose = () => {
// //     setSnackbarOpen(false);
// //   };

//   return (
//     <Container>
//       <SingleColumn>
//         <HeadingInfoContainer>
//           <HeadingTitle>Liste des users</HeadingTitle>
//           <HeadingDescription>
//             Sélectionner users vous vouvez modifier ou 
//             supprimer
//           </HeadingDescription>{" "}
//           <br />
//           <div className="container" style={{ width: containerWidth }}>
//             <DataGrid
//               rows={rows}
//               columns={columns}
//               pageSize={10}
//               rowsPerPageOptions={[10]}
//               autoHeight
//               autoWidth
//             //   onRowClick={handleRowClick}
//               {...rows}
//             />
//             {/* {message && (
//               <Alert
//                 variant="outlined"
//                 severity="info"
//                 color="info"
//                 action={
//                   <ColorButton
//                     variant="outlined"
//                     size="small"
//                     style={{ borderRadius: "50px" }}
//                     onClick={handleAddToCart}
//                   >
//                     <AddShoppingCartIcon />
//                     <strong>&nbsp; Ajouter au panier</strong>
//                   </ColorButton>
//                 }
//               >
//                 Article<strong>{message}</strong>sélectionné
//               </Alert>
//             )}
//             {messageErreur && (
//               <Alert variant="outlined" severity="warning" color="error">
//                 Article<strong>{messageErreur}</strong>n'est plus en stock
//               </Alert>
//             )}

//             <Snackbar
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "center",
//               }}
//               open={snackbarOpen}
//               autoHideDuration={3000}
//               onClose={handleSnackbarClose}
//               message={snackbarMessage}
//               style={{ backgroundColor: "#2196f3", color: "#fff" }}
//               action={
//                 <React.Fragment>
//                   <IconButton
//                     size="small"
//                     aria-label="close"
//                     color="inherit"
//                     onClick={handleSnackbarClose}
//                   >
//                     <CloseIcon fontSize="small" />
//                   </IconButton>
//                 </React.Fragment>
//               }
//             /> */}

//             <style>
//               {`

//         .header-style {
//           background-color: transparent;
//           color: #333;
//           font-size: 16px;
//           font-weight: bold;
//           display: flex;
//           align-items: center;
//           border-bottom: 1px solid #ccc;
//         }

//         .header-style .MuiDataGrid-columnSeparator {
//           display: block;
//         }

//         .status {
//           display: inline-block;
//           padding: 2px 8px;
//           border-radius: 8px;
//           font-size: 14px;
//           font-weight: 600;
//           text-align: center;
//           text-transform: capitalize;
//         }

//         .supprimer {
//           background-color: transparent;
//           color: #ff4d4f;
//           border: 2px solid #ff4d4f;
//         }

//         .eddit {
//           background-color: transparent;
//           color: #73d13d;
//           border: 2px solid #73d13d;
//         }


//         `}
//             </style>
//           </div>
//         </HeadingInfoContainer>
//       </SingleColumn>
//       <SvgDotPattern1 />
//       <SvgDotPattern2 />
//       <SvgDotPattern3 />
//       <SvgDotPattern4 />
//     </Container>
//   );
// };






// import React, { useState, useEffect } from 'react'
// import { } from "react-router-dom"
// import "./users.css";
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function users() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     GetAllUsers();
//   }, [])

//   const GetAllUsers = async () => {
//     const response = await axios.get("/users/GetAllUsers");
//     if (response.status === 200) {
//       setData(response.data);
//     }
//   }

//   // const onDeleteUser = async (_id) => {
//   //   if (
//   //     window.confirm("Are you sure that you wanted to delete that user record")
//   //   ) {
//   //     const response = await axios.delete('/user/delete/:id');
//   //     // if (response.status === 200) {
//   //     //   // toast.success(response.data);

//   //     //   GetAllUsers();
//   //     // }
//   //     if (response.status(200).send({
//   //       success: true,

//   //     }))
//   //   }
//   // }


//   console.log("data=>", data)

//   return (

//     <div>

//     <div style={{ marginTop: "100" }}>
//       <table className='styled-table'>
//         <thead>
//           <tr>
//             <th style={{ textAlign: "center" }}>No</th>
//             <th style={{ textAlign: "center" }}>Lastname</th>
//             <th style={{ textAlign: "center" }}>Firstname</th>
//             <th style={{ textAlign: "center" }}>Email</th>
//             <th style={{ textAlign: "center" }}>tel</th>
//             <th style={{ textAlign: "center" }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data && data.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <th scope='row'>{index + 1}</th>
//                 <td>{item.lastname}</td>
//                 <td>{item.firstname}</td>
//                 <td>{item.email}</td>
//                 <td>{item.tel}</td>

//                 <td>
//                   <Link to={`/updateUser/${item._id}`}>
//                     <button type="button" className='btn btn-edit'> Edit </button>
//                   </Link>
//                   <button type="button" className='btn btn-delete' >  Delete </button>
//                   <Link>
//                     <button type="button" className='btn btn-edit'> View  </button>
//                   </Link>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   )
// }

// export default users
// // onClick={() => onDeleteUser(item._id)}


import * as React from 'react';
import { styled, makeStyles } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function users() {

  useEffect(() => {
    GetAllUsers();
  }, [])

  const [data, setData] = useState([]);

  const GetAllUsers = async () => {
    const response = await axios.get("/users/GetAllUsers");
    if (response.status === 200) {
      setData(response.data);
    }
  }
  console.log("data=>", data)



  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete the user?")) {
      const response = await axios.get("/delete/:id");
      if (response.status === 200) {
        setData(response.data);
      }
    }

  }





  return (
    <div>
      <div className='justify-center mx-auto content-center mx-autobg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        <Button variant='contained' color='primary'>
          Add User
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell >No</StyledTableCell>
              <StyledTableCell align="center">lastname</StyledTableCell>
              <StyledTableCell align="center">firstname</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">tel</StyledTableCell>
              <StyledTableCell align="center">entreprisse</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{item.lastname}</StyledTableCell>
                <StyledTableCell align="center">{item.firstname}</StyledTableCell>
                <StyledTableCell align="center">{item.email}</StyledTableCell>
                <StyledTableCell align="center">{item.tel}</StyledTableCell>
                <StyledTableCell align="center">{item.entreprise}</StyledTableCell>
                <ButtonGroup
                  variant='contained'
                  aria-label='contained primary button group'>
                  <Button style={{ marginRight: "5px" }} color='secondary' onClick={handleDelete} > Delete</Button>
                  <Button color='primary'>Edit</Button>

                </ButtonGroup>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default users