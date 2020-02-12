<template>
    <div>
        <div class="action-bar">
            <Button type="primary" @click="createCourse">创建课程</Button>
        </div>
        <div class="course-list">
            <List item-layout="vertical">
                <template v-for="c in classData">
                    <ListItem :key="c.id">
                        <Card :to="`/course/${classId}/${c.id}`" :bordered="false">
                            <p slot="title">{{ c.name }}</p>
                            <p>课程描述: {{ c.description }}</p>
                        </Card>
                    </ListItem>
                </template>
                <Page slot="footer" :total="40" size="small" show-elevator show-sizer />
            </List>
        </div>
    </div>
</template>

<script>
import CouresForm from "@/components/base/CourseForm";
import courseService from "@/services/modules/CourseService";
export default {
    components: {
        CouresForm
    },
    async mounted() {
        this.classId = this.$route.params.id;
        let response = await courseService.getCourses(this.classId);
        this.classData = response.data.data;
    },
    data() {
        return {
            classId: null,
            formData: {},
            classData: []
        };
    },
    methods: {
        createCourse() {
            this.$Modal.confirm({
                render: h => {
                    return h(CouresForm, {
                        props: {
                            formData: this.formData
                        },
                        on: {
                            input: val => {
                                this.value = val;
                            }
                        }
                    });
                }
            });
        }
    }
};
</script>

<style lang="sass" scoped>
</style>

