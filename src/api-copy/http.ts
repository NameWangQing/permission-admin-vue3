import Axios from "axios";
import router from "@/router";

const axios = Axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? '' : '',
});

const map = {
  get: "view",
  put: "edit",
  post: "add",
  delete: "delete",
};

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // console.log(router);
    
    // const rights = router.currentRoute.meta.rights || []
    // console.log(rights)
    // if (config.url !== '/login' && !rights.includes(map[config.method])) {
    //   return Promise.reject(new Error('没有权限操作！'))
    // }

    return config;
  },
  (error: any) => {}
);

// export default (url:string, method:string = "get", data = {}) => {
//   return axios({
//     url,
//     method,
//     data,
//   });
// };

// export default axios


// export default instance;
export function get(url:any, params:any) {
  return axios
    .get(url, { params })
    .then((res) => {
      const serverData = res.data;
      // if (serverData.code === ERR_OK) {
      //   return serverData.result;
      // }
      return serverData
    })
    .catch((error) => {
      console.log(error);
    });
}

// export default instance;
export function post(url:any, params:any) {
  return axios
    .post(url,  { params } )
    .then((res) => {
      console.log(res);
      
      const serverData = res.data;
      // if (serverData.code === ERR_OK) {
      //   return serverData.result;
      // }
      return serverData
    })
    .catch((error) => {
      console.log(error);
    });
}