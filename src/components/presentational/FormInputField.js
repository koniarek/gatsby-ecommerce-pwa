import React from 'react'
import PropTypes from 'prop-types'

const FormInputField = (props) => {

  const renderTextField = (type, name, value) => (
    <input className="form-control" name={name} type={type} value={value} required="" disabled />
  )

  const renderSelectField = () => (
    <select className="form-control form-control-select" name="id_state" required disabled>
      <option defaultValue="" disabled>--Please Select One--</option>
      <option value="1">Option-1</option>
      <option value="2">Option-2</option>
    </select>
  )

  const renderRadioButton = (type, value) => (
    <div className="col-md-6 form-control-valign">
      <label className="radio-inline">
        <span className="custom-radio">
          <input name="id_gender" type={type} value="1" checked/>
          <span></span>
        </span>
        Mr.
      </label>
      <label className="radio-inline">
        <span className="custom-radio">
          <input name="id_gender" type={type} value="2" />
          <span></span>
        </span>
        Mrs.
      </label>
    </div>
  )


  const renderInputElement = (type, name, value) => {
    switch(type) {
      case "text":
      case "email":
      case "number":
        return renderTextField(type, name, value)
        break;
      case "select":
        return renderSelectField()
        break;
      case "radio":
        return renderRadioButton(type)
        break;
      default:
        return (
          <span></span>
        )
    }
  }

  return (
    <div className="form-group row ">
      <label className="col-md-3 form-control-label required">
        {props.label}
      </label>
      <div className="col-md-6">
        { renderInputElement(props.type, props.name, props.value) }
      </div>
      <div className="col-md-3 form-control-comment">
        {props.optional}
      </div>
    </div>
  )
}

FormInputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optional: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

FormInputField.defaultProps = {
  type: "text",
  label: "HEAD",
}

export default FormInputField