<template>
    <div class="login">
        <h1>Entrar no CursoEnglish </h1>
        <LoginForm />
    </div>
    </template>

    <script>
    import LoginForm from '@/components/LoginForm.vue';
    export default {
        components: {
            LoginForm
        }
    }
</script>

<style scoped> 
    .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 100px;
}
.login h1 {
    margin-bottom: 20px;
    font-family: 'Nunito';
    font-size: 2.2rem;
    color: #1F4366;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}
.login p{
    margin-bottom: 5px;
    font-family: 'Nunito sans';
    font-weight: bold;
    font-size: 1rem;
    color: #1F4366;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 12px;
}

</style>