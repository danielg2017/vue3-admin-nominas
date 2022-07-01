<!-- @format -->

<template>
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>
    <div class="register" @submit.prevent="onRegister">
        <h1>Crear Cuenta</h1>
        <form class="ui form">
            <div class="field">
                <input type="text"
                placeholder="Correo electronivo"
                v-model="formData.email" />
            </div>
            <div class="field">
                <input type="text"
                placeholder="Contraseña"
                v-model="formData.password" />
            </div>
            <div class="field">
                <input type="password"
                placeholder="Repetir contraseña"
                v-model="formData.repeatPassword" />
            </div>
            <button type="submit" class="ui button positive fluid">Registrar</button>
        </form>
        <p @click="changeForm">Iniciar Sección</p>

    </div>
</template>

<script>
export default {
    name: 'Register',
    props: {
        changeForm: {
            type: Function,
        },
    },
    setup () {
        let formData = {}
        const onRegister = () => {
            console.log('Registrando Usuario')
            console.log(formData)
        }

        return {
            formData,
            onRegister,
        }
    }
};
</script>

<style scoped>

.register {
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 0 38px -5px rgba(0, 0, 0, 0.45);
    widows: 400px;
    border-radius: 10px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}
form {
    width: 100%;
}
form input.error {
	 border-color: red;
	 background-color: #ffeded;
}

p{
    text-align: center;
    margin-top: 30px;
}

p:hover{
    cursor: pointer;
    opacity: 0.6;
}
</style>
