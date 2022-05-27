import { ListItemText, Paper, styled, Zoom } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import React, { useState } from "react";
import { nPrimary } from "../../../theme/_palettes";
import { Slot } from "../../../types/slot";
import { getDayName, minToTime } from "../../../utils/date";


const DateItemStyled = styled(ListItemText)(({ theme }) => ({
    backgroundColor: 'transparent',
    borderRadius: theme.spacing(2),
    '& .MuiListItemText-secondary': {
        color: theme.palette.text.primary,
    },
    // '& .MuiListItemText-secondary:hover': {
    //     color: theme.palette.getContrastText(nPrimary[500])
    // }
}));

const DateButtonStyled = styled(ListItemButton)(({ theme }) => ({
    backgroundColor: "white",
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    borderRadius: theme.spacing(1),
    // boxShadow: '1px 5px 8px 0px #C9C9C9',
    '&:hover, &.Mui-selected': {
        backgroundColor: nPrimary[500],
        color: theme.palette.getContrastText(nPrimary[500]),
        '& .MuiListItemText-secondary': {
            color: theme.palette.getContrastText(nPrimary[500]),
        },
    },
    '&.Mui-selected:hover, &.Mui-selected:focus': {
        backgroundColor: nPrimary[300],
        color: theme.palette.getContrastText(nPrimary[300])

    }
}));

const DateList = ({ dates, chooseDate }: any) => {
    const [selectedIndex, setSelectedIndex] = useState<string>("");

    const handleListItemClick = (date: Slot) => {
        setSelectedIndex(date.id);
        chooseDate(date);
    };

    return (
        <List aria-label="">
            {dates.map((slot: Slot, index: number) => {
                const date = new Date(slot.startDate);
                return (
                    <Zoom key={slot.id + index} in={dates.length > 0} timeout={index * 200} style={{ transitionDelay: dates.length > 0 ? '500ms' : '0ms' }}>
                        <Paper style={{ borderRadius: '8px' }} elevation={3}>
                            <DateButtonStyled
                                key={slot.id}
                                selected={selectedIndex === slot.id}
                                onClick={() => handleListItemClick(slot)}>
                                <DateItemStyled primary={`${getDayName(date)} ${date.getDate()}/${date.getMonth() + 1}`} secondary={`${minToTime(slot.startAt)}-${minToTime(slot.endAt)}`} />
                            </DateButtonStyled>
                        </Paper>
                    </Zoom>

                );
            })}
        </List>
    )
}
export default DateList;