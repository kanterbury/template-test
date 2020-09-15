import React, { useState } from "react";
import ReactDOM from "react-dom";

interface CommentObject {
  id: number;
  comment: string;
}

interface CommentListObject {
  comments: CommentObject[];
  hasError: boolean;
  isLoading: boolean;
}

const CommentList: React.FC = () => {
  const [commentsValue, setCommentsValue] = useState<CommentObject[]>([
    {
      id: 1,
      comment: "comment 1",
    },
    {
      id: 2,
      comment: "comment 2",
    },
    {
      id: 3,
      comment: "comment 3",
    },
    {
      id: 4,
      comment: "comment 4",
    },
  ]);
  const [hasErrorValue, setHasErrorValue] = useState<boolean>(false);
  const [isLoadingValue, setIsLoadingValue] = useState<boolean>(false);
  if (hasErrorValue) {
    return <p>error</p>;
  }
  if (isLoadingValue) {
    return <p>loading . . . </p>;
  }
  return (
    <ul>
      {commentsValue.map((item) => (
        <li key={item.id}>{item.comment}</li>
      ))}
    </ul>
  );
};

export default CommentList;
