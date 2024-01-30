'use server'

import { redirect } from "next/navigation";

export async function createPost(content: string, formData: FormData) {
    const body = {
        "contenido": content,
        "titulo": formData.get('titulo'),
        "group_id": parseInt(formData.get('grupo') as string || '0'),
    };
    await createEntity(body, "posts");
    redirect('/posts');
}

export async function createComment(content: string, postId: number) {
    const body = {
        "contenido": content,
        "post_id": postId,
    };
    await createEntity(body, "comments");
}

async function createEntity(body: any, subUrl: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${subUrl}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}