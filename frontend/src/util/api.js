import axios from 'axios';

import axiosInstance from './axiosInstance';
const API_BASE_URL = 'http://localhost:3000/api';
export const signup = async (name, email, password, confirmPassword) => {
    try {
        const response = await axiosInstance.post('/users/signup', {
            name,
            email,
            password,
            confirmPassword,
        });

        const token = response.data.token;
        const user = response.data.user;
        return { success: true, token, user };
    } catch (error) {
        console.error('Signup failed:', error.message);
        return {
            success: false,
            error: error.response ? error.response.data.message : 'Signup failed',
        };
    }
};

export const fetchUserData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/`);
        const userData = response.data.data;
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
};


// get user data history

export const getHistory = async (_id) => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/users/${_id}`);
        const userData = response.data.data.user;
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
};

// post predictions to the users database

export const postData = async (id, class_name, confidence) => {
    try {
        const response = await axiosInstance.patch(`${API_BASE_URL}/users/${id}`, {
            class_name,
            confidence,

        });
        console.log('Past results updated:', response.data);
    } catch (error) {
        console.error('Error posting data:', error.message);
    }
}
