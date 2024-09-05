<template>
    <div class="demo-slot">
        <!-- <slot></slot> -->
        <com-tabs title="Tab of title">
            <ul class="tabs-header">
                <li v-for="(item, index) in tabsHeader" 
                v-bind:key="index"
                v-on:click="setActiveTab(index)"
                v-bind:class="{ active: tabActive === index}"
                >
                {{ item.text }}
                </li>
            </ul>
            <div class="tab-content tab1" v-if="tabActive === 0">
                <p>hihihi1</p>
            </div>
            <div class="tab-content tab2" v-else-if="tabActive === 1">
                <p>hihii2</p>
            </div>
            <div class="tab-content tab3" v-else>
                <p>hihihhi3</p>
            </div>
        </com-tabs>
    </div>
</template>
<script>
import ComTabs from './ComTabs.vue'
export default {
    name:'demo-slot',
    data() {
        return{
            tabsHeader: [
                {text: 'Tab1'},
                {text: 'Tab2'},
                {text: 'Tab3'},
            ],
            tabActive: 0,
        }
    },
    components:{
        ComTabs
    },
    methods:{
        setActiveTab(index){
            // console.log('Set active tab: ', index);
            this.tabActive = index;
        }
    }
}
</script>
<style scoped>
    .demo-slot{
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }
</style>