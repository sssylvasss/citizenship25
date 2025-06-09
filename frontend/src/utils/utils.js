const BASE_URL = process.env.REACT_APP_API_URL || 'https://citisenship25.onrender.com';

// Helper function to construct API URLs
export const API_URL = (endpoint) => {
    // Remove any leading slashes from the endpoint
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    return `${BASE_URL}/${cleanEndpoint}`;
}; 