const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// Helper function to construct API URLs
export const API_URL = (endpoint) => {
    // Remove any leading slashes from the endpoint
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    return `${BASE_URL}/${cleanEndpoint}`;
}; 