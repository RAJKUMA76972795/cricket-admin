import { makeStyles, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import React, { useState } from 'react'



const useStyles = makeStyles((theme) => ({
    main: {
        width: "98%",
        margin: "auto",
        height: "calc(100vh - 40px)",
        // border: "1px solid grey",
        marginTop: "10px"
    },
    logo: {
        flexGrow: 1
    },
    heading: {
        backgroundColor: "rgb(250,250,250)",

    },
    logo: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        borderRight: "1px solid black"
    },
    action: {
        marginLeft: "10px"
    },
    button: {
        margin: theme.spacing(1),
    },
    record: {
        display: "flex",
        alignItems: "center",
    },
    tableControl: {
        width: "calc(100vw - 300px)",
        overflow: "auto",
        margin: "10px",
        [theme.breakpoints.down("sm")]: {
            width: "calc(100vw - 50px)",
        },
    }
}));



const BlockMarket = () => {
    const classes = useStyles();





    return (
        <div className={classes.main}>





            <div className={classes.tableControl}>
                <TableContainer >


                    <Table style={{ width: "100%", border: "1px solid black" }}>
                        <TableHead >


                            <TableRow>
                                {["SNo", "Name", "Action"].map((head) => {
                                    return <TableCell style={{ color: "black", fontWeight: 400, border: "1px solid black", borderRight: "none", borderLeft: "none" }} key={head} align={head === "Action" ? "right" : "left"}>
                                        {head}
                                    </TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>

                </TableContainer>
            </div>



        </div>
    )
}

export default BlockMarket