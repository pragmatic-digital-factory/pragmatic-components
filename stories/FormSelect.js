import React from "react";
import { storiesOf } from "@storybook/react";
import CountryList from "../src/enum/CountryList";
import FormSelect from "../src/components/Form/FormSelect";

export default storiesOf("FormSelect", module)
  .add("default", () => <FormSelect options={CountryList} />)
  .add("autoComplete", () => (
    <div>
      <FormSelect autoComplete="on" options={CountryList} />
      <button onClick={() => history.go(0)}>Reload the page</button>
    </div>
  ))
  .add("className", () => <FormSelect className="field" options={CountryList} />)
  .add("disabled", () => <FormSelect disabled options={CountryList} />)
  .add("errors", () => <FormSelect errors={["Error on the field"]} options={CountryList} className="error field" />)
  .add("label", () => <FormSelect label="Label" options={CountryList} />)
  .add("name", () => <FormSelect name="nameOfSelect" options={CountryList} />)
  .add("onBlur", () => {
    return (
      <div>
        <FormSelect
          placeholder="common.select"
          onBlur={e => alert("You have left the select field")}
          options={CountryList}
        />
        <FormSelect />
      </div>
    );
  })
  .add("onChange", () => (
    <FormSelect
      options={CountryList}
      onChange={e => {
        alert(`You are selecting the option : ${e.target.value}`);
      }}
    />
  ))
  .add("onFocus", () => (
    <FormSelect
      options={CountryList}
      onFocus={e => {
        alert("You focused the select field");
        e.target.blur();
      }}
    />
  ))
  .add("placeholder", () => <FormSelect placeholder="common.select" />, { info: `placeholder set.` })
  .add("options", `Options set`, () => <FormSelect options={CountryList} />)
  .add("options - with groups", () => (
    <FormSelect
      options={[
        {
          label: "Groupe 1",
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ],
          disabled: false,
        },
        {
          label: "Groupe 2",
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ],
          disabled: false,
        },
      ]}
    />
  ))
  .add("options - with disabled groups", () => (
    <FormSelect
      options={[
        {
          label: "Groupe 1",
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ],
          disabled: false,
        },
        {
          label: "Groupe 2",
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ],
          disabled: true,
        },
      ]}
    />
  ))
  .add("required", () => <FormSelect label="label" required />, { info: `required set.` })
  .add("value", () => (
    <FormSelect
      options={{
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 34",
      }}
      value="option1"
    />
  ));
