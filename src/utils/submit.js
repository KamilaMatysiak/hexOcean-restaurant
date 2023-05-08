import { SubmissionError } from 'redux-form'

async function fetchData(values) {
  const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/"

  let res = await fetch(`${url}`, {
    method: "POST",
    body: values,
    headers: { 'Content-Type': 'application/json' },
  });

  let resJson = await res.json();
  console.log("ResJson", resJson);

  if (res.status === 200) {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  } else {
    console.log(resJson, 'err')
    throw new SubmissionError(...Object.entries(resJson))
    for (const [field, message] of Object.entries(resJson)) {
      throw new SubmissionError(...resJson)
  }
}
}

export default function submit(values) {
  const jsonData = JSON.stringify(values, null, 2)
  return fetchData(jsonData)
}