'use server';
import { z } from "zod"
import { redirect } from "next/navigation";


const formSchema = z.object({
    email: z.string(),
    password: z.string(),
})

export async function loginHandler(formData: FormData) {

    const rawData = formSchema.parse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    const res = await fetch(`${process.env.API_URL!}/login`, {
        method: "POST",
        body: JSON.stringify(rawData),
        headers: {
            "Content-Type": "application/json",
        },
    })
    const result = await res.json()
    if (result.statusCode == 200) redirect('/dashboard')
    console.log(result, "form data");

}