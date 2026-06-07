'use server';
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createNote(formData) {
    const supabase = await createClient();

    const { data: {user} } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    const title = String(formData.get("title" || "").trim());
    const content = String(formData.get("content" || "").trim());

    if (!title) {
        throw new Error("Title is required");
    }

    const { error } = await supabase.from("notes").insert([{
        title,
        content,
        user_id: user.id,
    }]);

    if (error) {
        throw error
    }

    revalidatePath("/dashboard");
}