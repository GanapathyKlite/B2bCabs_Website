import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function DatePicker() {
  const currentDate = dayjs();

  // Function to check if a date is today or later
  const isTodayOrLater = (date) => {
    return date.isAfter(currentDate, "day") || date.isSame(currentDate, "day");
  };

  // Function to check if a date is yesterday or earlier
  const isYesterdayOrEarlier = (date) => {
    return date.isBefore(currentDate.subtract(1, "day"), "day");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DemoItem className="p-0">
          <DesktopDatePicker 
            style={{ border: 'none !important' }}
            shouldDisableDate={(date) =>
              !isTodayOrLater(date) || isYesterdayOrEarlier(date)
            }
            renderInput={(props) => (
              <input
                {...props}
                placeholder="Start Date"
                style={{ padding: "10px" }}
                className="w-50"
              />
            )}
            format="DD/MM/YYYY" // Set the desired format here for the start date
            showTimeInput={false} // Disable time picker
          />
          <DesktopDatePicker 
            style={{ border: 'none !important' }}
            shouldDisableDate={(date) =>
              !isTodayOrLater(date) || isYesterdayOrEarlier(date)
            }
            renderInput={(props) => (
              <input
                {...props}
                placeholder="End Date"
                style={{ padding: "10px" }}
              />
            )}
            format="DD/MM/YYYY" // Set the desired format here for the end date
            showTimeInput={false} // Disable time picker
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
