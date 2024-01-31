
'use client';

import { Button } from "flowbite-react";
import useSWRInfinite from "swr/infinite";
import { assist } from "@/utils/setters";
import Event from "./event";

interface EventsCollectionProps {
    singleMode: boolean,
    eventsFetcher: ((args: any) => any)
}

export default function EventsCollections({ eventsFetcher, singleMode }: EventsCollectionProps) {

    const getEventsKey = (pageIndex: any, previousPageData: any) => {
        if (pageIndex && !previousPageData.length) {
            return null;
        }
        return [`events-${pageIndex}`, pageIndex.toString()];
    };

    const { data: eventsData, size: eventsSize, setSize: eventsSetSize, mutate: eventsMutate } = useSWRInfinite(getEventsKey, eventsFetcher);
    console.log(eventsData, eventsSize);
    function performAssist(eventId: number) {
        assist(eventId).then(() => {
            eventsMutate(eventsData, false);
            eventsMutate();
        });
    }

    return (
        <>
            <div className="flex flex-col gap-y-4 mt-6">
                {eventsData && eventsData.map((events, index) => {
                    return events.map((event: any) => (
                        <Event event={event} performAssist={performAssist} key={event.id} />
                    ))
                })}
            </div>
            {!(eventsData && eventsData[eventsSize - 1] && eventsData[eventsSize - 1].length === 0) && !singleMode &&
                <div className="flex flex-row justify-center w-full mt-4">
                    <Button pill
                        color="blue"
                        onClick={() => eventsSetSize(eventsSize + 1)}>
                        Cargar más eventos
                    </Button>
                </div>
            }
        </>
    );
}