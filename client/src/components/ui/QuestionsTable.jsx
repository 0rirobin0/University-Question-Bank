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
    <div>
      {/* <div className="TableHeading  w-full px-8 h-[40px]  bg-primary  border-3 flex justify-between px-auto items-center ">
        <div className="w-1/4 h-[40px] flex justify-center items-center px-auto text-background">
          Title
        </div>
        <div className="w-1/4 h-[40px] flex justify-center items-center px-auto text-background">
          Title
        </div>
        <div className="w-1/4 h-[40px] flex justify-center items-center px-auto text-background">
          Title
        </div>
        <div className="w-1/4 h-[40px] flex justify-center items-center px-auto text-background">
          Title
        </div>
      </div> */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="">
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
