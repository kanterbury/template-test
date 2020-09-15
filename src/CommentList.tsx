import React, { useState } from "react";
import ReactDOM from "react-dom";

interface CommentObject {
  id: number;
  comment: string;
}

const CommentList: React.FC = () => {
  const [commentsValue, setCommentsValue] = useState<CommentObject[]>([]);
  const [hasErrorValue, setHasErrorValue] = useState<boolean>(false);
  const [isLoadingValue, setIsLoadingValue] = useState<boolean>(false);
  const fetchData = (url: string) => {
    setIsLoadingValue(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        setIsLoadingValue(false);
        return response;
      })
      .then((response) => response.json())
      .then((comments: CommentObject[]) => setCommentsValue(comments))
      .catch(() => setHasErrorValue(true));
  };
  const componentDidMount = () => {
    fetchData("https://594ecc215fbb1a00117871a4.mockapi.io/comments");
  };
  if (hasErrorValue) {
    return <p>error</p>;
  }
  if (isLoadingValue) {
    return <p>loading . . . </p>;
  }
  return (
    <div>
      <ul>
        {commentsValue.map((item) => (
          <li key={item.id}>{item.comment}</li>
        ))}
      </ul>
      <button onClick={() => componentDidMount()}>fetch</button>
    </div>
  );
};

export default CommentList;
