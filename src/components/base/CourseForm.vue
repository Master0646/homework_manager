<template>
    <Form ref="form" :model="formData" :rules="rules" :label-width="80">
        <FormItem label="课程名称">
            <Input v-model="formData.title" placeholder="课程名称"></Input>
        </FormItem>
    </Form>
</template>

<script>
export default {
    data() {
        return {
            rules: {}
        };
    },
    props: ["formData"]
};
</script>

<style>
</style>