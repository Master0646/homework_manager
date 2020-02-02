<template>
    <div class="file-container">
        <p>点击下载</p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.file-container
    width: 64px
    height: 64px
    background-color: black
    cursor: pointer
    transition: all .4s linear
    padding: 20px 0px
    &:hover
        background-color: red
    p
        color: white
</style>