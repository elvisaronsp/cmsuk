export default {
    PUSH_ACCOUNT(state, accounts){
        state.accounts.unshift(accounts);
    },
    SET_ACCOUNT(state, accounts) {
        state.accounts = accounts;
    },  
}
