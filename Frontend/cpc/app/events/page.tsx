
'use client';

import { getEvents } from "@/utils/getters";
import { Button } from "flowbite-react";
import EventsCollections from "./events-collection";

export default function Events() {

    return (
        <div className="text-black m-5 border-solid border-2 border-gray-300 p-8 bg-white rounded-3xl">
            <div className="border-b-2 border-gray-300 border-solid pb-4 flex flex-row justify-between">
                <h1 className="bold text-3xl">Eventos</h1>
                <Button pill
                    color="blue"
                    as="a"
                    href="/events/new">
                    Nuevo Evento
                </Button>
            </div>
            <EventsCollections eventsFetcher={getEvents} singleMode={false} />
        </div>
    );
}