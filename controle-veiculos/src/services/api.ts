import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:8000',
});
// export const api = axios.create({
// 	baseURL: 'http://10.12.172.213:8000',
// });
