import { required } from "vuelidate/lib/validators";

export const FormValidation = {
  validations: {
    invoiceForm: {
      adress: {
        required,
      },
      city: {
        required,
      },
      postCode: {
        required,
      },
      country: {
        required,
      },
      clientName: {
        required,
      },
      clientEmail: {
        required,
      },
      clientAdress: {
        required,
      },
      clientCity: {
        required,
      },
      clientPostCode: {
        required,
      },
      clientCountry: {
        required,
      },
      projectDesc: {
        required,
      },
      projects: {
        required,
      },
    },
  },
};
