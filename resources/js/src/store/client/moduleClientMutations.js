export default {
    PUSH_CLIENT(state, clients){
        state.clients.unshift(clients);
    },
    SET_CLIENT(state, clients) {
        state.clients = clients;
    },  
}
