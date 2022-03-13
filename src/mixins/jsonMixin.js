import axios from "axios";

export default {
    data(){
        return{
            massofphotos:[],
            result:'',
            isLoading:false,
            isOpen:'',
            lika:''
        }
    },
    methods:{
        modalChange(event){
            this.lika=event.target.src;
            if(this.isOpen=='flex'){
                this.isOpen='none';
            }
            else{
                this.isOpen='flex';
            }
        },
        async getMD(nameJson){
            try {
                this.isLoading=true;
                const response=await axios.get("@/../json/"+nameJson+".json");
                // console.log(response);
                let nonmass=response.data.split("[/img][/url]");
                for(let i=0;i<nonmass.length;i++){
                    this.massofphotos[i]=nonmass[i].slice(nonmass[i].lastIndexOf('https'));
                }
            }catch(e)
            {
                alert('Ошибка');
            }
            finally{
                this.isLoading=false;
            }
        },
    },


}
