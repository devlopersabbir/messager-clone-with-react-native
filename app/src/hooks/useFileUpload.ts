import { useState } from "react";
import { Axios, ImageAxios } from "../utils/axios/axios";

const useFileUpload = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<any>("");
  const [data, setData] = useState<string>("");

  const upload = async (files: FileList | null) => {
    if (!files) return setError("File not found!");
    console.log(files);
    try {
      setSuccess(false);
      setLoading(true);
      // const formDate = new FormData();
      // formDate.append("file", files[0]);
      // formDate.append("upload_preset", "upload_preset");
      const res = await ImageAxios.post(
        "https://api.cloudinary.com/v1_1/developer-sabbir/image/upload",
        { files }
      );
      console.log(res);
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
