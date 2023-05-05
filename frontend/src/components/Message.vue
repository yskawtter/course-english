<template>
<p class="msg" :class="msgClass" v-if="msg">{{ msg }}</p>
</template>

<script>
export default {
    name: 'Message',
    props: ['msg', 'msgClass']
}
</script>

<style scoped>
    .msg {
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .success {
        color: #36995E;
        background-color: #74C294;
        border-color: #85CCA2;
        font-family: 'Nunito';
        letter-spacing: 0.5px;
    }
    .error {
        color: #721c24;
        background-color: #F8D7CA;
        border-color: #F5C6CB;
        font-family: 'Nunito';
        letter-spacing: 0.5px;
    }
</style>