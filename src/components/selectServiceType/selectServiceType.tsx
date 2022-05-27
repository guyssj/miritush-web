import React, { useContext, useEffect, useState } from 'react';
import CheckBoxList, { ListValue } from '../checkBoxList/checkBokList'
import { ServiceService } from "../../services/service";
import { ServiceType } from '../../types/serviceTypes';
import { LabelContext } from '../labelContext/labelContext';

interface PropServiceType {
    serviceId: number
}

const SelectServiceType = (props: PropServiceType) => {
    const value = useContext(LabelContext);
    const [allserviceTypes, setAllServiceTypes] = useState<ServiceType[]>([]);

    const [checkBoxList, setCheckBoxList] = useState<ListValue[]>([]);
    const [checkedServiceTypeIds, setServiceTypeIds] = useState<number[]>([]);

    useEffect(() => {
        //const serviceApi = ServiceService();
        setServiceTypeIds(value.BookData.ServiceTypeID);
        if (props.serviceId) {
            const newListST = allserviceTypes.filter(st => st.serviceId === Number(props.serviceId))
            setCheckBoxList(newListST.map(x => {
                return {
                    objectKey: x.id.toString(),
                    key: x.id,
                    description: x.description,
                    text: x.name
                }
            }));
        }
    }, [props.serviceId, value, allserviceTypes])

    useEffect(() => {
        const serviceApi = ServiceService();
        serviceApi.listServiceTypes().then(res => {
            setAllServiceTypes(res.data);
        });
    }, []);

    const handleChecked = (handleServiceTypes: number[]) => {
        setServiceTypeIds(handleServiceTypes)
        value.SetBookPropValue("ServiceTypeID", handleServiceTypes)
        const filteredST = allserviceTypes.filter(res => handleServiceTypes.indexOf(res.id) > -1);
        const durations = filteredST.map(res => { return res.duration });
        const sumDuration = durations.reduce((a, b) => a + b, 0);
        value.SetBookPropValue("Durtion", sumDuration);
    }
    return (
        <div>
            <CheckBoxList
                list={checkBoxList}
                checked={checkedServiceTypeIds}
                handleChecked={handleChecked}></CheckBoxList>
        </div>
    );
}

export default SelectServiceType;