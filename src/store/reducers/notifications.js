import { createSlice } from "@reduxjs/toolkit";

const NotificationsSlice = createSlice({
  name: "Notifications",
  initialState: [
    {
      color: "F77F7F",
      content: "You have been accepted to collaborate with Mia Anders.",
      time: "1 hr ago",
      actions: ["view"],
    },
    {
      color: "5DA9DD",
      content: "Mia Anders applied to your Listing.",
      time: "2 hr ago",
      actions: ["accept", "decline"],
    },
    {
      color: "4CAF50",
      content: "You applied to BAI Listing.",
      time: "4 hr ago",
      actions: ["view"],
    },
    {
      color: "4CAF50",
      content: "You applied to BAI Listing.",
      time: "4 hr ago",
      actions: ["view"],
    },
    {
      color: "4CAF50",
      content: "You applied to BAI Listing.",
      time: "4 hr ago",
      actions: ["view"],
    },
    {
      color: "4CAF50",
      content: "You applied to BAI Listing.",
      time: "4 hr ago",
      actions: ["view"],
    },
    {
      color: "4CAF50",
      content: "You applied to BAI Listing.",
      time: "4 hr ago",
      actions: ["view"],
    },
    {
      color: "4CAF50",
      content: "You applied to BAI Listing.",
      time: "4 hr ago",
      actions: ["view"],
    },
  ],
  reducers: {},
});

export default NotificationsSlice.reducer;
