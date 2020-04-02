<template>
    <div class="card">
        <div class="card-header">
            Fiche animal
        </div>
        <div class="card-body">
            <p>Nom : {{pet.name}}</p>
            <p>Espèce : {{pet.race}}</p>
            <router-link :to="{ name: 'EditPet', params: { id: pet.id }}"><button class="btn btn-secondary">Modifier la fiche animal</button></router-link>
            <button class="btn btn-primary">Ajouter au panier</button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'PetShow',
        data: function() {
            return{
                pet : this.$store.state.pets[this.$route.params.id]
            }
        }
    }
</script>
