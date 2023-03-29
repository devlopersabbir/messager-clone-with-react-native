import { useState } from "react";
import { axiosFileUpload } from "../utils/axios/axios";

const useFileUpload = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<any>("");
  const [data, setData] = useState<string>("");

  const upload = async (files: any | null, imageType: any) => {
    if (!files) return setError("File not found!");
    const base64Img = `data:image/${imageType};base64,${files}`;
    const formData = new FormData();
    formData.append("file", base64Img);
    formData.append("upload_preset", "ghkb46bq");
    console.log(formData);
    try {
      setSuccess(false);
      setLoading(true);
      const res = await axiosFileUpload.post(
        "https://api.cloudinary.com/v1_1/developer-sabbir/image/upload",
        formData
      );
      return console.log(res);
      //   toast.success("Image uploaded!");
      setData(res.data);
      setSuccess(true);
    } catch (error: any) {
      console.log(error);
      //   toast.error("Image upload fail!");
      if (!error?.response) return setError("Server not responding....");
      setSuccess(false);
      setError(error?.response?.data.message);
    } finally {
      setSuccess(true);
      setLoading(false);
    }
  };
  return {
    loading,
    success,
    data,
    error,
    upload,
  };
};

export default useFileUpload;
