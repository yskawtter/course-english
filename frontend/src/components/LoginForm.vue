<template>

    <div>
        <Message :msg="msg" :msgClass="msgClass" />
        <form  id="login-form" @submit="login($event)">
        <div class="input-container">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model="email" placeholder="Digite seu email">
        </div>
        <div class="input-container">
            <label for="password">Senha:</label>
            <input type="password" name="password" id="password" v-model="password" placeholder="Digite sua senha">
        </div>
        <InputSubmit text="Entrar" />
    </form>
    </div>
</template>

<script>
import Message from './Message.vue';
import InputSubmit from './form/InputSubmit.vue';

export default {
    name: 'LoginForm',
    components: {
    Message,
    InputSubmit
},
data() {
    return {
        email: null,
        password: null,
        msg: null,
        msgClass: null
    }
},
    methods: {
        async login(e) {
            e.preventDefault()
            const data = {
                email: this.email,
                password: this.password
            }
            const jsonData = JSON.stringify(data)
            await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: jsonData
            })
            .then((resp) => resp.json())
            .then((data) => {
                let auth = false
                if(data.error){
                    this.msg = data.error
                    this.msgClass = 'error'
                } else {
                    auth = true
                    this.msg = data.msg
                    this.msgClass = 'success'
                     //emitindo evento for auth an user
                     this.$store.commit('authenticate', {token: data.token, userId: data.userId})
                }
                setTimeout(() => {
                if(!auth) {
                    this.msg = null
                } else {
                    //redirect
                    this.$router.push('dashboard')
                }
                    }, 2000)
            })
        }
    }
}

</script>

<style scoped>
#login-form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #1F4366;
    padding: 32px;
    width: 450px;
    border-radius: 10px;
}
.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    text-align: left;
    font-family: 'Nunito';
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
}
.input-container label {
    margin-bottom: 10px;
    color: #C3D5E5;
}

.input-container input {
    padding: 10px;
    border: 1px solid;
    background-color: #8FA8BF;
}


@media(max-width: 500px) {
    #login-form  {
       width: 275px;
    }
}
</style>