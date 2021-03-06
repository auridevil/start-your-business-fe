export const NODE_ENV = process.env.NODE_ENV;

export const API_ENDPOINT = window.APP_CONFIG.API_ENDPOINT;
export const AWS_COGNITO = {
    clientId: window.APP_CONFIG.AWS_COGNITO_APP_CLIENT_ID,
    identityPoolId: window.APP_CONFIG.AWS_COGNITO_IDENTITY_POOL_ID,
    userPoolId: window.APP_CONFIG.AWS_COGNITO_USER_POOL_ID
};
export const AWS_REGION = window.APP_CONFIG.AWS_REGION;
