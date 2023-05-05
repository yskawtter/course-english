<template>
    <div class="profile">
        <h1>Edite seu perfil</h1>
        <UserForm page="profile" :user="user" btnText="Editar" :key="componentKey"/>
    </div>
    </template>

    <script>
    import UserForm from '@/components/UserForm.vue';
    export default {
        components: {
            UserForm
        },
        data() {
            return {
                user: {},
                componentKey: 0
            }
        },
        created() {
            //load user
            this.getUser()
        },
        methods: {
            async getUser() {
                //get id from token
                const id = this.$store.getters.userId
                const token = this.$store.getters.token

                await fetch(`http://localhost:3000/api/user/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'auth-token': token
                    }
                })
                .then((resp) => resp.json())
                .then((data) => {
                    this.user = data.user
                    this.componentKey += 1
                })
                .catch((err) => console.log(err))
            }
        }
    }

</script>


<style scoped> 
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 100px;
}
.profile h1 {
    margin-bottom: 20px;
    font-family: 'Nunito';
    font-size: 2.2rem;
    color: #1F4366;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}
.profile p{
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