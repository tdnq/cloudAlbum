const host = "http://localhost:3000";
const userLoginApi = host + '/api/user/local/login';
const adminUserLoginApi = host + '/api/admin/login';
const adminReviewPhotoApi = host +"/api/admin/reviewPhoto"
const userLogupApi = host + '/api/user/local/logup';
const albumApi = host + '/api/album';
const photoApi = host + '/api/photo';

export default {
    host,
    albumApi,
    photoApi,
    userLoginApi,
    userLogupApi,
    adminUserLoginApi,
    adminReviewPhotoApi
}
