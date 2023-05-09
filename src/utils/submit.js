import { SubmissionError } from "redux-form";

async function fetchData(values) {
  const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

  let res = await fetch(`${url}`, {
    method: "POST",
    body: values,
    headers: { "Content-Type": "application/json" },
  });

  if (res.status === 200) {
    window.alert(`You submitted:\n\n${values}`);
  } else {
    let resJson = await res.json();
    let error_message = {};

    for (const [field, message] of Object.entries(resJson)) {
      error_message[field] = message[0];
    }

    throw new SubmissionError(error_message);
  }
}

function checkType(data) {
  const values = {
    name: data.name,
    preparation_time: data.preparation_time,
    type: data.type,
  };
  switch (values.type) {
    case "pizza":
      return {
        ...values,
        diameter: data.diameter,
        no_of_slices: data.no_of_slices,
      };
    case "soup":
      return { ...values, spiciness_scale: data.spiciness_scale };
    case "sandwich":
      return { ...values, slices_of_bread: data.slices_of_bread };
    default:
      return values;
  }
}

export default function submit(values) {
  const data = checkType(values);
  const jsonData = JSON.stringify(data, null, 2);
  return fetchData(jsonData);
}
