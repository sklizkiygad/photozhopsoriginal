<template>
    <div>
        <Header :bima="'https://i.yapx.ru/RINqj.jpg'"/>

        <Modal :isOpen="isOpen" :lika="lika" />
        <div  class="photoholder" v-if="massofphotos"  >

            <div v-if="!isLoading" class="holder" v-for="photo in massofphotos">
                <img @click="modalChange" class="artem" :src="photo" alt="item">
            </div>
            <div v-else>
                <h1 style="color:whitesmoke">Фото загружаются...</h1>
            </div>
        </div>

    </div>
</template>

<script>

    import axios from 'axios';
    import Modal from "@/components/Modal";
    import Header from "@/pages/Main/Header";
    import jsonMixin from "@/mixins/jsonMixin";
    export default {
        mixins:[jsonMixin],
        components:{
            Modal,
            Header
        },
        mounted(){
            this.getMD('ps');
        }
    }
</script>

<style >
    body{
        margin:0;
        background-color: black;
    }


    .photoholder{
        display: flex;
        width: 100%;
        flex-wrap: wrap;

    }
    .holder{
        display: flex;
        overflow: hidden;
        width:25%;

    }
    .artem{

        width:100%;
        transition:1.5s;
        cursor: pointer;
        object-fit: cover;

    }

    .artem:hover{
        transform: scale(1.2);

    }








    @media(max-width: 800px) {
        .holder{
            width:50%;
        }

    }


</style>