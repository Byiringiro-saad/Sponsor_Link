import { createSlice } from "@reduxjs/toolkit";

const savedListingsSlice = createSlice({
  name: "Saved Listings",
  initialState: [
    {
      name: "Mary Freund",
      title: "UI UX Designer",
      time: "Full time | Designing",
      location: "B Avenue, J Market, Islamabad, Pakistan",
      expiry: "25/02/2022",
      about:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur tortor est. Donec lectus ex, rhoncus ac consequat at, viverra sit amet sem.",
      tags: ["UI/UX", "Graphics designer"],
    },
    {
      name: "Mary Freund",
      title: "UI UX Designer",
      time: "Full time | Designing",
      location: "B Avenue, J Market, Islamabad, Pakistan",
      expiry: "25/02/2022",
      about:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur tortor est. Donec lectus ex, rhoncus ac consequat at, viverra sit amet sem.",
      tags: ["UI/UX", "Graphics designer"],
    },
    {
      name: "Mary Freund",
      title: "UI UX Designer",
      time: "Full time | Designing",
      location: "B Avenue, J Market, Islamabad, Pakistan",
      expiry: "25/02/2022",
      about:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur tortor est. Donec lectus ex, rhoncus ac consequat at, viverra sit amet sem.",
      tags: ["UI/UX", "Graphics designer"],
    },
    {
      name: "Mary Freund",
      title: "UI UX Designer",
      time: "Full time | Designing",
      location: "B Avenue, J Market, Islamabad, Pakistan",
      expiry: "25/02/2022",
      about:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur tortor est. Donec lectus ex, rhoncus ac consequat at, viverra sit amet sem.",
      tags: ["UI/UX", "Graphics designer"],
    },
  ],
  reducers: {},
});

export default savedListingsSlice.reducer;
