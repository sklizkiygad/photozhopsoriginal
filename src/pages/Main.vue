<template>
    <div>
      <Header :bima="'https://i.yapx.ru/RINqZ.jpg'"/>
        <article>
            <div class="summer" >
                <a name="summer"></a>
                <div class="hop">
                    <h2>do you</h2>
                    <h2><span>got</span></h2>
                    <h2>what it takes</h2>
                    <h2>to become</h2>
                    <h2>a model?</h2>

                    <h3>Featured article of the day</h3>
                    <p>Aenean venenatis arcu at magna commodo mollis. Sed vestibulum, nunc id consectetur posuere, mi nulla eleifend lorem, id facilisis tortor lectus vel erat. Cras feugiat lorem tellus, ut sagittis urna placerat nec.</p>
                    <a href="#">READ THE FULL STORY</a>


                </div>

                <div class="mechanic">
                    <div class="benefit">
                        <p>benefit from</p>
                        <p> <span>THIS SUMMER</span> </p>
                        <p>Campaign</p>
                    </div>
                </div>
            </div>

            <div class="models" >
                <a name="models"></a>
                <div class="m1">
                    <a @click="$router.push('/models')" href="#">models</a>
                </div>
                <div class="m2 m"><img src="@/img/m1.jpg" alt="m1"><img src="@/img/m11.jpg" alt="m11"></div>
                <div class="m3 m"><img src="@/img/m2.jpg" alt="m2"><img src="@/img/m22.jpg" alt="m22"></div>
                <div class="m4 m"><img src="@/img/m4.jpg" alt="m2"></div>
                <div class="m5 m"><img src="@/img/m3.jpg" alt="m2"></div>
            </div>

            <div class="ei">
                <a @click="$router.push('/adult')" href="#" name="eight">18+ adult content</a>

            </div>

            <div class="contex">
                <a name="wor"></a>
                <div class="c1">
                    <a @click="$router.push('/ourworks')" href="#" >our works</a>
                </div>
                <div class="c2 c"><img src="@/img/c4.jpg" alt="m11"><img src="@/img/c2.jpg" alt="m1"><img src="@/img/c3.jpg" alt="m11"></div>
                <div class="c3 c "><img src="@/img/c5.jpg" alt="m1"><img src="@/img/c6.jpg" alt="m11"></div>
                <div class="c4 c"><img src="@/img/c7.jpg" alt="m1"></div>
                <div class="c5 c"><img src="@/img/c8.jpg" alt="m1"></div>
            </div>


            <div class="vk">
                <a href="https://vk.com/emilsinckler"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="red" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                </svg></a>

            </div>

        </article>
        <footer>

            <div class="leftf">
                <h1>About
                    Fashionate</h1>
                <p>Aenean venenatis arcu at magna commodo mollis. Sed vestibulum, nunc id consectetur posuere, mi nulla eleifend lorem, id facilisis tortor lectus vel erat. Cras feugiat lorem tellus, ut sagittis urna placerat nec.</p>

                <h1>From our
                    Blog</h1>
                <p>Nam vitae augue tempus
                    vestibulum purus in, interdum nibh. Nam maximus massa nisl, ac venenatis elit sollicitudin in. Aenean ut turpis vel metus vehicula laoreet. Nullam posuere non sem quis hendrerit. Vivamus molestie dignissim ligula quis pharetra. Aenean mattis sapien sed massa elementum, tincidunt condimentum quam lobortis. Aliquam sit amet purus eleifend, sollicitudin dolor id, sagittis nulla.</p>
            </div>
            <div class="rightf">
                <h1>Quick
                    Contact</h1>
                <a name="con"></a>

                <form  action="#" method="post" @submit.prevent>
                    <input type="text"  v-bind:class="{pleaseinsert: isEmail}" v-bind:value="email" @input="inputEmail" id="email" placeholder="Email">
                    <input type="text"  v-bind:class="{pleaseinsert: isName}"  v-bind:value="name" @input="inputName" id="name" placeholder="Name">
                    <textarea id="message" v-bind:class="{pleaseinsert: isText}" v-bind:value="textarea" @input="inputText" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button type="submit" @click="checkingMe">Send</button>

                </form>


            </div>
        </footer>

    </div>
</template>

