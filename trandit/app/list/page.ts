import { useEffect } from "react";
import Link from "next/link";

interface ListItemProps {
  result: {
    _id: string;
    title: string;
    content: string;
  }[];
}

export default function ListItem({ result }: ListItemProps) {
  return (
    <div>
      {result.map((el: { _id: any; }, idx: any) => {
        return (
          <div className="list-item" const key={idx}>
            <Link prefetch={false} href={`/detail/${el._id}`}>
              <h4>{el.title}</h4>
            </Link>
            <Link href={`/edit/${el._id}`}>수정</Link>
            <p>{el.content}</p>
            <span
              onClick={(e) => {
                fetch("/api/post/delete", { method: "DELETE", body: el._id })
                  .then((r) => r.json())
                  .then(() => {
                    e.target.parentElement.style.opacity = "0";
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
              }}
            >
              삭제
            </span>
          </div>
        );
      })}
    </div>
  );
}