<template>
    <div class="dashboard">
       <div class="title-container">
        <h2>Seja bem vindo ao nosso curso...</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
       </div>

       
       <section class="course-container">
        <div class="course-cards" >
            <h3>Comece aqui</h3>
            <div class="courses">
                <router-link to="/course" class="course-qdd" ></router-link>
                <router-link to="/course" class="course-qdd"></router-link>
            </div>
        </div>

    <div class="course-cards" >
        <h3>Comece aqui</h3>
        <div class="courses">
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
        </div>
    </div>

    <div class="course-cards">
        <h3>Comece aqui</h3>
        <div class="courses">
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
        </div>
    </div>

    <div class="course-cards">
        <h3>Comece aqui</h3>
        <div class="courses">
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
            <router-link to="/course" class="course-qdd"></router-link>
        </div>
    </div>
        
       </section>
    </div>
    </template>

    <script>



    export default {

    //FALTA VE SE CONSIGO LINKAR COM O NOME
    //FALTA FAZER O CSS E O RESPONSIVO
   
    }
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
} 
.title-container h2{
    margin-bottom: 15px;
    margin-left: 32px;
    text-align: left;
    font-family: 'Nunito';
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #B1E322;
}
.title-container p {
    margin-bottom: 10px;
    color: #D3F279;
    margin-bottom: 15px;
    margin-left: 32px;
    text-align: left;
    font-family: 'Nunito';
    letter-spacing: 1px;
    color: #B1E322;
    padding-bottom: 42px;
}
.courses {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 22px;
    margin-top: 22px;
}
.course-qdd {
    width: 200px;
    height: 220px;
    background-color: aliceblue;
    cursor: pointer;
}
.course-cards {
    margin-left: 32px;
}
.course-cards {
    margin-top: 22px;
    color: #D3F279;
    margin-bottom: 15px;
    margin-left: 32px;
    text-align: left;
    font-family: 'Nunito';
    letter-spacing: 1px;
    color: #B1E322;
}
</style>