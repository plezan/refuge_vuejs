<template>
    <div class="card">
        <div class="card-header">
            Fiche animal
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="name">Nom</label>
                    <input class="form-control" id="name" v-model="pet.name">
                </div>
                <div class="form-group">
                    <label for="race">Espèce</label>
                    <input class="form-control" id="race"  v-model="pet.race">
                </div>
                <button type="button" class="btn btn-primary" @click="back">Enregistrer</button>
            </form>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'PetShow',
        computed: {
            pet: function() {
                return this.$store.getters.getTodoById(this.$route.params.id)
            }
        },
        methods: {
            back : function () {
                this.$router.go(-1);
            }
        }
    }
</script>
