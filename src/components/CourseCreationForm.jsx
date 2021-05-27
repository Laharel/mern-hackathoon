import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '0px 20px',
            width: '25ch',
        },
    },
    header: {
        color: 'black',
        margin: '100px 0 40px 0'
    },

}));

export default function CourseCreateForm() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.header}>Course Form</h1>
            <form className={classes.courseForm} noValidate autoComplete="off">
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Course Name"
                        defaultValue=""
                        variant="outlined"
                    />
                    {/* <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="outlined"
                    /> */}
                    {/* <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    /> */}
                    {/* <TextField id="outlined-search" label="Search field" type="search" variant="outlined" /> */}
                    {/* <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="outlined"
                    /> */}
                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Description" />

                </div>
            </form>
        </div>
        
    );
}
