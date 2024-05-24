import React from "react";
import UserPhotos from "./photos/[photoId]/page";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
