import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";


export const TitleConfirm = styled(Typography)(({ theme }) => ({
    flex: 1,
    fontWeight: 'bold',
    color: theme.palette.primary.main
}));

export const DisaledTextField = styled(TextField)(({ theme }) => ({
    flex: 1,
    paddingBottom: theme.spacing(3)
}));