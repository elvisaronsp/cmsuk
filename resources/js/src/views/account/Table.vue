<template>
    <vs-table filtered multiple v-model="selected" pagination max-items="7" search :data="accounts">
        <template slot="thead">
            <vs-th sort-key="email">Email</vs-th>
            <vs-th sort-key="username">Account Name</vs-th>
            <vs-th sort-key="id">Action</vs-th>
        </template>
        <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].email">
                    {{data[indextr].email}}
                </vs-td>
                <vs-td :data="data[indextr].name">
                    {{data[indextr].name}}
                </vs-td>
                <vs-td :data="data[indextr].id">
                    <vs-button color="success" size="small">Edit</vs-button>
                    <vs-button color="success" size="small">Delete</vs-button>
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
</template>

<script>
export default {
    computed: {
      accounts(){
        return this.$store.getters['account/accounts'];
      }
    },
    beforeCreate() {
        this.$store.dispatch('account/fetchAccount');
    },
    data() {
        return {
            selected: [],
            'tableList': [
                'vs-th: Component',
                'vs-tr: Component',
                'vs-td: Component',
                'thread: Slot',
                'tbody: Slot',
                'header: Slot'
            ],
            users: [],
        }
    },
}
</script>