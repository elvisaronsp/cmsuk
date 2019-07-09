
import { http,str } from '../../utils'

export default {
    async fetchAccount({ commit }) {
        let query = `{
            accounts(
                orderBy: [
                    {
                        field: "id"
                        order: DESC
                    }
                ]
            ) 
            {
                id,
                name,
                email
            }
        }`;
        return http.get( '/graphql?query=' + str.stripLines(query) ).then(function (res) {
            commit('SET_ACCOUNT', res.data.data.accounts);
        });
    },
    createAccount ({ commit },data){
        let mutation = `mutation {
            createAccount(name: "${data.name}",email:"${data.email}")
            {
                id,
                name,
                email,
            }
        }`;

        return http.get( '/graphql?query=' + mutation ).then((res) => {
            if(res.data.data.createAccount) {
                commit('PUSH_ACCOUNT', res.data.data.createAccount);
            }
            return res.data;
        });
    }
    
};