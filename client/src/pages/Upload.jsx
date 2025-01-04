import React from "react";
import FileUpload from "../components/FileUpload";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Upload = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <h1 className="font-Bradley font-bold text-center text-3xl underline underline-offset-8 text-purple-700 my-8">
        You can upload your Documents here!!
      </h1>
      <FileUpload />
      <Footer />
    </div>
  );
};

export default Upload;
