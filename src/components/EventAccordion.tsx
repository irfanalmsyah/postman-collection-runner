import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Event } from "@/interfaces/postman";

interface EventAccordionProps {
  event: Event;
  index: number;
}

export default function EventAccordion({ event, index }: EventAccordionProps) {
  const eventType = event.listen === "test" ? "Tests" : "Pre-request Script";
  const scriptContent =
    typeof event.script.exec === "string"
      ? event.script.exec
      : Array.isArray(event.script.exec)
      ? event.script.exec.join("\n")
      : "";

  return (
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${index}-content`}
        id={`panel-${index}-header`}
      >
        <div className="flex items-center space-x-2">
          <span className="font-medium text-base">{eventType}</span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <pre className="bg-gray-100 p-2 rounded-md text-xs mt-1 overflow-x-auto whitespace-pre-wrap">
          {scriptContent}
        </pre>
      </AccordionDetails>
    </Accordion>
  );
}
