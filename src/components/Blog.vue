<template>
    <div>
        <v-content>
            <v-layout class="search" justify-center>
                <v-flex xs12 md7 lg5>
                    <v-text-field v-model.trim="search" label="Search..." outline></v-text-field>
                </v-flex>
            </v-layout>
            <div class="container">
                <div class="d-flex align-items-center flex-column">
                    <div class="col-sm-12 col-md-8 card" v-for="post, index in filterBlog" :key="post.id">
                        <div class="card-body">
                            <h3 v-show="post.edit" class="card-title">{{post.title}}</h3>
                            <v-text-field v-model.trim="post.title" @keypress.enter="changeTitle(post.id, post.title, post)" v-show="post.field" solo></v-text-field>
                            <p class="card-text">{{post.dscr}}</p>
                            <router-link class="link" :to="'/blog/' + post.id">Open</router-link>
                            <i @click="remove(post.id, index)" class="material-icons icon-remove">clear</i>
                            <i @click="editTitle(post)" class="material-icons icon-edit">edit</i>
                        </div>
                    </div>
                </div>
            </div>
        </v-content>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        remove(id, index) {
            this.$store.commit('removePost', id);
            this.$delete(this.$store.state.posts, index)
        },
        editTitle(post) {
            return this.$store.commit('editField', post)
        },
        changeTitle(id, newTitle, post) {
            return this.$store.commit('changeData', {
                id: id,
                newTitle: newTitle,
                post: post
            })
        }
    },
    computed: {
        filterBlog() {
            return this.$store.getters.searchPosts(this.search)
        }
    }
}

</script>
<style lang="scss" scoped>
@import '~vuetify/dist/vuetify.css';

.link {
    text-decoration: none;
}

.search {
    margin-top: 20px;
}

.card {
    margin-bottom: 20px;

    &-body {
        position: relative;
    }
}

.icon-remove {
    position: absolute;
    top: 10px;
    right: -10px;
    color: red;

    &:hover {
        cursor: pointer;
    }
}

.icon-edit {
    position: absolute;
    bottom: 10px;
    right: 0;
    
    &:hover {
        cursor: pointer;
    }
}
</style>
