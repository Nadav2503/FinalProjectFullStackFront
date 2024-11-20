import { useState } from "react";


export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});


    return {
        data,
        errors,
    };
}
