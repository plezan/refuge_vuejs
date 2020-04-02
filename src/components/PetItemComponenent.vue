<template>
    <router-link :to="{ name: 'PetShow', params: { id: pet.id }}">
        <li class="list-group-item">
            {{pet.race}} - {{pet.name}}
        </li>
    </router-link>
</template>

<script>
    export default {
        name: "PetItemComponenent",
        props : {
            pet : null,
        }
    }
</script>