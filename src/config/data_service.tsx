
const base_url = import.meta.env.BASE_URL;

export class DataService {


    get = async (category: string, authorization?: string) => {

        try {
            

            await fetch(`${base_url}${category}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': authorization || ''
                }
            })
            .then((response) => 
                console.log('Response: ' , response));
        } catch (error) {
            console.log("Error: ", error);
            
        }

       
       

        // put = async () => {}
        





    }

    






}