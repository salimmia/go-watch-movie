const Select = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <select
        className={props.className}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="">{props.placeHolder}</option>
        {props.options.map((option) => {
          return (
            <option id={option.id} value={option.id}>
              {option.value}
            </option>
          );
        })}
      </select>
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  );
};

export default Select;
