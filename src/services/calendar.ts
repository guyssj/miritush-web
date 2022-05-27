import httpClient from '../helpers/httpClient';
import { ListResults } from '../types/list-results';
import { Slot } from '../types/slot';

export function CalendarService() {

    return {
        freedays
    }
}

function freedays(startDate: Date, duration: number, pageNumber: number) {
    return httpClient.get<ListResults<Slot[]>>(`/calendar/freedays?startDate=${startDate.toISOString()}&duration=${duration}&pageNumber=${pageNumber}`);
}