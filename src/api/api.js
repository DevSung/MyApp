import axios from "axios";

const apiInstance = axios.create({
    // baseURL: "https://devsung.koreacentral.cloudapp.azure.com:8003/api",
    baseURL: "http://localhost:8003/api",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
})

// Request 인터셉터 추가
apiInstance.interceptors.request.use(
    config => {
        // 로그인과 회원가입 요청에서는 토큰을 추가하지 않도록 설정
        if (config.url !== "/login" && config.url !== "/join") {
            const token = localStorage.getItem("accessToken");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    error => {
        // 요청 에러 처리 부분
        return Promise.reject(error);
    }
);

apiInstance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        // 에러 핸들링
        return Promise.reject(error);
    }

);

// GET 요청 메소드 추가
export const get = (url, config = {}) => {
    return apiInstance.get(url, config);
};

// POST 요청 메소드 추가
export const post = (url, data = {}, config = {}) => {
    return apiInstance.post(url, data, config);
};

// PUT 요청 메소드 추가
export const put = (url, data = {}, config = {}) => {
    return apiInstance.put(url, data, config);
};

// DELETE 요청 메소드 추가
export const remove = (url, config = {}) => {
    return apiInstance.delete(url, config);
};

export default apiInstance

