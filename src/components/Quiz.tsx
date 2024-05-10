import {useEffect, useState} from "react";
// import superagent from "superagent";

export default function Quiz() {
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);



    useEffect(() => {
        if (isLoading) return;
        setIsLoading(true);
        setError(false);
        setQuestions([]);
/*
        superagent.get("http://localhost:3000/api/questions")
            .set('accept', 'json')
            .catch((err: any) => setError(true))
            .then((res) => {
                console.log(res)
                setQuestions(res.body);
            })

 */
    })


    return (
        <>
            <h1>{error}</h1>
            <pre style={{whiteSpace: 'wrap', fontSize: 16}}>{JSON.stringify(questions)}</pre>
        </>
    )
}