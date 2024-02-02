import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";

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
      <DemoContainer components={["DateTimePicker"]}>
        <DemoItem className="p-0">
          <DesktopDateTimePicker  style={{border:'none !important'}}
            shouldDisableDate={(date) =>
              !isTodayOrLater(date) || isYesterdayOrEarlier(date)
            }
            renderInput={(props) => (
              <input
                {...props}
                placeholder="Pick up Date & Time"
                style={{ padding: "10px"}}
                className="w-75"
              />
            )}
            format="DD/MM/YYYY HH:mm:A" // Set the desired format here
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

// border: 1px solid var(--blackColor) !important;
// transition: all 0.3s ease !important;