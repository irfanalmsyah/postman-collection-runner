import { Body, FileDataParam } from "@/interfaces/postman";
import { Divider } from "@mui/material";

interface RequestBodyProps {
  body: Body;
}

export default function BodyDetail({ body }: RequestBodyProps) {
  const formatBodyContent = () => {
    if (body.mode === "raw") {
      return body.raw;
    }

    if (body.mode === "urlencoded") {
      return body.urlencoded
        ?.map((param) => `${param.key}=${param.value}`)
        .join("\n");
    }

    if (body.mode === "formdata") {
      return body.formdata
        ?.map((param) =>
          param.type === "text"
            ? `${param.key}=${param.value}`
            : param.type === "file"
            ? `${param.key}=${(param as FileDataParam).src}`
            : ""
        )
        .join("\n");
    }

    return "";
  };

  return (
    <div>
      <div className="flex items-baseline space-x-1">
        <span className="font-bold">Body</span>
        <span className="text-gray-400">{body.mode}</span>
      </div>
      <Divider />

      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-1 overflow-x-auto whitespace-pre-wrap">
        {formatBodyContent()}
      </pre>
    </div>
  );
}
