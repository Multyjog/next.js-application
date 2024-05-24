import React from "react";
import UserPhotos from "./photos/[photoId]/page";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
