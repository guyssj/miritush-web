import { useContext, useEffect, useState } from "react";
import { LabelContext } from "../labelContext/labelContext"
import { ServiceService } from "../../services/service";
import { Service } from "../../types/services";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import SelectServiceType from "../selectServiceType";


const SelectService = (props: any) => {
    const value = useContext(LabelContext);
    const [services, setServices] = useState<Service[]>([]);
    const [serviceId, setService] = useState<number | string>('');

    const servicesChange = (event: SelectChangeEvent<typeof serviceId>) => {
        setService(Number(event.target.value));
        value.SetBookPropValue("ServiceID", Number(event.target.value));
    };

    useEffect(() => {
        const serviceApi = ServiceService();
        serviceApi.list().then(res => {
            setServices(res.data);
        })
    }, [])

    const serviceList = services.map((service, i) =>
        <MenuItem dir="rtl" key={i} value={service.id}>{service.serviceName}</MenuItem>
    );
    return (
        <form>
            {JSON.stringify(value.BookData)}
            <FormControl margin="normal" fullWidth variant="outlined">
                <InputLabel id="servicesListLabel">טיפול</InputLabel>
                <Select
                    labelId="servicesListLabel"
                    label="טיפול"
                    id="select-service-id"
                    value={serviceId !== null ? serviceId : ''}
                    onChange={servicesChange}>
                    {serviceList}
                </Select>
            </FormControl>

            <SelectServiceType serviceId={Number(serviceId)}></SelectServiceType>
        </form>
    );
};
export default SelectService;
