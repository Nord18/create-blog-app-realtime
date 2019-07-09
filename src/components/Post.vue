<template>
    <div>
        <v-content>
            <div class="container">
                <div class="d-flex align-items-center flex-column">
                    <div v-for="post, index in singlePost" :key="index" class="col-sm-12 col-md-8 card">
                        <div class="card-body">
                            <h3 class="card-title">{{post.title}}</h3>
                            <p class="card-text">{{post.dscr}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </v-content>
    </div>
</template>
<script>
export default {
    props: {
        id: String
    },
    computed: {
        singlePost() {
            return this.$store.getters.loadPost(this.id)
        }
    }
}

</script>
<style lang="scss" scoped>
@import '~vuetify/dist/vuetify.css';

</style>
