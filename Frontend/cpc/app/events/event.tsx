import { Button } from "flowbite-react";
import { FaBuilding, FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { GiVideoConference } from "react-icons/gi";
import { IoVideocam } from "react-icons/io5";

interface EventProps {
    event: any,
    performAssist: (eventId: number) => void
}

export default function Event({ event, performAssist }: EventProps) {



    return (
        <div
            className="flex gap-4 mb-4"
            key={event.id}>
            <div className="flex flex-col gap-5 w-full">
                <div className="rounded-lg p-6 bg-gray-200 flex flex-col gap-3 w-full">
                    <h1 className="font-bold text-lg">{event.nombre}</h1>
                    <div className="event-content" dangerouslySetInnerHTML={{ __html: event.descripcion }} />
                    <div className="flex flex-row gap-4 mt-2">
                        <div className="rounded-full px-4 bg-white flex gap-3 items-center">
                            {event.presencial == 0 ? <IoVideocam color="#1E429F" /> : <FaBuilding color="#1E429F" />}
                            <p>{event.presencial == 0 ? "Virtual" : "Presencial"}</p>
                        </div>
                        <div className="rounded-full px-4 bg-white flex gap-3 items-center">
                            {event.presencial == 0 ? <GiVideoConference color="#1E429F" /> : <FaLocationDot color="#1E429F" />}
                            <p>{event.lugar}</p>
                        </div>
                        <div className="rounded-full px-4 bg-white flex gap-3 items-center">
                            <FaPeopleGroup color="#1E429F" />
                            <p>Asistentes: {event.asistentes}</p>
                        </div>
                        <Button pill size="sm" color="blue"
                            onClick={() => performAssist(event.id)}>
                            Asistiré
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}