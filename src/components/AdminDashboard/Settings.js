import React from 'react'
import { Card, CardHeader, Grid, TextField, Box, Divider, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';



function Settings() {
    const [isPasswordUpdated, setPasswordUpdated] = React.useState(false);

    const formik = useFormik({
        initialValues:{
            password: '',
            cnfrmpassword: '',
        },
        onSubmit: (values, { setSubmitting}) => {
            setSubmitting(true);
            console.log("Form Data", values);
            setPasswordUpdated(true);
            
        },
        validationSchema: Yup.object({
            password: Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/, 'Password must contain minimum 6 characters, at least 1 uppercase, 1 lowercase letter, 1 special charcter and 1 number').required('Required'),
            cnfrmpassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords does not match'),
        })
    });

    return (
        <div>
            <Card>
                <CardHeader title='Password' subheader='Update Password' />
                <Divider />
                {!isPasswordUpdated && <React.Fragment>
                    <Box border= {0} borderRadius= '5px' padding= '20px'>
                    <Grid container>
                        <Grid item xs={false} sm={12}>
                        <form onSubmit={formik.handleSubmit}>
                        <TextField
                            margin="dense"
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur= {formik.handleBlur}
                            error={formik.errors.password && formik.touched.password}
                            helperText= {(formik.errors.password && formik.touched.password) && formik.errors.password}
                            value={formik.values.password}
                        />
                        <TextField
                            margin="dense"
                            id="cnfrmpassword"
                            name="cnfrmpassword"
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur= {formik.handleBlur}
                            error={formik.errors.cnfrmpassword && formik.touched.cnfrmpassword}
                            helperText= {(formik.errors.cnfrmpassword && formik.touched.cnfrmpassword) && formik.errors.cnfrmpassword}
                            value={formik.values.cnfrmpassword}
                        />
                        <Box display="flex" justifyContent="flex-end" >
                            <Button variant='contained' color='primary' style={{marginTop: '10px'}} type='submit' disabled={formik.isSubmitting}>
                                Update
                            </Button>
                        </Box>
                        </form>
                        </Grid>
                    </Grid>
                </Box>
                </React.Fragment>} 
            </Card>
        </div>
    )
}

export default Settings
