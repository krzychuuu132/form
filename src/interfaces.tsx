// FORM INTERFACES

interface FormData {
  name: string;
  surname: string;
  birthDate: string;
  email: string;
  gender: boolean;
}

interface EmailData {
  validation_status: boolean;
  status_message: string;
}

interface EmailResponseData {
  data: EmailData;
}
export { FormData, EmailData, EmailResponseData };
