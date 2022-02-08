export const STORE_NAME = "Tiệm Mọt";
export const AXIOS_BASE_URL = "http://localhost:8000";

export const CATEGORIES = ["Thieu nhi", "Van hoc", "Gia tuong", "Thong tin chung"]; 
export const SUB_CATEGORIES = ["Truyen ngan", "Tieu thuyet", "Truyen tranh"];
export const COVER_TYPES = ["Bia mem", "Bia cung"]; 
export const COLUMNS = [
  "Category",
  "Sub-category",
  "Nhà xuất bản",
  "Nhà phát hành",
  "SKU",
  "Ngày tạo",
  "Ngày cập nhật gần nhất",
  "Đã đồng bộ trên Shopify",
  "Chưa đồng bộ trên Shopify",
  "Giá tại các store khác #1",
  "Giá tại các store khác #2",
  "Giá tại các store khác #3",
  "Giá tại các store khác #4",
  "Giá tại các store khác #5",
];
export const FILTER_CRITERIA = [
  "Đã confirm cân nặng",
  "Chưa confirm cân nặng",
  "Đã đồng bộ trên Shopify",
  "Chưa đồng bộ trên Shopify",
];

export const APP_PAGES = [
  "Trang chủ",
  "Category-Subcategory",
  "Thiết lập công thức giá bán",
  "Nhà xuất bản - Nhà phát hành",
  "Tác giả",
];

export const REGEX_XP = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;