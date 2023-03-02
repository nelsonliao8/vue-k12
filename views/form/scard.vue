<template>
    <div class="index-body">
        <scratch-card 
            elementId="scratch" 
            width="13.2rem" 
            height="5.7rem" 
            :moveRadius="15" 
            :ratio="0.8"
            :startCallback="startCallback"   
            :clearCallback="clearCallbackUp" 
            coverImg="https://cdn.geement.com/sfiles/JinWei/scratch_music.png"
            :result="result"
            style="position: absolute;top: 0;left: 0;top: 42.4%;left: 50%;transform: translate(-50%, -50%);">
        </scratch-card>
    </div>
</template>
<script>
import scratchCard from 'lzy-scratch-card'
    export default {
        components: {
            scratchCard
        },
        data() {
            return {
                result: "", //遮罩层下面的页面（html）注：以html标签字符串的样式写
            }
        },
        methods: {
        	//开始刮时的回调函数
            startCallback(){
            
            },
            //刮刮乐刮层全部清除后的回调函数
            clearCallbackUp(){
                this.result = ""
            },
        },
    }
</script>
