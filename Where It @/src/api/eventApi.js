import axios from "axios";

const API_URL = "https://santosnr6.github.io/Data/events.json";

export async function EventApi() {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
}

export default EventApi;
