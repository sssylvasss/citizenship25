// Environment detection
const isDevelopment = process.env.NODE_ENV === 'development';

// API URL configuration
const BASE_URL = isDevelopment 
    ? 'http://localhost:8080'
    : (process.env.REACT_APP_API_URL || 'https://citisenship25.onrender.com');

console.log('Frontend configured with:', {
    environment: isDevelopment ? 'development' : 'production',
    apiUrl: BASE_URL
});

// Helper function to construct API URLs
export const API_URL = (endpoint) => {
    // Remove any leading slashes from the endpoint
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    return `${BASE_URL}/${cleanEndpoint}`;
}; 