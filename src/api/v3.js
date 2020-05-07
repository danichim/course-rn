import axios from "axios";

const apiKey =
  "Fy63Y6-usqP_yBkUyVVtjBXZohqKOwZgsnfiPhJKvwR1UQraGrsasRiBkmjgvUPo66A0pDXQbV8cr7jHyZN0eI5E0L178V0SqvtW30thuGBa9SEXzcNnjpyJPSqxXnYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
