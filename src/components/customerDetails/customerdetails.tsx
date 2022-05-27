import React, { useContext, useEffect, useState } from "react";
import { LabelContext } from "../labelContext/labelContext"
import { Customer } from "../../types/customer"

import { AuthService } from "../../services/auth";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { UserService } from "../../services/user";
import { BlockCode, isNumeric } from "block-code";
import './block-code.css';
import OtpCode from "./otpCode/otpCode";


const CustomerDetails = (props: any) => {
    const value = useContext(LabelContext);
    const customerDetail: Customer = value.CustomerData;
    const authApi = AuthService();
    const [showOtp, setShowOtp] = useState<boolean>(false);
    const [otpCode, setOtpCode] = useState<number>(0);
    const userIsSignIn = localStorage.getItem("userToken");

    const otpChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOtpCode(Number(event.target.value));
    };
    const otpChange2 = (otp: any) => {
        setOtpCode(Number(otp.value));
    };
    const onValidateBeforeChange = async (data: { value: string }) => {
        /**
         * If `isNumeric` returns true, then the value will be added into the state
         *
         * You can use any condition here, `onValidateBeforeChange` asks for `Promise<boolean>`
         */
        return isNumeric(data.value)
    }

    useEffect(() => {
        if (userIsSignIn) {
            const userService = UserService();
            userService.details().then(res => {
                if (res) {
                    value.SetCustomerPropValue("name", res.data.name);
                    value.SetCustomerPropValue("phoneNumber", res.data.phoneNumber);
                    value.HandleSkip();
                }
            });
        }
        // eslint-disable-next-line
    }, [userIsSignIn])

    const loginWithPhoneNumber = () => {
        authApi.login(customerDetail.phoneNumber, otpCode).then(res => {
            localStorage.setItem("userToken", res.data.access_token);
            value.NextPage();
        });
    }
    const sendOtpMessage = () => {
        authApi.otpRequest(customerDetail.phoneNumber).then(res => {
            if (res.status === 204)
                setShowOtp(true);
        });
    }
    // const otpField = () => {
    //     return (
    //         <div>
    //             <TextField
    //                 label="enter code"
    //                 style={{ margin: 8, width: "93%" }}
    //                 fullWidth
    //                 margin="normal"
    //                 required
    //                 onChange={otpChange}
    //                 value={otpCode}
    //             />
    //         </div>

    //     )
    // }

    const otpField = () => {
        return (
            <OtpCode onValidateBeforeChange={onValidateBeforeChange} className="block-code-default" onComplete={otpChange2}></OtpCode>
        )
    }
    const customerDetailsField = () => {
        return (
            <div>
                <TextField
                    label="Enter Full Name"
                    style={{ margin: 8, width: "93%" }}
                    fullWidth
                    margin="normal"
                    required
                    onChange={value.SetCustomerInfo("firstName")}
                    value={customerDetail.firstName}
                />
                <TextField
                    label="Enter Street Address"
                    style={{ margin: 8, width: "93%" }}
                    fullWidth
                    margin="normal"
                    required
                    onChange={value.SetCustomerInfo("lastName")}
                    value={customerDetail.lastName}
                />
                <TextField
                    label="Enter phone"
                    style={{ margin: 8, width: "93%" }}
                    fullWidth
                    margin="normal"
                    required
                    onChange={value.SetCustomerInfo("phoneNumber")}
                    value={customerDetail.phoneNumber}
                />
            </div>
        );
    };
    const btnDisbaled =
        customerDetail.phoneNumber.length > 0
    return (
        <form>
            <h4> Enter Sender Details</h4>
            {showOtp ? otpField() : customerDetailsField()}
            <ButtonGroup
                color="primary"
                aria-label="text primary button group"
                style={{ marginTop: 15 }}>
                {showOtp ?
                    <Button
                        disabled={!btnDisbaled}
                        onClick={() => loginWithPhoneNumber()}
                        style={{ margin: 25 }}>
                        Next
                    </Button>
                    : <Button
                        disabled={!btnDisbaled}
                        onClick={() => sendOtpMessage()}
                        style={{ margin: 25 }}>
                        Send
                    </Button>}
            </ButtonGroup>
        </form>

    );
};
export default CustomerDetails;
