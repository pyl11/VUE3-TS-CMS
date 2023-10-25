export const rules={
    number:[
        {
            require:true,
            message:"手机号是必须的",
            trigger:"blur",
        },
        {
            pattern:/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/,
            message:"请输入正确的手机号码",
            trigger:"blur"
        }
    ],
    verifyCode:[
        {
            require:true,
            message:"验证码是必须的",
            trigger:"blur",
        },
        {
            pattern:/^[0-9]{6}$/,
            message:"请输入正确的验证码",
            trigger:"blur"
        }
    ]
}