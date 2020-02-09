const rules = {
    username: [{
        validator: (rule, value, callback) => {
            if (value === "") {
                callback(
                    new Error("请输入用户名")
                );
            } else {
                callback();
            }
        },
        trigger: "blur"
    }],
    password: [{
        validator: (rule, value, callback) => {
            if (value === "") {
                callback(
                    new Error("请输入密码")
                );
            } else {
                callback();
            }
        },
        trigger: "blur"
    }]
}