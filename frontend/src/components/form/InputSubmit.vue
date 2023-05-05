<template> 
    <input type="submit" :value="text">
    </template>
    
    <script>
    export default {
        name: 'InputSubmit',
        props: {
            text: ''
        }
    }
    </script>

    <style scoped>
    input {
        width: 200px;
        margin: 0 auto;
        text-transform: uppercase;
        color: #1F4366;
        font-family: 'Nunito';
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 1rem;
        background-color: #B1E322;
        border: 0;
        padding: 12px;
        cursor: pointer;
        transition: .5s;
    }
    input:hover {
        background-color: #A5CC33;
    }
</style>