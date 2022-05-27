import { useContext, useEffect, useState } from "react";
import { LabelContext } from "../labelContext/labelContext"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { CalendarService } from "../../services/calendar";
import { Slot } from "../../types/slot";
import DateList from "./dateList/dateList";
import Slide from "@mui/material/Slide";


const ChooseDate = () => {
    const value = useContext(LabelContext);
    const [freeDaysItems, setFreeDaysItems] = useState<Slot[]>([]);
    const duration = value.BookData.Durtion;
    const chooseDateHanlde = (dateAndSlot: Slot) => {
        value.SetBookPropValue("StartDate", dateAndSlot.startDate);
        value.SetBookPropValue("StartAt", dateAndSlot.startAt);
        value.NextPage();
    };


    useEffect(() => {
        const d = new Date();
        const calendarService = CalendarService();
        console.log(duration, "du")
        calendarService.freedays(d, duration, 1).then(res => {
            setFreeDaysItems(res.data.data);
        });
    }, [duration])

    return (
        <Slide direction="right" in={value.Page === 2} mountOnEnter unmountOnExit>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <DateList dates={freeDaysItems} chooseDate={chooseDateHanlde} ></DateList>
                </Stack>
            </Box >
        </Slide>
    );
};
export default ChooseDate;