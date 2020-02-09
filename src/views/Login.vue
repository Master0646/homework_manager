<template>
    <Card>
        <p slot="title">登录</p>
        <LoginForm :formData="formData" />
    </Card>
</template>

<script>

import LoginForm from "@/components/base/LoginForm";
export default {
    components: {
        LoginForm
    },
    data() {
        return {
            formData: {}
        };
    }
};
</script>

<style>
</style>