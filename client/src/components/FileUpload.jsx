// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useAuth0, User } from "@auth0/auth0-react";

// const FileUpload = () => {
//   const { user } = useAuth0();
//   const [file, setFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       // const authId = user._id;
//       const response = await axios.post(
//         "http://127.0.0.1:5000/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             // auth_id: authId,
//           },
//           onUploadProgress: (progressEvent) => {
//             const percentCompleted = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             setUploadProgress(percentCompleted);
//           },
//         }
//       );

//       toast.success("File uploaded and processed successfully!");
//       setFile(null);
//       setUploadProgress(0);
//     } catch (error) {
//       toast.error("Error uploading file. Please try again.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 mx-24">
//       <h2 className="text-2xl font-bold mb-4">Upload Document</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="file"
//           >
//             Select PDF, PNG, JPG, JPEG File
//           </label>
//           <input
//             type="file"
//             id="file"
//             onChange={handleFileChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             accept=".pdf,.jpg,.jpeg,.png"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             disabled={!file}
//           >
//             Upload
//           </button>
//         </div>
//       </form>
//       {uploadProgress > 0 && uploadProgress < 100 && (
//         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
//           <div
//             className="bg-purple-600 h-2.5 rounded-full"
//             style={{ width: `${uploadProgress}%` }}
//           ></div>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

const FileUpload = () => {
  const { user, isAuthenticated } = useAuth0();
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !isAuthenticated || !user) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", user.sub); // Auth0 stores the user ID in the 'sub' field

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress(percentCompleted);
            }
          },
        }
      );

      toast.success("File uploaded and processed successfully!");
      setFile(null);
      setUploadProgress(0);
    } catch (error) {
      toast.error("Error uploading file. Please try again.");
      console.error("Error:", error);
    }
  };

  if (!isAuthenticated) {
    return <div>Please log in to upload files.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 mx-24">
      <h2 className="text-2xl font-bold mb-4">Upload Document</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            Select PDF, PNG, JPG, JPEG File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={!file}
          >
            Upload
          </button>
        </div>
      </form>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
          <div
            className="bg-purple-600 h-2.5 rounded-full"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default FileUpload;
