<template>
    <div>
        <el-menu
        style="width: 200px; min-height: calc(100vh-50px)"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item  index="household">
            <el-icon><HomeFilled /></el-icon>
            <span>HouseHold</span>
        </el-menu-item>
        <el-menu-item index="groups">
          <el-icon><Menu /></el-icon>
          <span>Gourps</span>
        </el-menu-item>
        <el-menu-item index="/friends">
          <el-icon><UserFilled /></el-icon>
          <span>Friends</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
import {HomeFilled,UserFilled,Menu} from"@element-plus/icons-vue";
export default{
    name:"Aside",
    components: {
        HomeFilled,
        UserFilled,
        Menu
    },
}
</script>

<style scoped>

</style>
