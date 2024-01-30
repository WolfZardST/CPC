
'use client';

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { getGroups } from "@/utils/getters";
import useSWR from "swr";
import { createPost } from "@/utils/setters";
import { useFormStatus } from "react-dom";
import QuillEditor from "../quill-editor/quill-editor";

export default function NewPost() {

    const [content, setContent] = useState('');
    const { data } = useSWR("placeholder", getGroups);

    const bindedCreatePost = createPost.bind(null, content);
    const { pending } = useFormStatus();

    return (
        <div className="text-black m-5 border-solid border-2 border-gray-300 p-8 bg-white">
            <div className="border-b-2 border-gray-300 border-solid pb-4 flex flex-row gap-4 items-center">
                <Button pill
                    as="a"
                    href="/posts"
                    color="light">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Button>
                <h1 className="bold text-3xl">Nueva Publicación</h1>
            </div>
            <form action={bindedCreatePost} className="flex flex-col gap-4 mt-4">
                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" htmlFor="titulo" value="Título" />
                    </div>
                    <TextInput name="titulo" id="titulo" type="text" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" htmlFor="grupo" value="Grupo" />
                    </div>
                    <Select name="grupo" id="grupo" required>
                        {data && data.map((group: any) => (
                            <option key={group.id} value={group.id}>{group.nombre}</option>
                        ))}
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Contenido" />
                    </div>
                    <QuillEditor content={content} setContent={setContent} />
                </div>
                <Button pill
                    isProcessing={pending}
                    disabled={pending}
                    className="w-auto self-end"
                    type="submit"
                    color="blue">
                    {pending ? "Enviando" : "Enviar Publicación"}
                </Button>
            </form>
        </div>
    );
}