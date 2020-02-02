<template>
    <Card>
        <div slot="title">此处为课程名称</div>
        <div>
            <p>作业标题: 课业一</p>
            <p>发布时间: {{ new Date() }}</p>
            <p>截止时间: {{ new Date() }}</p>
            <p>此处为教师要求</p>
            <Divider>附件下载</Divider>
            <File />
            <Divider>上传作业</Divider>
            <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或拖拽文件到此上传</p>
                </div>
            </Upload>
        </div>
    </Card>
</template>

<script>
import File from "@/components/base/File";
export default {
    components: {
        File
    }
};
</script>

<style>
</style>