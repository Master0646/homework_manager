<template>
    <div>
        <div class="action-bar">
            <Button type="primary" @click="createCourse">创建课程</Button>
        </div>
        <div class="course-list">
            <List item-layout="vertical">
                <template v-for="c in classData">
                    <ListItem :key="c.id">
                        <Card :to="`/course/${c.id}`" :bordered="false">
                            <p slot="title">{{ c.name }}</p>
                            <p>授课老师：{{ c.lecturer }}</p>
                            <p>班级人数: {{ c.enrollee }}</p>
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
export default {
    components: {
        CouresForm
    },
    data() {
        return {
            formData: {},
            classData: [
                {
                    id: 1,
                    name: "J2EE企业级应用框架",
                    lecturer: "黄锵",
                    enrollee: 50
                }
            ]
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

