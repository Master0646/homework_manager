<template>
    <Layout class="layout">
        <Header>
            <Menu class="header-menu" mode="horizontal" theme="dark">
                <div class="header-logo">作业管理系统</div>
                <div class="header-nav"></div>
            </Menu>
        </Header>
        <Layout>
            <Sider hide-trigger class="sider-menu" :style="{background: '#fff'}">
                <Menu :active-name="active" theme="dark" width="auto">
                    <template v-for="(element, index) in menus">
                        <MenuItem
                            :key="index"
                            :to="element.path"
                            :name="element.parent"
                        >{{ element.name }}</MenuItem>
                    </template>
                </Menu>
            </Sider>
            <Content :style="{padding: '16px'}">
                <router-view />
            </Content>
        </Layout>
    </Layout>
</template>

<script>
import config from "@/config";
import { mapGetters } from "vuex";
export default {
    computed: {
        active() {
            return this.$route.meta.parent;
        }
    },
    data() {
        let auth = this.getAuth() || 0;
        let routes = {};
        /**
         * 导航分组
         * 由于学生和教师都拥有课程导航
         * 但是学生并没有班级导航
         * 所以为导航设立组
         * 每组导航只允许存在一个导航
         */
        config.stageConfig.forEach(element => {
            let key = element.parent;
            // 导航显示条件：
            // 1、权限大于限定权限才允许显示
            // 2、此导航允许显示
            if (auth >= element.auth && element.inNav) {
                // 若该组导航不存在，或者该组导航存在，
                // 用auth权限值较大的覆盖较小的导航
                if (
                    !routes[key] ||
                    (routes[key] && routes[key].auth <= element.auth)
                ) {
                    routes[key] = element;
                }
            }
        });
        console.log(routes);
        return {
            menus: routes
        };
    },
    methods: {
        ...mapGetters(["getAuth"])
    }
};
</script>

<style lang="sass" scoped>
.header-logo
    color: white
    font-size: 1rem
.header-menu
    display: flex
    justify-content: space-between
.ivu-menu-horizontal
    line-height: inherit
.sider-menu
    .ivu-menu
        height: inherit
.layout
    height: inherit
</style>

