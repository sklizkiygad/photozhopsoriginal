<template>
    <div>
     <router-view></router-view>


    </div>
</template>

<script>
    import Main from "@/pages/Main";

    export default {
        components:{
            Main
        }

    }
</script>

<style >
    html,body{
        margin: 0;
    }
</style>