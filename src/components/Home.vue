<template>
    <div>
        <v-content>
            <v-container class="wrapper" fill-height>
                <v-layout justify-center align-center>
                    <v-flex xs12 md6 lg4>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-flex xs12>
                                <v-text-field ref="title" clearable :rules="rules" required v-model="title" label="Type title" outline></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea ref="text" clearable :rules="rules" required v-model="dscr" label="Type description" outline></v-textarea>
                            </v-flex>
                            <v-btn block @click="createPost" color="info">Create Post</v-btn>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>
<script>
export default {
    data() {
        return {
            valid: false,
            rules: [
                v => !!v || 'Title and description is required'
            ],
            title: '',
            dscr: ''
        }
    },
    methods: {
        createPost() {
            if (this.$refs.title.value !== "" && this.$refs.text.value !== "") {
                return this.$store.dispatch('addData', {
                    title: this.title,
                    dscr: this.dscr
                })
            }
        }
    }
}

</script>
<style lang="scss" scoped>
@import '~vuetify/dist/vuetify.css';

.wrapper {
    height: 75vh;
}

</style>
