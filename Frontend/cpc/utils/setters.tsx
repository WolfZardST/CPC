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

export async function createEvent(content: string, formData: FormData) {
    const body = {
        "descripcion": content,
        "nombre": formData.get('nombre'),
        "lugar": formData.get('lugar'),
        "presencial": parseInt(formData.get('modalidad') as string),
    };
    await createEntity(body, "events");
    redirect('/events');
}

export async function upVote(postId: number) {
    await patchEntity({}, `posts/${postId}/upvote`);
}

export async function downVote(postId: number) {
    await patchEntity({}, `posts/${postId}/downvote`);
}

export async function assist(eventId: number) {
    await patchEntity({}, `events/${eventId}/assist`);
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

async function patchEntity(body: any, subUrl: string) {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${subUrl}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}