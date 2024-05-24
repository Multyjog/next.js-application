import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const UserPhotos = ({ params: { id, photoId } }: Props) => {
  return <div>Photo Page {id} {photoId}</div>;
};

export default UserPhotos;
