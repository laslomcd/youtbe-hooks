import axios from "axios";

const KEY = "AIzaSyCa36-GR2k0lzLpCi9yYX_F4Fy-7BXoM2g";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
