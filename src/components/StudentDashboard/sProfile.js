import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Tabs, Tab, TextField, MenuItem, Grid, Box, Checkbox, FormControlLabel, Avatar, makeStyles, Button, Divider } from '@material-ui/core';
//import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import {DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import passport from '../../static/images/passport.jpeg';


const ranges = [
    {
        value: 'none',
        label: 'None',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'notsay',
      label: 'Prefer Not To Say',
    },
];

const college=[
	{
		value: 'none',
		label: 'None',
	},
	{
		value: 'dypcoe',
		label: 'DYPCOE',
	},
	{
		value: 'dypiemr',
		label: 'DYPIEMR',
	},
];
const departments = [
    {
        value: 'none',
        label: 'None',
    },
    {
      value: 'computer',
      label: 'Computer Engineering',
    },
    {
      value: 'it',
      label: 'Information Technology',
    },
    {
      value: 'entc',
      label: 'Electronics and Telecommunication',
    },
    {
      value: 'mechanical',
      label: 'Mechanical Engineering',
    },
    {
      value: 'civil',
      label: 'Civil Engineering',
    },
    {
        value: 'instrumentation',
        label: 'Instrumentation Engineering',
    },
    {
        value: 'production',
        label: 'Production Engineering',
    },
];

const after10th = [
    {
        value: 'none',
        label: 'None',
    },
    {
      value: '12th',
      label: '12th Standard',
    },
    {
      value: 'diploma',
      label: 'Diploma',
    },
];

