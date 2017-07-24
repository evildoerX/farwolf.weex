<template>
      <div class="layout" :style="{'background-color':bgcolor}">
        <div style="height: 128;width: 100;margin-top: 82;" v-if="back" @click="backTo" >
            <image src="root:img/back.png" style="width: 80;height: 80"></image>
        </div>
        <text style="flex: 1;color: #ffffff;text-align: center;margin-top: 30;font-size: 35;font-weight: bold">{{title}}</text>
        <div style="height: 128;width: 100;">
        </div>
          <div style="height: 1;background-color: #111111;position: absolute;bottom: 0;left: 0;right: 0">

          </div>
      </div>
</template>
<script>

    export default {
        props:{
            title:{
               default:''

            },
            back:{
              default:true
            },
            bgcolor:{
                default:'#222222'

            },
            disabled:
                {

                    default:false
                },

            type:{
                type:String,
                default:'text'
            },
            font_size:
            {
               default:20
            }

        },
        data () {
            return {

                visiable:true,


            }
        },
        methods: {

            backTo()
            {
                var nav=weex.requireModule("navigator");
                nav.back();
            },
            oninput(e)
            {

//                this.$emit('oninput');
                this.$emit('oninput', e);
                 this.visiable=e.value!='';


            },
            onclick()
            {
                if(!this.disabled)
                    this.$emit('onclick');
            },
            panstart()
            {
                if(!this.disabled)
                this.bgcolor='#ff1b08'
            },
            panend()
            {
                if(!this.disabled)
                this.bgcolor='#ff4800'
            },
            setenable()
            {

            },


            onclose()
            {
                this.value='';
            }


        },

        created:function(){

            this.visiable=!this.value=='';


        },
        ready:function()
        {



        },
//        watch: {
//
//
//            disabled:{
//                immediate: true,
//                handler (val) {
//
//                }
//            }
//        }
    }
</script>
<style src="../css/style.css"></style>
<style scoped>


    .layout {
        background-color: #333333;height: 128;width: 750;flex-direction: row;align-items: center;justify-content: center
    }


</style>