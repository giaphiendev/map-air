// import request from "./makeRequest";
import request from './makeRequest'

const api = {
  xemAnhVeTinh: (params) =>
    request.get(`http://103.130.212.145:42521/api/gee/xemAnhVeTinh?${params}`),
  xemAnhVeTinh2BanDo: (params) =>
    request.get(
      `http://103.130.212.145:42521/api/gee/xemAnhVeTinh2BanDo?${params}`
    ),
  phanLoaiLopPhu: (params) =>
    request.get(
      `http://103.130.212.145:42521/api/gee/phanLoaiLopPhu?${params}`
    ),
  themDiemQuanTrac: (data) =>
    request.post(
      `http://103.130.212.145:42521/api/bando/themDiemQuanTrac`,
      data
    ),
  getDanhSachLichSuChatLuongKhongKhi: () =>
    request.get(
      `http://103.130.212.145:42521/api/bando/getDanhSachLichSuChatLuongKhongKhi/getDanhSachLichSuChatLuongKhongKhi`
    ),
  getDanhSachBanDoChuyenDe: (params) =>
    request.get(`http://103.130.212.145:42521/api/bandochuyende?${params}`),
  getAllUser: (params) =>
    request.get(`http://103.130.212.145:42521/api/user?${params}`),
  createUser: (data) =>
    request.post(`http://103.130.212.145:42521/api/user`, data),
  upanhbandochuyende: (data) =>
    request.postFormData(
      `http://103.130.212.145:42521/api/bandochuyende/upanhbandochuyende`,
      data
    ),
  createbandochuyende: (data) =>
    request.post(`http://103.130.212.145:42521/api/bandochuyende`, data),

  getAllNhatKy: (params) =>
    request.get(`http://103.130.212.145:42521/api/nhatky?${params}`),
  deleteNhatKy: (id) =>
    request.post(`http://103.130.212.145:42521/api/nhatky/delete/${id}`, {}),
  capNhatNhatKy: (id, data) =>
    request.post(`http://103.130.212.145:42521/api/nhatky/${id}`, data),
  themNhatKy: (data) =>
    request.post(`http://103.130.212.145:42521/api/nhatky`, data),
  dangxuat: () => request.get(`http://103.130.212.145:42521/api/auth/logout`),

  getTinTuc: (params) =>
    request.get(`http://103.130.212.145:42521/api/tintuc?${params}`),
  taoTinTuc: (data) =>
    request.post(`http://103.130.212.145:42521/api/tintuc`, data),
  capnhatTinTuc: (data) =>
    request.post(`http://103.130.212.145:42521/api/tintuc/${data?.id}`, data),
  xoaTinTuc: (id) =>
    request.post(`http://103.130.212.145:42521/api/tintuc/delete/${id}`),

  getBaoCao: (params) =>
    request.get(`http://103.130.212.145:42521/api/baocao?${params}`),
  createBaoCao: (data) =>
    request.postFormData(`http://103.130.212.145:42521/api/baocao`, data),
  xoaBaoCao: (id) =>
    request.post(`http://103.130.212.145:42521/api/baocao/delete/${id}`),
  delelteUser: (id) =>
    request.post(`http://103.130.212.145:42521/api/user/delete/${id}`),

  getPhanHoi: (params) =>
    request.get(`http://103.130.212.145:42521/api/phananh?${params}`),
  xoaPhanHoi: (id) =>
    request.post(`http://103.130.212.145:42521/api/phananh/delete/${id}`),
  getDiemKhoanTrac: (params) =>
    request.get(
      `http://103.130.212.145:42521/api/bando/diemquantrac/diemQuanTrac?${params}`
    ),
  themDiemKhoanTrac: (data) =>
    request.post(
      `http://103.130.212.145:42521/api/bando/diemquantrac/themDiemQuanTrac`,
      data
    ),
  suaDiemKhoanTrac: (id, data) =>
    request.post(
      `http://103.130.212.145:42521/api/bando/diemquantrac/updateDiemQuanTrac/${id}`,
      data
    ),
  xoaDiemKhoanTrac: (id) =>
    request.post(
      `http://103.130.212.145:42521/api/bando/diemquantrac/deleteDiemQuanTrac/${id}`
    ),
}
export default api
