import { SubmissionError } from 'redux-form'

async function fetchData(values) {
  const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/"

  let res = await fetch(`${url}`, {
    method: "POST",
    body: values,
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.status === 200) {
    window.alert(`You submitted:\n\n${values}`);
  } else {
    let resJson = await res.json();
    let error_message = {}

    for (const [field, message] of Object.entries(resJson)) {
      error_message[field] = message[0]
    }
    
    throw new SubmissionError(error_message)
  }
}

export default function submit(values) {
  const jsonData = JSON.stringify(values, null, 2)
  return fetchData(jsonData)
}