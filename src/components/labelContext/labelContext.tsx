import React, { useState } from "react";
import { Book } from "../../types/book";
import { Customer } from "../../types/customer";
import ChooseDate from "../chooseDate/chooseDate";
import Confirm from "../Confirm";
import CustomerDetails from "../customerDetails/customerdetails";
import SelectService from "../selectService/selectservice";

interface InitContextProps {
    Page: number,
    Steps: any[],
    NextPage: any,
    PrevPage: any,
    CustomerData: Customer,
    BookData: Book,
    SetCustomerPropValue: any,
    SetBookPropValue: any,
    SetCustomerInfo: any,
    SetBookDataInfo: any,
    HandleSkip: any
}

export const LabelContext = React.createContext<InitContextProps>({} as InitContextProps);

export const LabelProvider = (props: any) => {

    const [page, setPage] = useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const nextPage = () => {
        setPage(page + 1);
    };

    const handleSkip = () => {
        setPage((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(page);
            return newSkipped;
        });
    };
    const [book, setBookData] = useState<Book>({
        CustomerID: 0,
        Durtion: 0,
        ServiceID: 0,
        ServiceTypeID: [],
        StartAt: 0,
        StartDate: ""
    })
    const [customer, setCustomerData] = useState<Customer>({
        name: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
    })

    const prevPage = () => {
        setPage(page - 1);
    };

    const setCustomerHandler = (prop: any) => (event: { target: { value: any; }; }) => {
        setCustomerData({ ...customer, [prop]: event.target.value });
    };
    const setCustomerPropValue = (prop: any, value: any) => {
        setCustomerData(prevCustomer => ({ ...prevCustomer, [prop]: value }));
    };
    const setBookHandler = (prop: any) => (event: { target: { value: any; }; }) => {
        setBookData(prevBook => ({ ...prevBook, [prop]: event.target.value }));
    };
    const setBookPropValue = (prop: any, value: any) => {
        setBookData(prevBook => ({ ...prevBook, [prop]: value }));
    };
    const steps = [
        { title: "Get Your details", component: <CustomerDetails /> },
        { title: "Choose your appointment details", component: <SelectService /> },
        { title: "Choose your date", component: <ChooseDate /> },
        { title: "Confirm your details", component: <Confirm /> }
    ];

    const value: InitContextProps = {
        Page: page,
        NextPage: nextPage,
        Steps: steps,
        CustomerData: customer,
        PrevPage: prevPage,
        BookData: book,
        HandleSkip: handleSkip,
        SetBookDataInfo: setBookHandler,
        SetCustomerInfo: setCustomerHandler,
        SetBookPropValue: setBookPropValue,
        SetCustomerPropValue: setCustomerPropValue
    }

    return (
        <LabelContext.Provider
            value={value}>
            {props.children}
        </LabelContext.Provider>
    );
};
