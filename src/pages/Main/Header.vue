<template>
    <header name="main" :style="{'background-image':'url('+bima+')'}">
        <div class="hamburger-menu" >
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>
            <ul class="menu__box">
                <li><a @click="$router.push('/')" class="menu__item" >Главная</a></li>
                <li><a @click="$router.push('/')" class="menu__item" href="#summer">Лето</a></li>
                <li><a @click="$router.push('/models')" class="menu__item" >Модели</a></li>
                <li><a @click="$router.push('/adult')" class="menu__item" >18+</a></li>
                <li><a @click="$router.push('/ourworks')" class="menu__item" >Наши работы</a></li>
                <li><a @click="$router.push('/#con')" class="menu__item" >Получить доступ к 18+</a></li>
            </ul>
        </div>



        <div class="hi" >
            <p>hi,we are a</p>
            <p><span> fashion</span></p>
            <p>and models</p>
            <p>recruitment company</p>

        </div>
    </header>
</template>

<script>
    export default {
        props:{
            bima:{
                type:String,
            }
        }

    }
</script>

<style scoped>
    /*header*/

    header{
        /*background-image: url('../../img/main.jpg');*/
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height:100vh;
    }
    .burg{
        text-align: right;
    }
    .burg svg{
        cursor:pointer;
    }

    /*burger*/
    /* скрываем чекбокс */
    #menu__toggle {
        position: fixed;
        opacity: 0;
    }
    /* стилизуем кнопку */
    .menu__btn {
        display: flex; /* используем flex для центрирования содержимого */
        align-items: center;  /* центрируем содержимое кнопки */
        position: fixed;
        top: 20px;
        left: 20px;
        width: 26px;
        height: 26px;
        cursor: pointer;
        z-index: 2;
    }
    /* добавляем "гамбургер" */
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #616161;
    }
    .menu__btn > span::before {
        content: '';
        top: -8px;
    }
    .menu__btn > span::after {
        content: '';
        top: 8px;
    }

    /* контейнер меню */
    .menu__box {
        display: block;
        position: fixed;
        visibility: hidden;
        top: 0;
        left: -100%;
        width: 300px;
        height: 100%;
        margin: 0;
        padding: 80px 0;
        list-style: none;
        text-align: center;
        background-color: #ECEFF1;
        box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
        z-index:1;
    }
    /* элементы меню */
    .menu__item {
        display: block;
        padding: 12px 24px;
        color: #333;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
    }
    .menu__item:hover {
        background-color: #CFD8DC;
    }

    #menu__toggle:checked ~ .menu__btn > span {
        transform: rotate(45deg);
    }
    #menu__toggle:checked ~ .menu__btn > span::before {
        top: 0;
        transform: rotate(0);
    }
    #menu__toggle:checked ~ .menu__btn > span::after {
        top: 0;
        transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
        visibility: visible;
        left: 0;
    }

    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
        transition-duration: .25s;
    }
    .menu__box {
        transition-duration: .25s;
    }
    .menu__item {
        transition-duration: .25s;
    }
    /*burger*/

    .hi{
        border-left: 5px solid white;
        padding: 2%;
        position: absolute;
        bottom: 0;


    }
    .hi p{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 23px;
        line-height: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: #ffffff;


    }

    .hi span{
        font-size: 70px;
        font-weight: 800;
    }

    li{
        cursor: pointer;
    }
    /*header*/
</style>