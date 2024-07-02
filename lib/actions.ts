"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export type State = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    loading?: boolean;
};

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
        .string()
        .min(6, { message: "Password minimum 6 characters required" }),
});

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn("credentials", formData);
    } catch (error) {

        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}

export async function loginHandler(prevState: State, formData: FormData) {
    const rawData = formSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!rawData.success) {
        return {
            errors: rawData.error.flatten().fieldErrors,
        };
    }

    try {
        const res = await fetch(`${process.env.API_URL!}/login`, {
            method: "POST",
            body: JSON.stringify(rawData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await res.json();
        console.log(result, "res");
    } catch (error: any) {
        console.log(error, "form data");
        return { message: error.message };
    }

    redirect("/dashboard");
}
