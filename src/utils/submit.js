import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!values.name) {
      throw new SubmissionError({
        name: 'Missing name',
      })}

    if (!values.preparation_time) {
      throw new SubmissionError({
        preparation_time: 'Missing preparation time',
      })}

    if (!values.type) {
      throw new SubmissionError({
        type: 'Missing type',
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}