import React from "react";
import formbackgroundimage from "../assets/Container.png";
import { useFormik } from "formik";
import * as yup from "yup";

const DematAccountForm = () => {
  const initialValues = {
    name: "",
    dematEmail: "",
    phoneNumber: "",
  };

  const DematAccoutObjectSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your name"),
    dematEmail: yup
      .string()
      .email("Invalid email")
      .required("Email Id is required"),
    phoneNumber: yup
      .number()
      .typeError("Please enter a valid number")
      .integer("Please enter a valid number")
      .min(1111111111, "Please enter 10 digit valid number")
      .max(9999999999, "Please enter 10 digit valid number")
      .required("Please enter the Phone Number"),
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: DematAccoutObjectSchema,
    onSubmit: async (values) => {
      const payload = {
        Email: values.name,
        Password: values.dematEmail,
        FullName: values.phoneNumber,
      };

      console.log("payload", payload);

      try {
        let response = await axios.post(
          `${promoterEndpoint.REGISTER_PROMOTER_URL}`,
          payload
        );
      } catch (error) {
        if (error.response) {
          const { status, data } = error.response;

          if (
            status === 404 ||
            status === 403 ||
            status === 500 ||
            status === 302 ||
            status === 409 ||
            status === 401 ||
            status === 400
          ) {
            console.log(error.response);
            // toast.error(data.message);
          }
        }
      }
    },
  });

  return (
    <div className="w-full h-auto  md:h-[750px]  md:mb-14 sm:mb-0 mobile:mb-0">
      <div className="w-full  md:flex md:flex-row  sm:flex sm:flex-col  h-[100%]">
        {/* Left Side */}
        <div className="md:w-[50%] mobile:w-[100%] sm:w-full md:h-full sm:h-[40%] mobile-h-[50%] bg-purple ">
          <div className="flex flex-col h-full md:w-[80%] sm:w-[94%] mobile-[94%]  mobile:mx-auto justify-center ">
            <h1 className="md:text-5xl mobile:mt-6 sm:mt-6 md:mt-0 overflow-y-hidden mobile:text-3xl sm:text-3xl md:w-full mobile:w-[94%] sm:w-[94%] mobile:mx-auto sm:mx-auto">
              Lorem ipsum dolor sit amet consectetur.r
            </h1>

            <p className="mt-5  mobile:mb-6 sm:mb-6 md:mb-0 sm:text-base mobile:text-base md:text-2xl md:w-[100%] mobile:w-[94%] sm:w-[94%] mobile:mx-auto sm:mx-auto">
              Lorem ipsum dolor sit amet consectetur. Enim nisl venenatis
              gravida scelerisque posuere bibendum nunc at.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="md:w-[50%] mobile:w-[100%] sm:w-full md:h-full sm:h-[50%]  bg-cover "
          style={{ backgroundImage: `url(${formbackgroundimage})` }}
        >
          <div className="w-full h-full mobile:py-6 sm:py-6 md:py-0 flex justify-center items-center">
            <div className=" mobile:w-[90%]  sm:w-[90%] md:w-[70%] md:m-auto  sm:h-[80%]  md:h-auto flex my-auto bg-white rounded-lg shadow ">
              <div className="w-full px-8 py-8">
                <form method="post">
                  <h1 className="mobile:text-base sm:text-base md:text-4xl overflow-y-hidden font-medium">
                    Open your FREE Demat Account
                  </h1>

                  <div className="mb-4 mt-4">
                    <input
                      className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Name"
                    />
                    {errors.name && touched.name ? (
                      <p className="font-Marcellus text-start text-red-900">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="mb-3 mt-4">
                    <input
                      className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                      type="email"
                      id="dematEmail"
                      name="dematEmail"
                      value={values.dematEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email address "
                    />
                    {errors.dematEmail && touched.dematEmail ? (
                      <p className="font-Marcellus text-start text-red-900">
                        {errors.dematEmail}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex w-full">
                    <select
                      id="states"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[20%] h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="MI">+91</option>
                    </select>
                    <input
                      className="text-sm bg-gray-200 appearance-none  border-gray-300 w-[90%] py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone number"
                    />
                   
                  </div>
                   {errors.phoneNumber && touched.phoneNumber ? (
                      <p className="font-Marcellus text-start text-red-900">
                        {errors.phoneNumber}
                      </p>
                    ) : null}

                  <div className="flex w-full mt-8">
                    <button
                      className="w-full bg-purple hover:bg-gray-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DematAccountForm;
