<template>
<footer>
    <img src="/img/logo.png" alt="logofinal">
    <p>Apenas um site para estudos :D</p>
</footer>

</template>

<script>
export default {
    name: 'Footer'
}
</script>


<style scoped>

footer {
    background-color: #466A8C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #335B80;
    margin: 25px;
}
footer p {
    color: #C3D5E5;
    font-family: 'nunito';
}

@media(max-width: 450px) {
    footer  {
        margin: 0 25px;
        font-size: 12px;
    }
    footer img {
        width: 32vw;
    }
}
</style>