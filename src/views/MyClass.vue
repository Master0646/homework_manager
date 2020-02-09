<template>
    <!-- 只有教师需要查看自己管理的班级 -->
    <div class="course-list">
        <Row>
            <template v-for="c in classes">
                <Col span="6" :key="c.id">
                    <Card
                        :key="c.id"
                        class="router-card"
                        :to="`/myCourse/${c.id}`"
                        :bordered="false"
                    >
                        <p>班级：{{ c.name }}</p>
                    </Card>
                </Col>
            </template>
        </Row>
    </div>
</template>

<script>
import classService from "@/services/modules/ClassService";
export default {
    async mounted() {
        let myClass = await classService.getClass(1);
        this.classes = myClass.data;
    },
    data() {
        return {
            classes: []
        };
    }
};
</script>

<style lang="sass" scpoed>
.router-card
    color: black
</style>