import React, {useState} from 'react';
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table, TextField, Button } from '@material-ui/core';
import Chart from './Chart';
export default function TableChart(){
    const [subData, setSubrData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    function submitData(subData){
        setFinalData(finalData=>[...finalData, subData]);
        setSubrData(subData={});
        document.myForm.reset();
    }
    return(
        <div>
            <form name="myForm">
                <TableContainer style={{display:'flex', justifyContent:'center'}}>
                    <Table style={{width:'50%', justifyContent:'center'}} size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell><TextField value={subData['sub']} onChange={(e) => setSubrData({...subData, "sub": e.target.value})} label="Student Name" margin="normal" variant="outlined" color="secondary" /></TableCell>
                                <TableCell><TextField value={subData['sem']} onChange={(e) => setSubrData({...subData, "sem": e.target.value})} label="Engg Aggregate" margin="normal" variant="outlined" color="secondary" /></TableCell>
                                <TableCell><Button variant="contained" onClick={() => submitData(subData)} color="primary">Add Student</Button></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {finalData.map(data => (
                                <TableRow>
                                    <TableCell>{data.sub}</TableCell>
                                    <TableCell>{data.sem}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
            <br/>
            <Chart data={finalData}/>
        </div>
    )
}