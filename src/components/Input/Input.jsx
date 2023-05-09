import './Input.scss'

export const renderTextField = ({ input, label, meta: { touched, error } }) => (
  <div className='field'>
    <label className='field__label'>{label}</label>
    <div>
      <input className='field__input' {...input} placeholder={label} type="text" />
      {touched && error && <span className='field__error'>{error}</span>}
    </div>
  </div>
)

export const renderTimeField = ({ input, label, meta: { touched, error } }) => (
  <div className='field'>
    <label className='field__label'>{label}</label>
    <div>
      <input className='field__input' {...input} placeholder={label} step={1} type="time" />
      {touched && error && <span className='field__error'>{error}</span>}
    </div>
  </div>
)

export const renderNumberField = ({ input, label, min, step, meta: { touched, error } }) => (
  <div className='field'>
    <label className='field__label'>{label}</label>
    <div>
      <input className='field__input' {...input} placeholder={label} type="number" min={min} step={step}/>
      {touched && error && <span className='field__error'>{error}</span>}
    </div>
  </div>
)

export const renderSelectField = ({ input, label, options, meta: { touched, error } }) => (
  <div className='field'>
    <label className='field__label'>{label}</label>
    <div>
      <select className='field__select' {...input} placeholder={label} type="select">
        <option>[Click to choose]</option>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
      {touched && error && <span className='field__error'>{error}</span>}
    </div>
  </div>
)