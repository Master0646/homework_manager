<template>
    <div>
        <Card :style="{marginBottom: '16px'}">
            <div slot="title">
                <Icon type="ios-bookmark" />
                {{ detail.name }}
            </div>
            <div>课程简介: {{ detail.description }}</div>
        </Card>
        <div class="homework-list">
            <Card>
                <div slot="title">作业列表</div>
                <List>
                    <ListItem v-for="(h, index) in detail.homeworkPage.content" :key="index">
                        <ListItemMeta :title="h.title" :description="h.description" />
                        <template slot="action">
                            <li>
                                <router-link :to="`/homework/${h.id}`">查看详细</router-link>
                            </li>
                        </template>
                    </ListItem>
                    <Page
                        slot="footer"
                        :total="detail.homeworkPage.totalElements"
                        size="small"
                        :page-size="detail.homeworkPage.size"
                        show-elevator
                        show-sizer
                        @on-change="fetchDetail"
                    />
                </List>
            </Card>
        </div>
    </div>
</template>

<script>
import courseService from "@/services/modules/CourseService";
export default {
    async mounted() {
        const params = this.$route.params;
        this.classId = params.classId;
        this.courseId = params.courseId;
        this.fetchDetail(1);
    },
    data() {
        return {
            classId: null,
            courseId: null,
            detail: {
                homeworkPage: {
                    content: [],
                    totalElements: 0,
                    size: 0
                }
            }
        };
    },
    methods: {
        async fetchDetail(page) {
            let response = await courseService.getDetail(
                this.classId,
                this.courseId,
                page
            );
            this.detail = response.data.data;
        }
    }
};
</script>

<style lang="sass" scoped>
.course-info
    margin-bottom: 16px
</style>