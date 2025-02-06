import { Auth } from "@/interfaces/postman";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";

interface AuthProps {
  auth?: Auth | null;
}

export default function AuthDetail({ auth }: AuthProps) {
  const authDetails = auth?.type ? auth[auth.type] : null;

  return (
    <div>
      <div className="flex items-baseline space-x-1">
        <span className="font-bold">Authorization</span>
        <span className="text-gray-400">{auth?.type || "None"}</span>
      </div>

      <Divider />

      {Array.isArray(authDetails) && authDetails.length > 0 && (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Key</strong>
                </TableCell>
                <TableCell>
                  <strong>Value</strong>
                </TableCell>
                <TableCell>
                  <strong>Type</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {authDetails.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.key}</TableCell>
                  <TableCell>{item.value}</TableCell>
                  <TableCell>{item.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
