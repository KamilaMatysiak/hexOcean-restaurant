import React from 'react'
import { Field, reduxForm } from 'redux-form'
import submit from '../../utils/submit'
import { renderTextField, renderTimeField, renderNumberField, renderSelectField } from '../Input/Input'
import { dishesTypes } from '../../assets/data'

const Form = props => {
  const { error, handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="name"
        component={renderTextField}
        label="Name"
      />
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
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation'
})(Form)