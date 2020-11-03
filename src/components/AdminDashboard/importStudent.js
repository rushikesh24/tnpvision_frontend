import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Box, Grid, Card, Button, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalData from '../StudentDashboard/personalData';

const useStyles = makeStyles((theme) => ({
    box:{
        margin: '10px',
        borderStyle: 'dashed',
    },
    uploadArea:{
        padding: '25px',
        backgroundColor: '#eeeeee',
        textAlign:'center'
    },
    card:{
        marginBottom: '15px'
    },
    scrollCard:{
        marginBottom: '15px',
        overflowY: 'scroll',
        height: '61vh',
        padding: '1rem'
    },
    alignButton:{
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            margin: 'auto',
        },
        [theme.breakpoints.up('xs')]: {
            marginBottom: '25px',
        }
    },
    outerBox:{
        borderColor: "grey.500",
        borderRadius: '5px',
        margin: '10px',
    }
}));

const App = () => {
    const classes = useStyles();
    const maxSize = 1048576;
    
    const onDrop = useCallback(acceptedFiles => {
      console.log(acceptedFiles);
    }, []);
    
    const { isDragActive, getRootProps, getInputProps, isDragReject, 
       // acceptedFiles, rejectedFiles 
    } = useDropzone({
      onDrop,
      accept: 'image/png',
      minSize: 0,
      maxSize,
    });
    
    return (
        <Container>
            <Grid container direction='column'>
                <Card elevation={2} className={classes.card}>
                    <CardHeader title='Import Multiple Student'/>
                    <Box border= {1} className={classes.outerBox} >
                    <Grid container direction='row' spacing={2}>
                        <Grid item xs={12} sm={10}> 
                            <Box border={1} className={classes.box} >
                                <div className="container text-center mt-5">
                                    <div {...getRootProps()} className={classes.uploadArea} >
                                        <input {...getInputProps()} />
                                        {!isDragActive && 'Click here or drop a file to upload!'}
                                        {isDragActive && !isDragReject && "Drop it like it's hot!"}
                                        {isDragReject && "File type not accepted, sorry!"}
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2} className={classes.alignButton} >
                            <Button variant='contained' color='primary' className={classes.button}> Upload</Button>
                        </Grid>
                    </Grid>
                    </Box>
                </Card>
                <Card elevation={2} className={classes.scrollCard}>
                    <Grid item xs={false} sm={12}>
                    <CardHeader title='Import Single Student'/>
                        <PersonalData />
                    </Grid>
                </Card>
            </Grid>
      </Container>
    )  
}

export default App;

