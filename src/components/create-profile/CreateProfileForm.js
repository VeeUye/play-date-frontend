import React, { useState } from "react";
import postProfile from "../../requests/postProfile";
import FormInput from "../atoms/form-input/FormInput";
import Button from "../atoms/button/Button";
import formStyles from "./create-profile-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";

const CreateProfileForm = () => {
  const initialState = {
    fields: {
      name: "",
      childName: "",
      location: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleCreateEvent = (event) => {
    event.preventDefault();
    postProfile(fields);
    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleCreateEvent}>
        <div className={formStyles.field1}>
          <div>
            <FormInput
              className={inputStyles.input}
              label="Your Name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Child's Name"
              type="text"
              name="childName"
              value={fields.childName}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Location"
              type="text"
              name="location"
              value={fields.location}
              onChange={handleFieldChange}
            />

            <Button
              className={buttonStyles.createEvent}
              type="submit"
              label="Create Profile"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProfileForm;
