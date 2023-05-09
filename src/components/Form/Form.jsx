import React from "react";
import {
  Field,
  formValueSelector,
  reduxForm,
  reset,
  untouch,
} from "redux-form";
import { connect } from "react-redux";
import submit from "../../utils/submit";
import {
  renderTextField,
  renderTimeField,
  renderNumberField,
  renderSelectField,
} from "../Input/Input";
import { dishesTypes, spicinessScale } from "../../assets/data";
import "./Form.scss";
import Button from "../Button/Button";

let Form = (props) => {
  const { error, handleSubmit, typeValue } = props;

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form__title">Add a dish</h2>
      <Field name="name" component={renderTextField} label="Name" />
      <Field
        name="preparation_time"
        component={renderTimeField}
        label="Preparation time"
      />
      <Field
        name="type"
        component={renderSelectField}
        label="Type"
        options={dishesTypes}
      />

      {typeValue == "pizza" && (
        <>
          <Field
            name="diameter"
            component={renderNumberField}
            label="Diameter"
            step={0.01}
            min={1}
          />

          <Field
            name="no_of_slices"
            component={renderNumberField}
            label="Number of slices"
            step={1}
            min={1}
          />
        </>
      )}

      {typeValue == "soup" && (
        <Field
          name="spiciness_scale"
          component={renderSelectField}
          label="Spiciness scale"
          options={spicinessScale}
        />
      )}

      {typeValue == "sandwich" && (
        <Field
          name="slices_of_bread"
          component={renderNumberField}
          label="Slices of bread"
          step={1}
          min={1}
        />
      )}
      {error && <strong>{error}</strong>}

      <Button buttonText="Submit" />
    </form>
  );
};

const selector = formValueSelector("submitValidation");
const clearForm = (result, dispatch) => dispatch(reset("submitValidation"));

Form = connect((state) => {
  const nameValue = selector(state, "name");
  const preparationTimeValue = selector(state, "preparation_time");
  const typeValue = selector(state, "type");
  const diameterValue = selector(state, "diameter");
  const spicinessScaleValue = selector(state, "spiciness_scale");
  const noSlicesValue = selector(state, "no_of_slices");
  const breadSlicesValue = selector(state, "slices_of_bread");

  return {
    nameValue,
    preparationTimeValue,
    typeValue,
    diameterValue,
    breadSlicesValue,
    spicinessScaleValue,
    noSlicesValue,
  };
})(Form);

export default reduxForm({
  form: "submitValidation",
  onSubmitSuccess: clearForm,
})(Form);
