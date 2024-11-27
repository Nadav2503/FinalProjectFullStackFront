import { useState } from "react";


const useUpdateEndangeredStatus = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    return { loading, error };
};

export default useUpdateEndangeredStatus;
