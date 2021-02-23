import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization: "Client-ID hWkrC_qQOa1dpXYzI0pPemVqZO-0EXCft-_3-rOGOeI",
	},
});
