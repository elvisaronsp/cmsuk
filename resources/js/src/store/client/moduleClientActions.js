
import { http,str } from '../../utils'

export default {
    async fetchClient({ commit }) {
        let query = `{
            clientss(
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
            commit('SET_CLIENT', res.data.data.clientss);
        });
    },
    createClient ({ commit },data){
        let mutation = `mutation {
            createClient(company_id:"${data.company_id}", name: "${data.name}",email:"${data.email}",currency_code:"${data.email}")
            {
                id,
                company_id,
                name,
                email,
            }
        }`;

        return http.get( '/graphql?query=' + mutation ).then((res) => {
            if(res.data.data.createClient) {
                commit('PUSH_CLIENT', res.data.data.createClient);
            }
            return res.data;
        });
    }
    
};