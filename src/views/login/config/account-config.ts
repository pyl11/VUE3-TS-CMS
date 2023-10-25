export const rules = {
    name: [
      {
        require: true,
        message: "用户名是必须的",
        trigger: "blur",
      },
      {
        pattern: /^[a-z0-9]{5,10}$/,
        message: "用户名是5-10个字母或者数字",
        trigger: "blur",
      },
    ],
    password: [
      {
        require: true,
        message: "密码是必须的",
        trigger: "blur",
      },
      {
        pattern: /^[a-z0-9]{5,10}$/,
        message: "密码是5-10个字母或者数字",
        trigger: "blur",
      },
    ],
  };
