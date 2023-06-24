import getData from '@/firebase/firestore/getData'

export default async function Products() {
    const data = await getData("users", "user-id")
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {JSON.stringify(data, null, 2)}
        </main>
    )
}