<!-- @format -->

<template>
    <div>
        <h1>Estamos en Home</h1>
        <button @click="logout">Cerrar Sesión</button>
    </div>
</template>

<script>
import {auth} from "../utils/firebase";

export default {
    name: 'HomeView',
    setup() {
        const logout = () => {
            auth.signOut();
        };
        return {
            logout
        };
        }
    }
</script>
