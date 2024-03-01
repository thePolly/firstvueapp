<template>
<div class="page__wrapper">
    <div class= "page__btn" 
    v-for="page in total"
    :class="{'current-page': page === currentPage }"
    @click="changePage(page)"
    >
            {{ page  }}
    </div>
</div>
</template>

 
<script>
export default {
    name: 'the-page',
    props: {
        currentPage: {
            type: Number,
        },
        total: {
            type: Number,
        }
    },
    methods: {
        changePage(newPageNumber) {
            this.$emit('change', newPageNumber);
        }
    }
}
</script>


<style scoped>
.page__wrapper {
display: flex;

}

.page__btn {
    border: 1px solid black;
    padding: 15px;
    margin: 2px;
}

.current-page {
    border: 2px solid blue;
}

</style>