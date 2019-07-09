<template>
    <div id="app">
        <v-app>
            <v-toolbar dark color="primary">
                <router-link class="app__title" tag="v-toolbar-title" to="/">Create Blog App</router-link>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn class="app__link" to="/" flat>Create</v-btn>
                    <v-btn class="app__link" to="/blog" flat>Blog</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </v-app>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('loadData');
    }
}

</script>
<style lang="scss">
@import '~vuetify/dist/vuetify.css';

.app {
    &__title {
        cursor: pointer;

        @media screen and (max-width: 320px) {
            font-size: 14px;
        }
    }

    &__link {
        @media screen and (max-width: 320px) {
            font-size: 13px;
        }
    }
}

</style>
