import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase/init'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: []
    },
    actions: {
        addData({ commit }, { title, dscr }) {
            commit('addPost', { title, dscr })
        },
        loadData({ commit, state }) {
            db.collection('posts').get()
                .then(post => {
                    let posts = [];
                    post.forEach(doc => {
                        posts.push({
                            id: doc.id,
                            title: doc.data().title,
                            dscr: doc.data().dscr,
                            field: false,
                            edit: true
                        });
                        state.posts = posts
                    })
                })
        }
    },
    mutations: {
        addPost(state, { title, dscr }) {
            db.collection('posts').add({
                    title: title,
                    dscr: dscr
                })
                .then(doc => {
                    state.posts.push({
                        id: doc.id,
                        title: title,
                        dscr: dscr,
                        field: false,
                        edit: true
                    })
                })
        },
        removePost(state, id) {
            db.collection('posts').doc(id).delete()
        },
        changeData(state, { id, newTitle, post }) {
            db.collection('posts').doc(id).update({
                    title: newTitle
                })
                .then(
                    post.title = newTitle,
                    post.field = false,
                    post.edit = true
                )
        },
        editField(state, post) {
            post.field = true;
            post.edit = false
        }
    },
    getters: {
        searchPosts: state => search => {
            return state.posts.filter(post => {
                return post.title.match(search);
            })
        },
        loadPost: state => id => {
            return state.posts.filter(post => {
                return post.id == id
            })
        }
    }
})
