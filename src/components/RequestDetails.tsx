import { Item } from "@/interfaces/postman";

import CopyButton from "@/components/CopyButton";
import EventAccordion from "@/components/EventAccordion";
import RequestBody from "@/components/RequestBody";

interface RequestDetailsProps {
  item: Item;
}

export default function RequestDetails({ item }: RequestDetailsProps) {
  const { request, event } = item;
  const url =
    typeof request.url === "string" ? request.url : request.url?.raw || "";

  return (
    <div className="ml-4 space-y-3">
      <div className="relative">
        <pre className="bg-gray-100 p-2 rounded-md text-sm font-mono overflow-x-auto whitespace-pre-wrap">
          {url}
        </pre>
        <CopyButton text={url} />
      </div>

      {request.body && <RequestBody body={request.body} />}

      {event?.map((ev, idx) => (
        <EventAccordion key={idx} event={ev} index={idx} />
      ))}
    </div>
  );
}
