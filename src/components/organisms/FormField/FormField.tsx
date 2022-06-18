import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledCheckboxWrapper, StyledForm, StyledLoaderWrapper } from "./FormField.styles";
import axios from "axios";

import Button from "components/atoms/Button/Button";
import ErrorMessage from "components/atoms/ErrorMessage/ErrorMessage";
import { StyledInput, StyledLabel } from "components/atoms/Input/Input.styles";
import { EmailResponseData, FormData } from "interfaces";
import Loader from "components/atoms/Loader/Loader";

const errorMessages = {
  name: "name > 3 characters",
  surname: "surname > 3 characters",
};

const FormField = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const handleChangeEmail = async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
    const { value } = e.currentTarget;
    try {
      setLoading(true);
      const response: EmailResponseData = await axios.get(`/api/email-validator.php?email=${value === "" ? "''" : value}`);
      if (!response.data.validation_status) {
        await setError("email", { type: "custom", message: `email ${response.data.status_message}` });
      } else {
        clearErrors("email");
      }
    } catch (err) {
      setError("email", { type: "custom", message: err });
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (data: FormData): void => {
    if (isValid) {
      const parseToJSON: string = JSON.stringify(data);
      alert(parseToJSON);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <StyledLabel>Name</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Type name"
        {...register("name", { required: { value: true, message: errorMessages.name }, minLength: { value: 4, message: errorMessages.name } })}
      />
      {errors.name ? <ErrorMessage message={errors.name.message} /> : null}
      <StyledLabel>Surname</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Type surname"
        {...register("surname", {
          required: { value: true, message: errorMessages.surname },
          minLength: { value: 4, message: errorMessages.surname },
        })}
      />
      {errors.surname ? <ErrorMessage message={errors.surname.message} /> : null}
      <StyledLabel>Birth Date</StyledLabel>
      <StyledInput type="date" placeholder="Type birth date" {...register("birthDate", { required: false })} />
      <StyledLabel>Email</StyledLabel>
      <StyledInput type="email" placeholder="Type email" {...register("email", { required: true, onChange: handleChangeEmail })} />
      {errors.email ? <ErrorMessage message={errors.email.message} /> : null}
      <StyledCheckboxWrapper>
        <StyledInput type="checkbox" {...register("gender", { required: false })} id="gender" />
        <StyledLabel htmlFor="gender">Gender</StyledLabel>
      </StyledCheckboxWrapper>
      <StyledLoaderWrapper>
        <Button type="submit" className={!isValid || loading ? "disabled" : ""} title="submit" disabled={!isValid || loading} />
        {loading ? <Loader /> : null}
      </StyledLoaderWrapper>
    </StyledForm>
  );
};

export default FormField;
