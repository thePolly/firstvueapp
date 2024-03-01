<template>
<div class="dialog" v-if = "show" @click="hideDialog">

    <div class = "dialog__content" @click.stop>
        <h4>Create a new Post</h4>
<slot>

</slot>
    </div>
</div>

</template>


<script>
export default {
    name: 'the-dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        }

    },
    methods: {
    hideDialog(){
        this.$emit('update:show', false);
    }

}


}


</script>


<style scoped>
.dialog{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    position: fixed;
    background: rgba(0,0,0, 0.4);

}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 14px;
    min-height: 60px;
    min-width: 340px;
    padding:20px;
}

h4 {
    margin: 20px;
}


</style>