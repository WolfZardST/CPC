
'use client';

import { getPostsById } from "@/utils/getters";
import { Button } from "flowbite-react";
import PostsCollection from "./posts-collection";

export default function Posts() {

    return (
        <div className="text-black m-5 border-solid border-2 border-gray-300 p-8 bg-white">
            <div className="border-b-2 border-gray-300 border-solid pb-4 flex flex-row justify-between">
                <h1 className="bold text-3xl">Publicaciones</h1>
                <Button pill
                    color="blue"
                    as="a"
                    href="/posts/new">
                    Nueva Publicación
                </Button>
            </div>
            <PostsCollection fetcher={getPostsById} />
        </div>
    );
}