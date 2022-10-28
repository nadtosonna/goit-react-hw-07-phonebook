import {useState, useEffect} from "react";

const useFetch = ({fetchData, dependencies, isFetch}) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {        
        const fetchContacts = async () =>  {    
            console.log("fetch contacts"); 
            try {
                setLoading(true);
                const data = await fetchData([...dependencies]);
                setContacts(prevItems => [...prevItems, ...data])
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
          };
          if(isFetch()) {
            return;
          }
          fetchContacts();
    }, [...dependencies]);

    return {contacts, loading, error, setContacts, setLoading, setError};

}

export default useFetch;

useFetch.defaultProps = {
    isFetch: () => {}
}