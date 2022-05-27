import AccountCircle from '@mui/icons-material/AccountCircle';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { ServiceService } from '../../services/service';
import { ServiceType } from '../../types/serviceTypes';
import { getDateString, minToTime } from '../../utils/date';
import { LabelContext } from '../labelContext/labelContext';
import { DisaledTextField, TitleConfirm } from './Confirm.styles';

const Confirm = (props: any) => {
  const value = useContext(LabelContext);
  const [serviceType, setServiceType] = useState<ServiceType>();

  useEffect(() => {
    const serviceService = ServiceService();
    serviceService.getServiceTypeById(value.BookData.ServiceTypeID[0]).then(res => {
      setServiceType(res.data);
    });
  }, [value])
  return (
    <Box sx={{ gap: '5px' }}>
      <Typography
        flex="1"
        fontWeight="bold"
        variant="subtitle1"
        color="primary"
        component="div">
        טיפול:
      </Typography>
      <Typography
        flex="1"
        variant="subtitle1"
        component="div">
        {serviceType?.name}
      </Typography>
      <Box display="flex" marginTop={1}>
        <TitleConfirm
          variant="subtitle1">
          תאריך:
        </TitleConfirm>
        <TitleConfirm
          variant="subtitle1">
          שעה:
        </TitleConfirm>
        <TitleConfirm
          variant="subtitle1">
          תיאור:
        </TitleConfirm>
      </Box>
      <Box display="flex" >
        <Typography
          flex="1"
          variant="subtitle1">
          {getDateString(value.BookData.StartDate)}
        </Typography>
        <Typography
          flex="1"
          variant="subtitle1">
          {minToTime(value.BookData.StartAt)}
        </Typography>
        <Typography
          flex="1"
          variant="subtitle1">
          {serviceType?.description}
        </Typography>
      </Box>
      <Box sx={{ marginTop: '40px' }}>
        <DisaledTextField
          fullWidth
          id="FrirstName-Field"
          disabled
          label="שם פרטי"
          value={value.CustomerData.name?.split(" ")[0]}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <DisaledTextField
          id="LastName-Field"
          fullWidth
          disabled
          value={value.CustomerData.name?.split(" ")[1]}
          label="שם משפחה"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <DisaledTextField
          id="phoneNumber-Field"
          fullWidth
          label="טלפון"
          disabled
          value={value.CustomerData.phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactPhoneIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>
    </Box>
  );
}
export default Confirm;
