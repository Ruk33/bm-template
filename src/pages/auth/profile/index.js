import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  // const { id, ... } = useParams()
  return (
    <div>
      Page
      <Link to="/home">home</Link>
    </div>
  );
}
