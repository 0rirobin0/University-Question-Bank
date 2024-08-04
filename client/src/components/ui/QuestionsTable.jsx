import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function QuestionsTable() {
  const rows = Array.from({ length: 1000 }, (_, i) => (
    <TableRow key={i}>
      <TableCell className="font-medium text-center">DataStructute</TableCell>
      <TableCell className="text-center">Semester</TableCell>
      <TableCell className="text-center">2023</TableCell>
      <TableCell className="text-center text-sky">Click Here</TableCell>
    </TableRow>
  ));

  return (
    <div className="overflow-y-auto max-h-[75vh]">
      <Table>
        <TableCaption>No more Questions</TableCaption>
        <TableHeader className="sticky top-0 bg-white z-10">
          <TableRow>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Year</TableHead>
            <TableHead className="text-center">Link</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* <TableRow> */}
          {/* <TableCell className="font-medium text-center ">INV001</TableCell>
            <TableCell className="text-center">Paid</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">$250.00</TableCell> */}

          {rows}
          {/* </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
}