<script>
    import Header from "@/pages/Main/Header";

    export default {
        components:{
            Header,
        },
        data(){
            return{
                name:'',
                email: '',
                textarea:'',
                isName:false,
                isEmail:false,
                isText:false
            }
        },
        methods:{
            inputName(event){
                this.name=event.target.value;
                this.isName=false;
            },
            inputEmail(event){
                this.email=event.target.value;
                this.isEmail=false;
            },
            inputText(event){
                this.textarea=event.target.value;
                this.isText=false;
            },
            checkingMe(){
                if(!this.name)
                {
                    this.isName=true;
                    alert('Введите имя');
                }
                else if(!this.email)
                {
                    this.isEmail=true;
                    alert('Введите почту');
                }
                else if(!this.textarea)
                {
                    this.isText=true;
                    alert('Заполните текст сообщения');
                }
                else if(this.email){
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.email)) {
                        alert('Что с почтой не то -_-');
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .pleaseinsert{
        border:1px solid red;
    }
    /*footer*/
    footer{
        background-color: rgb(4, 13, 20);
        display: flex;
        flex-wrap: nowrap;
    }
    .leftf{
        width: 50%;
        padding: 5%;
    }
    .rightf{
        width: 50%;
        padding: 5%;
    }
    footer h1{
        font-family: 'Open Sans';
        font-size: 56px;
        line-height: 51px;
        font-weight: 300;
        color: #d3d9e0;
    }
    footer p{
        font-family: 'Open Sans';
        font-size: 16px;
        line-height: 29px;
        font-weight: 300;
        color: #d3d9e0;
    }

    form{
        display: flex;
        flex-direction: column;
    }
    input{
        background-color: rgb(0, 238, 255);
        margin-top: 5%;
        padding: 2%;

    }
    textarea{
        background-color: rgb(0, 238, 255);
        margin-top: 5%;
        padding: 2%;
    }
    button{
        background-color: rgb(255, 0, 0);
        margin-top: 5%;
        width: 30%;
        padding: 2%;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 100%;
    }

    /*footer*/



    /*meta*/
    @media (max-width:790px) {
        .c{
            display:none;

        }
        .m{
            display: none;
        }
        .m1{
            width: 100%;
        }
        .c1{
            width: 100%;
        }
        footer{

            flex-wrap: wrap;
            text-align: center;
        }
        .summer{
            flex-wrap: wrap;

        }
        .hop{
            width: 100%;
        }
        .mechanic{
            width: 100%;
        }
        .leftf{
            width: 100%;

        }
        .rightf{
            width: 100%;
        }
        .benefit{
            position: relative;
        }

    }


    /*meta*/

    /*style*/
    html,body{
        margin: 0;
    }

    .hop h2{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 23px;
        line-height: 48px;
        font-weight: 700;
        text-transform: uppercase;
        color: #ffffff;
    }
    .hop span{
        font-size: 70px;

        font-weight: 800;
    }
    .hop h3{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 23px;
        line-height: 51px;
        font-weight: 300;
        text-transform: uppercase;
        color: #ffffff;
    }
    h3 + p{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 16px;
        line-height: 29px;
        font-weight: 300;
        color: #ffffff;
    }
    .summer{
        display: flex;


    }
    .hop{

        width: 60%;
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../img/main3.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding: 2%;



    }

    .mechanic{
        width: 40%;
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../img/main2.jpg');
        background-repeat: no-repeat;

        background-size: cover;




        position: relative;

    }
    .summer a {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 16px;
        line-height: 29px;
        font-weight: 300;
        color: #ffffff;
        outline:none;
        text-decoration: none;

    }

    .benefit{
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: right;
        padding: 2%;

    }
    .benefit p{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 19px;
        line-height: 29px;
        font-weight: 700;
        text-transform: uppercase;
        color: #ffffff;
    }
    .benefit p>span{
        font-size: 25px;
        font-weight: 800;
    }
    .models{
        display: flex;
        filter: drop-shadow(16px 16px 20px blue);

    }
    .m1{
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../img/main4.jpg');
        padding-bottom: 20%;
        width: 28%;
        padding: 2%;
        padding-top: 50%;
        text-align: center;



    }
    .m1 a{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 3em;
        line-height: 62px;
        font-weight: 800;
        text-transform: uppercase;
        text-shadow: 0px 0px 2px rgba(0,0,0,0.05);
        color: #ffffff;



    }
    .m{
        width: 18%;
        display: flex;
        flex-direction: column;
        filter: saturate(20%) blur(2px) ;
    }

    .c{
        width: 18%;
        display: flex;
        flex-direction: column;
        filter: saturate(20%) blur(2px);
    }



    .m2 img:first-child{
        height: 60%;

        object-fit:cover;
        object-position: right;

    }

    .m2 img:nth-child(2){
        height: 40%;

        object-fit:cover;
        object-position: center;

    }

    .m3 img:first-child{
        height: 40%;

        object-fit:cover;
        object-position: right;

    }

    .m3 img:nth-child(2){
        height: 60%;

        object-fit:cover;
        object-position: center;

    }
    .m4 img{
        height: 100%;
        object-fit: cover;
    }
    .m5 img{
        height: 100%;
        object-fit: cover;
    }
    .ei{
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../img/m5.jpg');

        background-repeat: no-repeat;

        background-size: cover;
        background-position: center;


        padding: 5%;

    }
    .ei a{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 56px;
        line-height: 1.2;
        font-weight: 300;
        color: #ffffff;
        text-transform: uppercase;
        text-decoration: none;
        outline: none;
    }
    .contex{
        display:flex;
        filter: drop-shadow(16px 16px 20px rgb(255, 0, 0));
    }
    .c1{

        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../img/c1.jpg');

        background-position: center;
        background-repeat: no-repeat;

        padding-bottom: 20%;
        width: 28%;
        padding: 2%;
        padding-top: 50%;
        text-align: center;
    }

    .c1 a{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 3em;
        line-height: 62px;
        font-weight: 800;
        text-transform: uppercase;
        text-shadow: 0px 0px 2px rgba(0,0,0,0.05);
        color: #ffffff;


    }

    .c3 img:first-child{
        height: 50%;
        object-fit: cover;


    }
    .c3 img:nth-child(2){
        height: 50%;
        object-fit: cover;

    }

    .c4 img{
        height: 100%;
        object-fit: cover;
    }
    .c5 img{
        height: 100%;
        object-fit: cover;
    }
    .vk{
        text-align: center;
        background-color: rgb(4, 13, 20);
        padding: 5%;

    }
    /*style*/


    /*meta*/
    @media (max-width:790px) {
        .c{
            display:none;

        }
        .m{
            display: none;
        }
        .m1{
            width: 100%;
        }
        .c1{
            width: 100%;
        }
        footer{

            flex-wrap: wrap;
            text-align: center;
        }
        .summer{
            flex-wrap: wrap;

        }
        .hop{
            width: 100%;
        }
        .mechanic{
            width: 100%;
        }
        .leftf{
            width: 100%;

        }
        .rightf{
            width: 100%;
        }
        .benefit{
            position: relative;
        }

    }


    /*meta*/

</style>