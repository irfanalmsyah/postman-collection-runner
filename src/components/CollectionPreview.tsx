import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { CollectionItem, isItemGroup } from "@/interfaces/postman";
import RequestDetails from "@/components/RequestDetails";
import FolderIcon from "@mui/icons-material/Folder";
import { Chip } from "@mui/material";

interface CollectionPreviewProps {
  items: CollectionItem[];
}

export default function CollectionPreview({ items }: CollectionPreviewProps) {
  return (
    <Box>
      {items.map((item, index) => (
        <Accordion key={index} disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
          >
            {isItemGroup(item) ? (
              <div className="flex items-center space-x-2">
                <FolderIcon />
                <Typography variant="subtitle1">{item.name}</Typography>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Chip
                  label={item.request.method}
                  color={
                    item.request.method === "GET"
                      ? "success"
                      : item.request.method === "POST"
                      ? "warning"
                      : item.request.method === "PUT"
                      ? "primary"
                      : "error"
                  }
                  autoCapitalize="on"
                  className="w-20 text-left font-semibold"
                />
                <span className="font-medium text-base">{item.name}</span>

                <span className="font-mono text-sm text-gray-500 truncate max-w-[200px]">
                  {typeof item.request.url === "object" &&
                  Array.isArray(item.request.url.path)
                    ? `/${item.request.url.path.join("/")}`
                    : typeof item.request.url === "string"
                    ? item.request.url
                    : ""}
                </span>
              </div>
            )}
          </AccordionSummary>
          <AccordionDetails>
            {isItemGroup(item) ? (
              <CollectionPreview items={item.item} />
            ) : (
              <RequestDetails item={item} />
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
