<template>
    <div class="register">
        <h1>Criar uma conta</h1>
        <p>Crie sua conta gratuitamente aqui :)</p>
        <UserForm :user="{}" page="register" btnText="Cadastrar"/>
    </div>

</template>

<script>
import UserForm from '../components/UserForm.vue'

export default {
    name: 'Register',
    components: {
        UserForm
    }
}
</script>

<style scoped>
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 100px;
}
.register h1 {
    margin-bottom: 20px;
    font-family: 'Nunito';
    font-size: 2.2rem;
    color: #1F4366;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}
.register p{
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