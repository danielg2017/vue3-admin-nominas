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
                v-model="formData.email"
                :class="{ 'error': formError.email }"
                />
            </div>
            <div class="field">
                <input type="text"
                placeholder="Contraseña"
                v-model="formData.password"
                :class="{ 'error': formError.password }"
                />
            </div>
            <div class="field">
                <input type="password"
                placeholder="Repetir contraseña"
                v-model="formData.repeatPassword"
                :class="{ 'error': formError.repeatPassword }"
                />
            </div>
            <button type="submit" class="ui button positive fluid">Registrar</button>
        </form>
        <p @click="changeForm">Iniciar Sección</p>

    </div>
</template>

<script>
// import { async } from '@firebase/util';
import { ref } from 'vue';
import * as Yup from 'yup';


export default {
    name: 'Register',
    props: {
        changeForm: Function,
    },
    setup () {
        let formData = {};
        let formError = ref({});

const schemaForm = Yup.object().shape({
    //   email: Yup.string()
    //     .email('Correo electronico invalido')
    //     .required('Correo electronico requerido'),
    // password: Yup.string()
    //     .min(6, 'Contraseña muy corta')
    //     .required('Contraseña requerida'),
    // repeatPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    //     .required('Repetir contraseña requerida'),
    email: Yup.string()
        .email(true)
        .required(true),
    password: Yup.string()
        // .min(6, 'Contraseña muy corta')
        .required(true),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], true)
        .required(true),
});

        const onRegister = async () => {
            formError.value = {};

           try {
            await schemaForm.validate(formData, { abortEarly: false });
            // onRegister();
            console.log('Formulario valido')
        }   catch (err) {
            err.inner.forEach((error) => {
                formError.value[error.path] = error.message;
            });
        }
            };

        return {
            formData,
            onRegister,
            formError,
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

.error {
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
