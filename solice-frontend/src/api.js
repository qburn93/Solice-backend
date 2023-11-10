import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export function getOrders() {
    return axios.get(`${API_URL}orders/`);
}

export function getSolarPanels() {
    return axios.get(`${API_URL}solar_panels/`);
}