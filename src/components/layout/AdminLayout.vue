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
                            :name="element.name"
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
export default {
    computed: {
        active() {
            return this.$route.name;
        }
    },
    data() {
        return {
            menus: [
                {
                    name: "消息通知",
                    path: "/notice"
                },
                {
                    name: "我的班级",
                    path: "/myClass"
                },
                {
                    name: "关于系统",
                    path: "/about"
                }
            ]
        };
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

