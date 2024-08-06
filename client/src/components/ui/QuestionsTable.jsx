import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuestionsTable() {
  const [questionData, setQuestionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/question`
        );
        setQuestionData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(questionData);

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
          {questionData.map((question) => (
            <TableRow key={question._id}>
              <TableCell className="font-medium text-center">
                {question.title}
              </TableCell>
              <TableCell className="text-center">{question.type}</TableCell>
              <TableCell className="text-center">{question.year}</TableCell>
              <TableCell className="text-center">
                <Link href={question.link}>click here</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
