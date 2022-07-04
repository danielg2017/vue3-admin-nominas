<!-- @format -->

<template>
    <div class="login">
        <h2>Login</h2>
        <button @click="changeForm">Crear Cuenta Nueva</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        changeForm: Function,
        },
};
</script>

<style></style>
