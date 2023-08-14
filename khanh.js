function trichXuatThongTinThoiGian(chuoiNgayThang) {
  const dt = new Date(chuoiNgayThang);
  const ngay = dt.getDate();
  const thang = dt.getMonth() + 1; // Tháng được đánh số từ 0 - 11
  const nam = dt.getFullYear();
  const gio = dt.getHours();
  const phut = dt.getMinutes();
  const giay = dt.getSeconds();

  return { ngay, thang, nam, gio, phut, giay };
}

const chuoiNgayThang = "2022-08-24T07:00:00.000Z";
const thongTinThoiGian = trichXuatThongTinThoiGian(chuoiNgayThang);

console.log(`Ngày: ${thongTinThoiGian.ngay}`);
console.log(`Tháng: ${thongTinThoiGian.thang}`);
console.log(`Năm: ${thongTinThoiGian.nam}`);
console.log(
  `Thời gian: ${thongTinThoiGian.gio}:${thongTinThoiGian.phut}:${thongTinThoiGian.giay}`
);
