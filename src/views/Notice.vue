<template>
    <div>
        <template v-for="i in 1">
            <Card :bordered="false" :key="i">
                <p slot="title">J2EE企业级应用框架</p>
                <p>授课老师：黄锵</p>
                <p>@[引用的作业名称链接]，该作业即将截止上交，请未完成的同学抓紧时间完成作业并提交。</p>
            </Card>
        </template>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>

