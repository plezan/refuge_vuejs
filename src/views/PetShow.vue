<template>
    <div class="card">
        <div class="card-header">
            Fiche animal
        </div>
        <div class="card-body">
            <p>Nom : {{pet.name}}</p>
            <p>Espèce : {{pet.race}}</p>
            <router-link :to="{ name: 'PetEdit', params: { id: pet.id }}"><button class="btn btn-secondary">Modifier la fiche animal</button></router-link>
            <button class="btn btn-primary float-right">Ajouter au panier</button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'PetShow',
        computed: {
            pet: function() {
                return this.$store.getters.getPetById(this.$route.params.id)
            }
        }
    }
</script>
