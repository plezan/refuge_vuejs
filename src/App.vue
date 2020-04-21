<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Nos animaux</router-link>
            <router-link to="/cart" class="navbar-brand">Panier</router-link>
            <router-link to="/new" class="navbar-brand">Ajouter</router-link>
        </nav>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<style>
    .container{
        margin-top: 50px;
    }
</style>