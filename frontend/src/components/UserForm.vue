<template>
    <div>
        <Message :msg="msg" :msgClass="msgClass" />
        <form id="user-form" @submit="page === 'register' ? register($event)  : update($event)">
            <input type="hidden" name="id" id="id" v-model="id">
            <div class="input-container">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome">
            </div>
            <div class="input-container">
                <label for="email">E-mail:</label>
                <input type="text" id="email" email="email" v-model="email" placeholder="Digite seu email">
            </div>
            <div class="input-container">
                <label for="password">Senha:</label>
                <input type="password" id="password" password="password" v-model="password" placeholder="Digite sua senha">
            </div>
            <div class="input-container">
                <label for="confirmpassword">Confirme senha:</label>
                <input type="password" id="confirmpassword" confirmpassword="confirmpassword" v-model="confirmpassword" placeholder="Confirme sua senha">
            </div>
            <InputSubmit :text='btnText' />
        </form>
    </div>
    </template>

<script>
import InputSubmit from './form/InputSubmit.vue';
import Message from './Message.vue';

export default {
    name: 'RegisterForm',
    data(){
        return {
            id: this.user._id || null,
            name: this.user.name || null,
            email: this.user.email || null,
            password: null,
            confirmpassword: null,
            msg: null,
            msgClass: null
        }
    },
    props: ['user', 'page', 'btnText'],
    components: {
        InputSubmit,
        Message
    },
    methods: {
        async register(e) {
            e.preventDefault()
            const data = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirmpassword: this.confirmpassword
            }
            const jsonData = JSON.stringify(data) //obj transformado em JSONdata

            await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: jsonData
            })
            .then((resp) => resp.json())
            .then((data) => {
                let auth = false

                if(data.error) {
                    this.msg = data.error
                    this.msgClass = 'error'
                }
                else {
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

            
            .catch((err) => console.log(err))

            console.log(jsonData)
        },
        async update(e) {
            e.preventDefault()
            const data = {
                id: this.id,
                name: this.name,
                email: this.email,
                password: this.password,
                confirmpassword: this.confirmpassword
            }
            const jsonData = JSON.stringify(data) //obj transformado em JSONdata
            //get token from store
            const token = this.$store.getters.token

            await fetch('http://localhost:3000/api/user', {
                method: 'PATCH',
                headers: {'Content-type': 'application/json',
                            'auth-token': token},
                body: jsonData
            })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.error) {
                    this.msg = data.error
                    this.msgClass = 'error'
                } else {
                    this.msg = data.msg
                    this.msgClass = 'success'
                }
                setTimeout(() => {
                    this.msg = null
                }, 2000)
            }) .catch((err) => console.log(err))
        }
    }
}
</script>

<style scoped>
#user-form {
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
    #user-form  {
       width: 275px;
    }
}
</style>