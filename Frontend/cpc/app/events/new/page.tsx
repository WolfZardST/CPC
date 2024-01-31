
'use client';

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { createEvent } from "@/utils/setters";
import { useFormStatus } from "react-dom";
import QuillEditor from "@/app/quill-editor/quill-editor";

export default function NewEvent() {

    const [content, setContent] = useState('');

    const bindedCreateEvent = createEvent.bind(null, content);
    const { pending } = useFormStatus();

    return (
        <div className="text-black m-5 border-solid border-2 border-gray-300 p-8 bg-white rounded-3xl">
            <div className="border-b-2 border-gray-300 border-solid pb-4 flex flex-row gap-4 items-center">
                <Button pill
                    as="a"
                    href="/events"
                    color="light">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Button>
                <h1 className="bold text-3xl">Nuevo Evento</h1>
            </div>
            <form action={bindedCreateEvent} className="flex flex-col gap-4 mt-4">
                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" htmlFor="nombre" value="Nombre" />
                    </div>
                    <TextInput name="nombre" id="nombre" type="text" required />
                </div>
                <fieldset className="flex max-w-md flex-col gap-4">
                    <legend className="mb-4">Modalidad:</legend>
                    <div className="flex items-center gap-2">
                        <Radio id="presencial" name="modalidad" value="1" defaultChecked />
                        <Label htmlFor="presencial">Presencial</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id="virtual" name="modalidad" value="0" />
                        <Label htmlFor="virtual">Virtual</Label>
                    </div>
                </fieldset>
                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" htmlFor="lugar" value="Lugar" />
                    </div>
                    <TextInput name="lugar" id="lugar" type="text" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Descripción" />
                    </div>
                    <QuillEditor allowCodeBlock={false} content={content} setContent={setContent} />
                </div>
                <Button pill
                    isProcessing={pending}
                    disabled={pending}
                    className="w-auto self-end"
                    type="submit"
                    color="blue">
                    {pending ? "Enviando" : "Subir Evento"}
                </Button>
            </form>
        </div>
    );
}