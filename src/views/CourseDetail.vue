<template>
    <div>
        <Card :style="{marginBottom: '16px'}">
            <div slot="title">
                <Icon type="ios-bookmark" />
                {{ course.name }}
            </div>
            <div>课程讲师: {{ course.lecturer }}</div>
            <div>课程简介: {{ course.description }}</div>
        </Card>
        <div class="homework-list">
            <Card>
                <div slot="title">作业列表</div>
                <List>
                    <ListItem v-for="(h, index) in homeworks" :key="index">
                        <ListItemMeta :title="h.title" :description="h.description" />
                        <template slot="action">
                            <li>
                                <router-link :to="`/homework/${h.id}`">查看详细</router-link>
                            </li>
                        </template>
                    </ListItem>
                    <Page slot="footer" :total="40" size="small" show-elevator show-sizer />
                </List>
            </Card>
        </div>
    </div>
</template>

<script>
import { get } from "@/services/utils/axios";
export default {
    mounted() {
        const id = this.$route.params.id;
        get(`/api/courses/${id}`).then(response => {
            this.course = response.data.course;
            this.homeworks = response.data.homeworks;
        });
    },
    data() {
        return {
            course: {},
            students: [],
            homeworks: []
        };
    }
};
</script>

<style lang="sass" scoped>
.course-info
    margin-bottom: 16px
</style>