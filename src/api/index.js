// import request from "./makeRequest";
import request from './makeRequest'

const api = {
  xemAnhVeTinh: (params) =>
    request.get(`http://103.130.212.145:42521/api/gee/xemAnhVeTinh?${params}`),
  xemAnhVeTinh2BanDo: (params) =>
    request.get(`http://103.130.212.145:42521/api/gee/xemAnhVeTinh2BanDo?${params}`),
  phanLoaiLopPhu: (params) =>
    request.get(`http://103.130.212.145:42521/api/gee/phanLoaiLopPhu?${params}`),
  themDiemQuanTrac: (data) =>
    request.post(`http://103.130.212.145:42521/api/bando/themDiemQuanTrac`, data),
  getDanhSachLichSuChatLuongKhongKhi: () =>
    request.get(
      `http://103.130.212.145:42521/api/bando/getDanhSachLichSuChatLuongKhongKhi/getDanhSachLichSuChatLuongKhongKhi`
    ),
  getDanhSachBanDoChuyenDe: (params) =>
    request.get(`http://103.130.212.145:42521/api/bandochuyende?${params}`),
  getAllUser: (params) => request.get(`http://103.130.212.145:42521/api/user?${params}`),
  createUser: (data) => request.post(`http://103.130.212.145:42521/api/user`, data),
  upanhbandochuyende: (data) =>
    request.postFormData(`http://103.130.212.145:42521/api/bandochuyende/upanhbandochuyende`, data),
  createbandochuyende: (data) =>
    request.post(`http://103.130.212.145:42521/api/bandochuyende`, data),
}
export default api
