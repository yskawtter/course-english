<template>
<div class="container-nav">

    <div id="nav">
        <button data-menu="button" aria-expanded="false" aria-controls="menu">Menu</button>
        <router-link to="/" id="logo-container">
            <img class="logoImgCont"  src="/img/logo.png" alt="logo ingles curso">
        </router-link>


        <div class="nav-links" data-menu="list" id="menu">
            <router-link to="/">Cursos</router-link>
            <router-link to="/">Vantagens</router-link>
            <router-link to="/">Avaliações</router-link>
            <span class="ngcLogin">
                <router-link class="loginbtn" to="/login" v-show="!authenticated">Entrar</router-link>
                <router-link to="/register" v-show="!authenticated">Cadastrar</router-link>
                <router-link to="/dashboard" v-show="authenticated">Dashboard</router-link>
                <router-link to="/profile" v-show="authenticated">Meu Perfil</router-link>
                <button @click="logout($event)" v-show="authenticated">Logout</button>
            </span>
        </div>
    </div>

</div>
</template>

<script>

//dropdownmenu



import {mapState} from 'vuex'
export default {
    name: 'Navbar',
    methods: {
        logout(e) {
            e.preventDefault()

            //emit ev to logout user
            this.$store.commit('logout')
            //redirect
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState(['authenticated'])
    }
}

window.addEventListener('load', function() {
    


function outsideClick(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    if(!element.hasAttribute(outside)) {
        events.forEach(userEv => {

            setTimeout(() => { 
                html.addEventListener(userEv, handleOutsideClick)
            })
        })
        element.setAttribute(outside, '')
    }
    function handleOutsideClick(ev) {
        if(!element.contains(ev.target)){
            element.removeAttribute(outside, '')
            events.forEach(userEv => {
                html.removeEventListener(userEv, handleOutsideClick)
            })
       callback()
        }
    }
}



const menuButton = document.querySelector('[data-menu="button"]')
const menuList = document.querySelector('[data-menu="list"]')
const eventos = ['click', 'touchstart']

function opemMenu(ev) {
    menuList.classList.add('active')
    menuButton.classList.add('active')
    outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active')
        menuButton.classList.remove('active')
    })
}
eventos.forEach((event) => {

    menuButton.addEventListener(event, opemMenu)
})

console.log(menuList)

/* MOBILE MENU */

})

</script>

<style scoped>


body {
    background-color: #ACE5C3;
}
#nav {
    background-color: #466A8C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px;
    margin: 0px 25px;
    padding-bottom: 50px;
}
.ngcLogin {
    padding-left: 45px;
}
#nav a {
    text-decoration: none;
    margin-right: 15px;
    padding: 12px;
}
#nav img {
    width: 100%;
}

.nav-links a {
    background-color: #D9F291;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-family: 'Nunito sans';
    letter-spacing: 1px;
    font-size: 13px;
    transition: .2s;
}
.nav-links a:hover {
    background-color: #D3F279;
}

#nav-title {
    font-size: 3rem;
    font-weight: 300;
}
#nav-links {
    display: flex;
    justify-content: flex-end;
}
button {
    background-color: #466A8C;
    border: 2px solid #D3F279 !important;
    padding: 10px;
    color: #D3F279;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: .3s;
}
button:hover {
    color: #D9F291;
    background-color: #335B80;
}
.loginbtn {
   background-color: #466A8C !important;
   border: 1px solid #D9F291 !important;
   color: #D9F291;
   transition: .3s ;
}
.loginbtn:hover {
    background-color: #D9F291 !important;
    color: #466A8C !important;
}






/* MENU BMOBILE */









[data-menu='button'] {
    display: none;
}

@media(max-width: 1000px) {
    .nav-links a {
    background-color: #D9F291;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-family: 'Nunito sans';
    letter-spacing: 1px;
    font-size: 13px;
    transition: .2s;
}
 #nav a {
    padding: 5px;
}
button {
    padding: 5px ;
}
}


@media(max-width: 768px) {
    
    #nav img {
        display: flex;
        float: right;
        justify-content: flex-end;
        align-items: flex-end;
    }
    [data-menu='button'] {
        display: flex;
        background-color: #D3F279 ;
        border: none;
        padding: .5rem 1rem;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: bold;
        color: #9FBF43;
        cursor: pointer;
        margin: 10px;
        align-items: center;
        position: relative;
        z-index: 300;
    }

    
    [data-menu='button']::before {
        margin-right: 4px;
        content: '';
        display: inline-block;
        height: 3px;
        width: 15px;
        background-color: #9FBF43;
        box-shadow: 0 4px #9FBF43;
        box-shadow: 0 4px #9FBF43, 0 -4px #9FBF43;  
        transition: transform .3s;
    }
    [data-menu='button'].active::before {
        transform: rotate(90deg);
    }
    [data-menu='list'] {
        display: none;
        position: absolute;
        background-color: #D3F279;
        width: 230px;
        z-index: 200;
        padding: 90px 0 20px 0;
        top: 0;
        box-shadow: 2px 2px 2px 0 rgb(0, 0, 0) 0.5;
    }
    [data-menu='list'].active {
        display: block;
        transition: .4s;

    }
    #nav {
        margin: 0px 25px;
        padding: 0px ;
        padding-bottom: 0px;
        display: flex;
    }
    #nav a {
        display: flex;
        flex-direction: column;
        padding: 12px;
        margin: 15px;
    }
   
}





</style>