import { createSlice } from "@reduxjs/toolkit";

const RemindersSlice = createSlice({
  name: "Reminders",
  initialState: [
    {
      title: "Saved listing",
      content: "You have saved a listing to Saved for later",
    },
    {
      title: "Listing expire",
      content:
        "You have 3 days time until your Saved for later listing expires!",
    },
    {
      title: "Saved listing",
      content:
        "You have reported a listing due to ...... and the report is in .... stage 1/2/3 of review",
    },
    {
      title: "Listing expire",
      content:
        "You have 3 days time until your Saved for later listing expires!",
    },
    {
      title: "Saved listing",
      content: "You have saved a listing to Saved for later",
    },
    {
      title: "Listing expire",
      content:
        "You have 3 days time until your Saved for later listing expires!",
    },
  ],
  reducers: {},
});

export default RemindersSlice.reducer;
