import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, createTheme, FormControl, makeStyles, MenuItem, Theme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { ServiceService } from '../services/service';
import { Service } from '../types/services';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        textField: {
            padding: 3,
            width: '15ch'
        },
        formControl: {
            padding: 3,
            minWidth: 120,
            width: '15ch'
        },
    }),
);
export default function FormDialog(props: { isOpen: boolean, handleCloseDialog: any }) {
    const theme = createTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
    });
    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [services, setServices] = useState<Service[]>([]);
    const [serviceId, setService] = useState<number | string>("");
    const [serviceTypeId, setServiceType] = useState<number | string>("");

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));



    const servicesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setService(Number(event.target.value));

    };

    const saveBook = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
    }

    useEffect(() => {
        const serviceApi = ServiceService();
        serviceApi.list().then(res => {
            setServices(res.data.Result);
        })
    }, [setServices])

    const serviceList = services.map((service) =>
        <MenuItem key={service.ServiceID} value={service.ServiceID}>{service.ServiceName}</MenuItem>
    );
    return (
        <ThemeProvider theme={theme}>
            <form className={classes.root} onSubmit={saveBook} autoComplete="off" >
                <Dialog dir="rtl" fullScreen={fullScreen} open={props.isOpen} onClose={props.handleCloseDialog} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">קביעת טיפול</DialogTitle>
                    <DialogContent>
                        <div>
                            <TextField className={classes.textField} required id="firstName" onChange={e => setFirstName(e.target.value)} label="שם פרטי" value={firstName} />
                            <TextField className={classes.textField} required id="lastName" label="שם משפחה" />
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">טיפול</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={serviceId}
                                    onChange={servicesChange}
                                >
                                    {serviceList}
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">טיפול</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={serviceId}
                                    onChange={servicesChange}
                                >
                                    {serviceList}
                                </Select>
                            </FormControl>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleCloseDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={saveBook} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </ThemeProvider>
    );
}