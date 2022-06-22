import axios from "axios";
import { EmailResponseData } from "interfaces";
import { useEffect } from "react";

export const useEmailValidation = (value: string, duration: number = 500, setError: Function, clearErrors: Function, setLoading: Function) => {
  useEffect(() => {
    let handler;
    if (value !== "initalvalue") {
      handler = setTimeout(async () => {
        try {
          const response: EmailResponseData = await axios.get(`/api/email-validator.php?email=${value === "" ? "''" : value}`);
          if (!response.data.validation_status) {
            await setError("email", {
              type: "custom",
              message: `email ${response.data.status_message}`,
            });
          } else {
            clearErrors("email");
          }
        } catch (err) {
          setError("email", { type: "custom", message: err });
        } finally {
          setLoading(false);
        }
      }, 500);
    }

    return () => {
      clearTimeout(handler);
    };
  }, [value, duration, setError, clearErrors, setLoading]);
};
