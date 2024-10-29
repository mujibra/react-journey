import CommonInput from "./CommonInput";

const elementType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

// eslint-disable-next-line react/prop-types
export default function CommonForm({
  // eslint-disable-next-line react/prop-types
  formControls = [],
  // eslint-disable-next-line react/prop-types
  buttonText,
  // eslint-disable-next-line react/prop-types
  formData,
  // eslint-disable-next-line react/prop-types
  setFormData,
  // eslint-disable-next-line react/prop-types
  onSubmit,
}) {
  function renderFormElements(data, formData) {
    let element = null;

    switch (data.componentType) {
      case elementType.INPUT:
        element = (
          <CommonInput
            type={data.type}
            placeholder={data.placeholder}
            value={formData[data.name]}
            name={data.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                [data.name]: e.target.value,
                // [data.email]: e.target.value,
                // [data.password]: e.target.value,
              })
            }
          />
        );
        break;
      // case elementType.SELECT:
      //     break;
      // case elementType.TEXTAREA:
      //     break;

      default:
        element = (
          <CommonInput
            type={data.type}
            placeholder={data.placeholder}
            value={formData[data.name]}
            name={data.name}
            onChange={data.onChange}
          />
        );
        break;
    }

    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      {formControls.map((form) => renderFormElements(form, formData))}
      <button className="my-3" type="submit">
        {buttonText || "Submit"}
      </button>
    </form>
  );
}
