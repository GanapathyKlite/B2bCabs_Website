import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function SingleInputDateRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer style={{ border: 'none' , background: 'transparent', padding: 0 }} components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
          style={{ border: 'none' , background: 'transparent', padding: 0 }}
          // Add any additional styles or props here
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
