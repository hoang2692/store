//file chứa hằng số không thay đổi trong web

const Modules = [
  {
    id: 1,
    title: "Trang chủ",
    moduleName: "home",
    parentId: 1,
    link: "",
  },
  {
    id: 2,
    title: "coffee",
    moduleName: "coffee",
    parentId: 2,
    link: "",
  },
  {
    id: 3,
    title: "Trà",
    moduleName: "tea",
    parentId: 3,
    link: "",
  },
  {
    id: 4,
    title: "Hành trình tách cafe đậm vị",
    moduleName: "coffee",
    parentId: 2,
    link: "/CoffeeJourney",
  },
  {
    id: 5,
    title: "Hành trình tách trà đậm vị",
    moduleName: "tea",
    parentId: 3,
    link: "/TeaJourney",
  },
  {
    id: 6,
    title: "Thực đơn",
    moduleName: "cookTable",
    parentId: 6,
    link: "",
  },
  {
    id: 9,
    title: "Các loại bánh mặn",
    moduleName: "cookTable",
    parentId: 6,
    link: "/SaltineCrackers",
  },
  {
    id: 8,
    title: "Các loại bánh ngọt",
    moduleName: "cookTable",
    parentId: 6,
    link: "/Cakes",
  },
  {
    id: 7,
    title: "Các loại thức uống ",
    moduleName: "cookTable",
    parentId: 6,
    link: "/Drinks",
  },

  {
    id: 11,
    title: "Hạt cafe Phúc Long",
    moduleName: "coffee",
    parentId: 2,
    link: "",
  },
  {
    id: 12,
    title: "Lá trà Phúc Long",
    moduleName: "tea",
    parentId: 3,
    link: "/TeaDescription",
  },
  {
    id: 13,
    title: "Tài khoản",
    moduleName: "user",
    parentId: 13,
    link: "",
  },
  {
    id: 14,
    title: "Đăng kí tài khoản",
    moduleName: "user",
    parentId: 13,
    link: "/Register",
  },
  {
    id: 15,
    title: "Đăng Nhập",
    moduleName: "user",
    parentId: 13,
    link: "/Login",
  },
];

export { Modules };
