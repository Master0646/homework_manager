<template>
    <Form v-model="formData" ref="formData">
        <FormItem label="用户名" prop="username">
            <Input type="text" v-model="formData.username"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" v-model="formData.password"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formData')">登录</Button>
        </FormItem>
    </Form>
</template>

<script>
import auth from "@/services/modules/AuthService";
import rules from "./rules";
import { mapActions } from "vuex";
export default {
    props: ["formData"],
    data() {
        return {
            rule: {
                username: rules.username,
                password: rules.password
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(async valid => {
                if (valid) {
                    let response = await auth.login(this.formData);
                    if (response.status == 200) {
                        this.$Message.success("登录成功!");
                        this.setLoginAndUserInfo(response.data.data);
                        setTimeout(() => {
                            this.$router.push("/about");
                        }, 1000);
                    } else {
                        this.$Message.error("用户名或密码错误");
                    }
                } else {
                    this.$Message.error("Fail!");
                }
            });
        },
        ...mapActions(["setLoginAndUserInfo"])
    }
};
</script>

<style>
</style>