const useStyles = makeStyles({
    img:{
        backgroundColor:'#ffffff',
        height: '120px',
        width: '120px',
    },
    button:{
        marginTop: '15px',
    },
    scroll:{
        overflowY: 'scroll',
        height: '76vh',
    }
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function SimpleTabs() { 
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [isPersonalDataUpdated, setPersonalDataUpdated] = React.useState(false);
    const [isAcademicsDataUpdated, setAcademicsDataUpdated] = React.useState(false); 
    // const [selectedDate, handleDateChange] = React.useState(new Date());
   

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const formik1 = useFormik({
        initialValues:{
            email: '', 
            gender: 'none', 
            fatheroccupation: '', 
            motheroccupation: '',
            studentphone: '', 
            phone: '', 
            peraddress: '', 
            curaddress:'',
            pan:'',
            aadhar:'',
            dob: new Date(),

        },
        onSubmit: (values, { setSubmitting}) => {
            setSubmitting(true);
            console.log("Form Data", values);
            setPersonalDataUpdated(true);
            
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email').required('Required'),
            phone: Yup.string().matches(/^[0]?[789]\d{9}$/, 'Invalid Phone Number').required('Required'),
            fatheroccupation: Yup.string().required('Required'),
            motheroccupation: Yup.string().required('Required'),
            studentphone: Yup.string().matches(/^[0]?[789]\d{9}$/, 'Invalid Phone Number').required('Required'),
            peraddress: Yup.string().required('Required'),
            curaddress: Yup.string().required('Required'),
            pan: Yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN Number').required('Required'),
            aadhar: Yup.string().matches(/^[0-9]{12}$/, 'Invalid Aadhar Number').required('Required'),
            dob: Yup.date().nullable(),
            gender: Yup.string().required("Required"),
        })
    });

    const formik2 = useFormik({
        initialValues:{
            sem1: '',
            sem2: '',
            sem3: '',
            sem4: '',
            sem5: '',
            sem6: '',
            sem7: '',
            sem8: '',
            aggregate: '',
            sem1percent: '',
            sem2percent: '',
            sem3percent: '',
            sem4percent: '',
            sem5percent: '',
            sem6percent: '',
            sem7percent: '',
            sem8percent: '',
            peraggregate:'',

            college: 'none',
            selectdepartment: 'none', 
            prn: '',
            selectarea: 'none', 
            jruniversity:'',
            jryearofpassing:'',
            jrscore:'',
            schooluniversity:'', 
            yearofpassing:'',
            schoolscore: '',
            liveback:'0',
            deadback:'0',
            educationalgap: '0',
            placed: false,
        },
        onSubmit: (values, { setSubmitting}) => {
            setSubmitting(true);
            console.log("Form Data", values);
            setAcademicsDataUpdated(true);
        },
        validationSchema: Yup.object({
            sem1: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem2: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem3: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem4: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem5: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem6: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem7: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem8: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            aggregate: Yup.string().matches(/^(10|\d)(\.\d{1,2})?$/, 'Invalid SGPA').required('Required'),
            sem1percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            sem2percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            sem3percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            sem4percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            sem5percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            sem6percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            sem7percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            sem8percent: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            peraggregate: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),

            college: Yup.string().required('Required'),
            selectdepartment: Yup.string().required('Required'),
            prn: Yup.string().matches(/^[0-9]{8}[A-Z]{1}$/, 'Invalid PRN Number').required('Required'),
            selectarea: Yup.string().required('Required'),
            schooluniversity: Yup.string().required('Required'),
            yearofpassing: Yup.date().nullable(),
            schoolscore: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            jruniversity: Yup.string().required('Required'),
            jryearofpassing: Yup.date(),
            jrscore: Yup.string().matches(/^(100|\d|\d{2})(\.\d{1,2})?$/, 'Invalid Percentage').required('Required'),
            liveback: Yup.number().min(0).max(10).required('Required'),
            deadback: Yup.number().min(0).max(10).required('Required'),
            educationalgap: Yup.number().min(0).max(10).required('Required'),
            placed: Yup.boolean().oneOf([true, false]),
        })
    });

    //Button
    const handleClick= () =>{

    }
    const [selectedDate, setSelectedDate] = React.useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

  return (
        <div >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <AppBar position='static' color= 'default'>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Personal Data" {...a11yProps(0)} />
                    <Tab label="Academics Data" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <Box border= {1} borderColor= "grey.500" borderRadius= '5px' className={classes.scroll}>
            <TabPanel value={value} index={0} >
            {!isPersonalDataUpdated && <React.Fragment>
                <div label="Personal Data">
                        <Grid container >
                            <Grid item xs={false} sm={1} />
                            <Grid item xs={12} sm={10} >
                                <form onSubmit={formik1.handleSubmit} >
                                    <Box border= {1} borderColor= "grey.500" margin='10px' borderRadius= '5px' padding= '20px'>
                                    <Grid container spacing={3} style={{marginBottom: '30px' }} >
                                        <Grid item xs={false} sm={6} >
                                            <Box display='flex' alignItems='center' flexDirection='column' >
                                            <Avatar alt="Remy Sharp" src={passport} className={classes.img} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={false} sm={6} >
                                            <Box display='flex' alignItems='center' flexDirection='column' >
                                                <Typography color="textPrimary" gutterBottom variant="h3" >
                                                    Mayur Nagare
                                                </Typography>
                                                <Typography color="textSecondary" variant="body1" >
                                                    Manmad, India
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                    <Grid item xs={false} sm={6} >
                                        <DatePicker
                                            autoOk
                                            disableFuture
                                            margin="normal"
                                            variant='inline'
                                            id= 'dob'
                                            format="dd/MM/yyyy"
                                            label="Date of Birth"
                                            name= 'dob'
                                            fullWidth
                                            views={["year", "month", "date"]}
                                            onChange={formik1.handleChange && handleDateChange}
                                            onBlur= {formik1.handleBlur}
                                            error={formik1.errors.dob }
                                            helperText= {(formik1.errors.dob && formik1.touched.dob) && formik1.errors.dob}
                                            value={formik1.values.dob && selectedDate}
                                            
                                        />
                                        <TextField
                                            margin="dense"
                                            id="gender"
                                            name="gender"
                                            label="Gender"
                                            select
                                            variant='standard'
                                            fullWidth
                                            onChange={formik1.handleChange }
                                            onBlur= {formik1.handleBlur}
                                            error={formik1.errors.gender }
                                            helperText= {(formik1.errors.gender && formik1.touched.gender) && formik1.errors.gender}
                                            value={formik1.values.gender}
                                            InputLabelProps={{shrink: true,}}>
                                                {ranges.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                        </TextField>
                                        <TextField
                                            margin="dense"
                                            id="fatheroccupation"
                                            name="fatheroccupation"
                                            label="Father's Occupation"
                                            type="text"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error={formik1.errors.fatheroccupation && formik1.touched.fatheroccupation}
                                            helperText= {(formik1.errors.fatheroccupation && formik1.touched.fatheroccupation) && formik1.errors.fatheroccupation}
                                            value={formik1.values.fatheroccupation}
                                        />
                                        <TextField
                                            margin="dense"
                                            id="motheroccupation"
                                            name="motheroccupation"
                                            label="Mother's Occupation"
                                            type="text"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error={formik1.errors.motheroccupation && formik1.touched.motheroccupation}
                                            helperText= {(formik1.errors.motheroccupation && formik1.touched.motheroccupation) && formik1.errors.motheroccupation}
                                            value={formik1.values.motheroccupation}
                                        />
                                        
                                        <TextField
                                            margin="dense"
                                            id="studentphone"
                                            name="studentphone"
                                            label="Student Phone Number"
                                            type="number"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error={formik1.errors.studentphone && formik1.touched.studentphone}
                                            helperText= {(formik1.errors.studentphone && formik1.touched.studentphone) && formik1.errors.studentphone}
                                            value={formik1.values.studentphone}
                                        />
                                        <TextField
                                            margin="dense"
                                            id="email"
                                            name="email"
                                            label="Parent's Email ID"
                                            type="text"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error={formik1.errors.email && formik1.touched.email}
                                            helperText= {(formik1.errors.email && formik1.touched.email) && formik1.errors.email}
                                            value={formik1.values.email}
                                        />
                                        </Grid>
                                        <Grid item xs={false} sm={6}>
                                        <TextField
                                            margin="dense"
                                            id="phone"
                                            name="phone"
                                            label="Parent's Phone Number"
                                            type="number"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error= {formik1.errors.phone && formik1.touched.phone}
                                            helperText= {(formik1.errors.phone && formik1.touched.phone) && formik1.errors.phone}
                                            value={formik1.values.phone}
                                        />
                                        <TextField
                                            margin="dense"
                                            id=""
                                            name="peraddress"
                                            label="Permenant Address"
                                            type="text"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error= {formik1.errors.peraddress && formik1.touched.peraddress}
                                            helperText= {(formik1.errors.peraddress && formik1.touched.peraddress) && formik1.errors.peraddress}
                                            value={formik1.values.peraddress}
                                        />
                                        <TextField
                                            margin="dense"
                                            id=""
                                            name="curaddress"
                                            label="Current Address"
                                            type="text"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error= {formik1.errors.curaddress && formik1.touched.curaddress}
                                            helperText= {(formik1.errors.curaddress && formik1.touched.curaddress) && formik1.errors.curaddress}
                                            value={formik1.values.curaddress}
                                        />
                                        <TextField
                                            margin="dense"
                                            id=""
                                            name="pan"
                                            label="PAN Number"
                                            type="text"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error= {formik1.errors.pan && formik1.touched.pan}
                                            helperText= {(formik1.errors.pan && formik1.touched.pan) && formik1.errors.pan}
                                            value={formik1.values.pan}
                                        />
                                        <TextField
                                            margin="dense"
                                            id="aadhar"
                                            name="aadhar"
                                            label="Aadhar Number"
                                            type="text"
                                            variant="standard"
                                            fullWidth
                                            onChange={formik1.handleChange}
                                            onBlur= {formik1.handleBlur}
                                            error= {formik1.errors.aadhar && formik1.touched.aadhar}
                                            helperText= {(formik1.errors.aadhar && formik1.touched.aadhar) && formik1.errors.aadhar}
                                            value={formik1.values.aadhar}
                                        />
                                        </Grid>
                                        </Grid>
                                        <Button className={classes.button} onClick={handleClick} type="submit" color="primary" variant='contained' disabled={formik1.isSubmitting}>Save {'&'} Next</Button>
                                    </Box>
                                </form>
                            </Grid> 
                            <Grid item xs={false} sm={1} />
                            </Grid>
                    </div>
                    </React.Fragment>
					}
            </TabPanel>
            <TabPanel value={value} index={1}>
            {!isAcademicsDataUpdated && <React.Fragment>
                <div label="Academics Data">
                    <Grid container >
                        <Grid item xs={false} sm={1} />
                            <Grid item xs={12} sm={10} >
                            <form onSubmit={formik2.handleSubmit}>
                                <Box border= {1} borderColor= "grey.500" margin='10px' borderRadius= '5px' padding= '20px' >
                                    <Typography variant= "h5" style={{color: '#9e9e9e'}} >Current/Ongoing Course</Typography>
                                    <Divider style={{width:'262px'}} />
                                    <Grid container spacing={3} >
                                        <Grid item xs={false} sm={6} >
                                            <TextField
                                                margin="dense"
                                                id="college"
                                                name="college"
                                                label="College Name"
                                                select
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.college && formik2.touched.college}
                                                helperText= {(formik2.errors.college && formik2.touched.college) && formik2.errors.college}
                                                value={formik2.values.college}
                                                InputLabelProps={{shrink: true,}}>
                                                    {college.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                            </TextField>
                                            <TextField
                                                margin="dense"
                                                id="prn"
                                                name="prn"
                                                label="PRN"
                                                type="text"
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.prn && formik2.touched.prn}
                                                helperText= {(formik2.errors.prn && formik2.touched.prn) && formik2.errors.prn}
                                                value={formik2.values.prn}
                                            />
                                        </Grid>
                                        <Grid item xs={false} sm={6} >
                                            <TextField
                                                margin="dense"
                                                id="selectdepartment"
                                                name="selectdepartment"
                                                label="Department"
                                                select
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.selectdepartment && formik2.touched.selectdepartment}
                                                helperText= {(formik2.errors.selectdepartment && formik2.touched.selectdepartment) && formik2.errors.selectdepartment}
                                                value={formik2.values.selectdepartment}
                                                InputLabelProps={{shrink: true,}}>
                                                    {departments.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                    <Typography variant= "h5" style={{color: '#9e9e9e'}}>X Details</Typography>
                                    <Divider style={{width:'96px'}} />
                                    <Grid container spacing={3}>
                                        <Grid item xs={false} sm={6}>
                                            <TextField
                                                margin="dense"
                                                id="schooluniversity"
                                                name="schooluniversity"
                                                label="X University / Board"
                                                type="text"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.schooluniversity && formik2.touched.schooluniversity}
                                                helperText= {(formik2.errors.schooluniversity && formik2.touched.schooluniversity) && formik2.errors.schooluniversity}
                                                value={formik2.values.schooluniversity}
                                            />
                                            <DatePicker
                                                disableFuture
                                                label="Year of Passing"
                                                name= 'yearofpassing'
                                                views={["year"]}
                                                fullWidth
                                                onChange={formik2.handleChange && handleDateChange }
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.yearofpassing && formik2.touched.yearofpassing}
                                                helperText= {(formik2.errors.yearofpassing && formik2.touched.yearofpassing) && formik2.errors.yearofpassing}
                                                value={formik2.values.yearofpassing && selectedDate }
                                            />
                                        </Grid>
                                        <Grid item xs={false} sm={6}>
                                            <TextField
                                                margin="dense"
                                                id="schoolscore"
                                                name="schoolscore"
                                                label="X Percentage"
                                                type="text"
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.schoolscore && formik2.touched.schoolscore}
                                                helperText= {(formik2.errors.schoolscore && formik2.touched.schoolscore) && formik2.errors.schoolscore}
                                                value={formik2.values.schoolscore}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Typography variant= "h5" style={{color: '#9e9e9e'}} >XII / Diploma Details</Typography>
                                    <Divider style={{width:'218px'}} />
                                    <Grid container spacing={3} >
                                        <Grid item xs={false} sm={6}>
                                            <TextField
                                                margin="dense"
                                                id="selectarea"
                                                name="selectarea"
                                                label="XII / Diploma"
                                                select
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.selectarea && formik2.touched.selectarea}
                                                helperText= {(formik2.errors.selectarea && formik2.touched.selectarea) && formik2.errors.selectarea}
                                                value={formik2.values.selectarea}
                                                InputLabelProps={{ shrink: true,}}>
                                                    {after10th.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                            </TextField>
                                            <TextField
                                                margin="dense"
                                                id="jruniversity"
                                                name="jruniversity"
                                                label="XII University / Board"
                                                type="text"
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.jruniversity && formik2.touched.jruniversity}
                                                helperText= {(formik2.errors.jruniversity && formik2.touched.jruniversity) && formik2.errors.jruniversity}
                                                value={formik2.values.jruniversity}
                                            />
                                        </Grid>
                                        <Grid item xs={false} sm={6}>
                                            <DatePicker
                                                disableFuture
                                                label="Year of Passing"
                                                name= 'yearofpassing'
                                                views={["year"]}
                                                onChange={formik2.handleChange && handleDateChange }
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.jryearofpassing && formik2.touched.jryearofpassing}
                                                helperText= {(formik2.errors.jryearofpassing && formik2.touched.jryearofpassing) && formik2.errors.jryearofpassing}
                                                value={formik2.values.jryearofpassing && selectedDate}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="jrscore"
                                                name="jrscore"
                                                label="XII Percentage"
                                                type="text"
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.jrscore && formik2.touched.jrscore}
                                                helperText= {(formik2.errors.jrscore && formik2.touched.jrscore) && formik2.errors.jrscore}
                                                value={formik2.values.jrscore}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Typography variant= "h5" style={{color: '#9e9e9e'}} >Engg. Details</Typography>
                                    <Divider style={{width:'144px'}} />
                                    <Grid container spacing={3}>
                                        <Grid item xs={false} sm={6}>
                                            <TextField
                                                margin="dense"
                                                id="sem1"
                                                name="sem1"
                                                label="Semester 1 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem1 && formik2.touched.sem1}
                                                helperText= {(formik2.errors.sem1 && formik2.touched.sem1) && formik2.errors.sem1}
                                                value={formik2.values.sem1}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem2"
                                                name="sem2"
                                                label="Semester 2 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem2 && formik2.touched.sem2}
                                                helperText= {(formik2.errors.sem2 && formik2.touched.sem2) && formik2.errors.sem2}
                                                value={formik2.values.sem2}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem3"
                                                name="sem3"
                                                label="Semester 3 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem3 && formik2.touched.sem3}
                                                helperText= {(formik2.errors.sem3 && formik2.touched.sem3) && formik2.errors.sem3}
                                                value={formik2.values.sem3}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem4"
                                                name="sem4"
                                                label="Semester 4 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem4 && formik2.touched.sem4}
                                                helperText= {(formik2.errors.sem4 && formik2.touched.sem4) && formik2.errors.sem4}
                                                value={formik2.values.sem4}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem5"
                                                name="sem5"
                                                label="Semester 5 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem5 && formik2.touched.sem5}
                                                helperText= {(formik2.errors.sem5 && formik2.touched.sem5) && formik2.errors.sem5}
                                                value={formik2.values.sem5}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem6"
                                                name="sem6"
                                                label="Semester 6 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem6 && formik2.touched.sem6}
                                                helperText= {(formik2.errors.sem6 && formik2.touched.sem6) && formik2.errors.sem6}
                                                value={formik2.values.sem6}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem7"
                                                name="sem7"
                                                label="Semester 7 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem7 && formik2.touched.sem7}
                                                helperText= {(formik2.errors.sem7 && formik2.touched.sem7) && formik2.errors.sem7}
                                                value={formik2.values.sem7}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem8"
                                                name="sem8"
                                                label="Semester 8 SGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem8 && formik2.touched.sem8}
                                                helperText= {(formik2.errors.sem8 && formik2.touched.sem8) && formik2.errors.sem8}
                                                value={formik2.values.sem8}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="aggregate"
                                                name="aggregate"
                                                label="Engg. Aggregate CGPA"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.aggregate && formik2.touched.aggregate}
                                                helperText= {(formik2.errors.aggregate && formik2.touched.aggregate) && formik2.errors.aggregate}
                                                value={formik2.values.aggregate}
                                            />
                                        </Grid>
                                        <Grid item xs={false} sm={6}>
                                            <TextField
                                                margin="dense"
                                                id="sem1percent"
                                                name="sem1percent"
                                                label="Semester 1 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem1percent && formik2.touched.sem1percent}
                                                helperText= {(formik2.errors.sem1percent && formik2.touched.sem1percent) && formik2.errors.sem1percent}
                                                value={formik2.values.sem1percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem2percent"
                                                name="sem2percent"
                                                label="Semester 1 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem2percent && formik2.touched.sem2percent}
                                                helperText= {(formik2.errors.sem2percent && formik2.touched.sem2percent) && formik2.errors.sem2percent}
                                                value={formik2.values.sem2percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem3percent"
                                                name="sem3percent"
                                                label="Semester 3 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem3percent && formik2.touched.sem3percent}
                                                helperText= {(formik2.errors.sem3percent && formik2.touched.sem3percent) && formik2.errors.sem3percent}
                                                value={formik2.values.sem3percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem4percent"
                                                name="sem4percent"
                                                label="Semester 4 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem4percent && formik2.touched.sem4percent}
                                                helperText= {(formik2.errors.sem4percent && formik2.touched.sem4percent) && formik2.errors.sem4percent}
                                                value={formik2.values.sem4percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem5percent"
                                                name="sem5percent"
                                                label="Semester 5 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem5percent && formik2.touched.sem5percent}
                                                helperText= {(formik2.errors.sem5percent && formik2.touched.sem5percent) && formik2.errors.sem5percent}
                                                value={formik2.values.sem5percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem6percent"
                                                name="sem6percent"
                                                label="Semester 6 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem6percent && formik2.touched.sem6percent}
                                                helperText= {(formik2.errors.sem6percent && formik2.touched.sem6percent) && formik2.errors.sem6percent}
                                                value={formik2.values.sem6percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem7percent"
                                                name="sem7percent"
                                                label="Semester 7 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem7percent && formik2.touched.sem7percent}
                                                helperText= {(formik2.errors.sem7percent && formik2.touched.sem7percent) && formik2.errors.sem7percent}
                                                value={formik2.values.sem7percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="sem8percent"
                                                name="sem8percent"
                                                label="Semester 8 Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.sem8percent && formik2.touched.sem8percent}
                                                helperText= {(formik2.errors.sem8percent && formik2.touched.sem8percent) && formik2.errors.sem8percent}
                                                value={formik2.values.sem8percent}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="peraggregate"
                                                name="peraggregate"
                                                label="Engg. Aggregate Percentage"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.peraggregate && formik2.touched.peraggregate}
                                                helperText= {(formik2.errors.peraggregate && formik2.touched.peraggregate) && formik2.errors.peraggregate}
                                                value={formik2.values.peraggregate}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Typography variant= "h5" style={{color: '#9e9e9e'}} >Extra Details</Typography>
                                    <Divider style={{width:'140px'}} />
                                    <Grid container spacing={3} >
                                        <Grid item xs={false} sm={6} >
                                            <TextField
                                                margin="dense"
                                                id="liveback"
                                                name="liveback"
                                                label="No. Of Live Backlogs"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.liveback && formik2.touched.liveback}
                                                helperText= {(formik2.errors.liveback && formik2.touched.liveback) && formik2.errors.liveback}
                                                value={formik2.values.liveback}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="deadback"
                                                name="deadback"
                                                label="No. Of Dead Backlogs"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.deadback && formik2.touched.deadback}
                                                helperText= {(formik2.errors.deadback && formik2.touched.deadback) && formik2.errors.deadback}
                                                value={formik2.values.deadback}
                                            />
                                        </Grid>
                                        <Grid item xs={false} sm={6} >
                                            <TextField
                                                margin="dense"
                                                id="educationalgap"
                                                name="educationalgap"
                                                label="Educational Gap"
                                                type="number"
                                                variant="standard"
                                                fullWidth
                                                
                                                onChange={formik2.handleChange}
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.educationalgap && formik2.touched.educationalgap}
                                                helperText= {(formik2.errors.educationalgap && formik2.touched.educationalgap) && formik2.errors.educationalgap}
                                                value={formik2.values.educationalgap}
                                            />
                                            <FormControlLabel style={{alignItems: 'center'}}
                                                control={<Checkbox  color='default' onChange={formik2.handleChange} name="placed" />}
                                                label="Placed"
                                                onBlur= {formik2.handleBlur}
                                                error={formik2.errors.placed && formik2.touched.placed}
                                                value={formik2.values.placed}
                                            />
                                        </Grid>
                                    </Grid> 
                                    <Button className={classes.button} type="submit" color="primary" variant='contained' disabled={formik2.isSubmitting}>Update</Button>                                   
                                </Box>
                            </form>
                        </Grid> 
                        <Grid item xs={false} sm={1}/>
                    </Grid>
                </div>
            </React.Fragment>}
            </TabPanel>
            </Box>
        </MuiPickersUtilsProvider>
    </div>
  );
}