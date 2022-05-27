import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

export const CheckBoxButtonStyled = styled(ListItemButton)(({ theme }) => ({
    margin: '0'
}));

export const CheckBoxItemStyled = styled(ListItemText)(({ theme }) => ({
    backgroundColor: 'transparent',
    borderRadius: theme.spacing(2),
    '& .MuiListItemText-secondary': {
        color: theme.palette.text.primary,
    }
}));