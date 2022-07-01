<!-- @format -->

<template>
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>
    <div class="register">
        <h1>Crear Cuenta</h1>
        <form class="ui form">
            <div class="field">
                <input type="text" placeholder="Correo electronivo" class="error" />
            </div>
            <div class="field">
                <input type="text" placeholder="Contraseña" />
            </div>
            <div class="field">
                <input type="password" placeholder="Repetir contraseña" />
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
