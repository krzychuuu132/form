import axios from "axios";
import { EmailResponseData } from "interfaces";
import { useEffect, useRef } from "react";

export const useEmailValidation = (value: string, setError: Function, clearErrors: Function, setLoading: Function, isActive: boolean) => {
  const cancelToken = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (cancelToken.current) {
        cancelToken.current.cancel("delete");
      }
      cancelToken.current = axios.CancelToken.source();
      try {
        const response: EmailResponseData = await axios.get(`/api/email-validator.php?email=${value === "" ? "''" : value}`, {
          cancelToken: cancelToken.current.token,
        });
        setLoading(false);
        if (!response.data.validation_status) {
          setError("email", {
            type: "custom",
            message: `email ${response.data.status_message}`,
          });
        } else {
          clearErrors("email");
        }
      } catch (err) {
        if (axios.isCancel(err)) return;
        setError("email", { type: "custom", message: err });
      }
    };

    if (isActive) {
      fetchData();
    }
  }, [value]);
};
