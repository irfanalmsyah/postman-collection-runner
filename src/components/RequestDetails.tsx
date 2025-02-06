import { Auth, Item } from "@/interfaces/postman";

import CopyButton from "@/components/CopyButton";
import EventAccordion from "@/components/EventAccordion";
import BodyDetail from "@/components/Request/BodyDetail";
import AuthDetail from "@/components/Request/AuthDetail";

interface RequestDetailsProps {
  item: Item;
  parent_auth?: Auth | null;
}

export default function RequestDetails({
  item,
  parent_auth,
}: RequestDetailsProps) {
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

      {request?.auth ? (
        <AuthDetail auth={request.auth} />
      ) : (
        <AuthDetail auth={parent_auth} />
      )}

      {request.body && <BodyDetail body={request.body} />}

      {event?.map((ev, idx) => (
        <EventAccordion key={idx} event={ev} index={idx} />
      ))}
    </div>
  );
}
