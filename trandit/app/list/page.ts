import { useEffect } from "react";
import Link from "next/link";

interface ListItemProps {
  result: {
    _id: string;
    title: string;
    content: string;
  }[];
}

export default function ListItem() {
  return <div>hi</div>;
}