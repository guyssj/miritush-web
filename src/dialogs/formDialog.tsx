import { useContext } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { LabelContext } from '../components/labelContext/labelContext';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent, DialogTitle, useMediaQuery, useTheme
} from '@mui/material';

export default function FormDialog(props: { isOpen: boolean, handleCloseDialog: any }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const value = useContext(LabelContext);


    return (
        <Dialog
            dir="rtl"
            fullScreen={fullScreen}
            open={props.isOpen}
            PaperProps={{
                style: {
                    backgroundColor: "#F1F1FF"
                }
            }}
            onClose={props.handleCloseDialog}
            aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title">
                <Stepper dir="rtl" activeStep={value.Page} alternativeLabel>
                    {value.Steps.map((label: any) => (
                        <Step key={label.title}>
                            <StepLabel>{label.title}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </DialogTitle>
            <DialogContent>
                {value.Steps[value.Page].component}
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={() => value.PrevPage()}
                    style={{ margin: 25 }}>
                    חזור
                </Button>
                <Button
                    onClick={() => value.NextPage()}
                    style={{ margin: 25 }}>
                    המשך
                </Button>
            </DialogActions>

        </Dialog>
    );
}