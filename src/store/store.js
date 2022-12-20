import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers
import savedListings from "./reducers/savedListings";
import activeListings from "./reducers/activeListings";
import reportedListings from "./reducers/reportedListings";
import searchedListings from "./reducers/searchedListings";

const listingsReducer = combineReducers({
  activeListings: activeListings,
  savedListings: savedListings,
  reportedListings: reportedListings,
  searchedListings: searchedListings,
});

export default configureStore({
  reducer: {
    listings: listingsReducer,
  },
});
