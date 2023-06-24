'use client'

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    const handleAddData = async () => {
        const data = {
            name: 'John snow',
            house: 'Stark'
        }
        const { result, error } = await addData('users', 'user-id', data)

        if (error) {
            return console.log(error)
        }
    }

    return (
        <div>
            <h1>
                Only logged in users can view this page
            </h1>
            <main>
                <h2>Add Data Form</h2>
                <button onClick={handleAddData}>Add Data</button>
            </main>
        </div>);
}

export default Page;