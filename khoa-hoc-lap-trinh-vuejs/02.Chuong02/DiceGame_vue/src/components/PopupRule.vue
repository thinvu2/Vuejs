<template>
    <div class="wrapper-popup" v-bind:class ="getClassPopup">
        <div class="rule">
            <h3>Luat choi</h3>
            <p>Số lượng CP Tăng, Giảm, Không đổi Số lượng CP Tăng, Giảm, Không đổi Số lượng CP Tăng, 
                Giảm, Không đổi Số lượng CP Tăng, Giảm, Không đổi Số lượng CP Tăng, Giảm, Không đổi
            </p>
            <button 
                v-on:click = "confirm"
                class="confirm">Da hieu
            </button>
        </div>
    </div>
</template>
<script>
export default{
    name:'popup-rule',
    props:{
        isOpenPopup:{ type: Boolean, default: false },
    },
    data(){
        return{
        }
    },
    computed: {
        getClassPopup: function(){
            return {
                'open-popup': this.isOpenPopup
            }
        }
    },
    methods:{
        confirm(){
            //console.log("handleConfirm popup.vue ");
            this.$emit('handleConfirm');
        }
    }
}
</script>
<style>
/* PopupRule */
.wrapper-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        opacity: 0;
         visibility: hidden;
        transition: all .3s ease;
    }
    .wrapper-popup.open-popup {
        opacity: 1;
        visibility: visible;
    }
    .rule {
        width: 350px;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        background-color: #fff;
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        transition: all .3s ease;
    }
    .open-popup .rule {
        transform: translate(-50%, -50%) scale(1);
    }
    /* scale -> class */
    .rule h3 {
        margin-bottom: 10px;
    }
    .rule .confirm {
        cursor: pointer;
        margin-top: 20px;
        padding: 8px 15px;
        border: 2px solid #333;
        background-color: #fff;
        transition: all .3s ease;
    }
    .rule .confirm:hover {
        color: #fff;
        background-color: #333;
    }
    /* kết hợp CSS3 với VueJs để xây dựng hiệu ứng - Zoom in - Zoom out */
</style>