import React from "react";
import * as yup from "yup";

export interface FormErrors {
  path: string;
  errors: string[];
}

const withFormErrorsHandler = (Component: React.ComponentType<any>) => ({
  isValidationSync = false,
  initialValues = {},
  schema
}: {
  isValidationSync?: boolean;
  initialValues?: Object;
  schema?: yup.ObjectSchema;
}) => class WithFormErrorsHandler extends React.Component<any, any> {
  state = {
    errors: [],
    fields: {},
    valid: false
  };

  componentDidMount() {
    if (isValidationSync && Object.keys(initialValues).length === 0) {
      throw "Sync Validation requires initial values, use setInitialValues props";
    } else {
      this.setState({ fields: { ...initialValues } });
    }
  }

  /*
      ALERT! onSubmit MUST be async
      And it has to be inside a async funtion when used as prop inside wrapped component
      if not, validation will not work properly
      e.g
      const handleSubmit = async () => {
        const isValid = await onSubmit(fields, schema);
      };

    */
  private async onSubmit(params: Object) {
    if (schema) {
      const data = JSON.stringify(params, null, 2);

      return await schema
        .validate(data, { abortEarly: false })
        .then((valid) => {
          this.setFormErrors({
            errors: []
          });
          return valid;
        })
        .catch((err) => {
          console.log(err, "return err");
          this.setFormErrors(
            err.inner.map((e) => ({
              path: e.path,
              errors: e.errors
            }))
          );
          return false;
        });
    }
    return true;
  }

  private setFormErrors(errors) {
    this.setState({ errors });
  }

  private handleValidationSync = async (field: string, params: Object) => await schema
    .validateAt(field, params)
    .then(() => {
      const data = JSON.stringify(params, null, 2);
      const valid = schema.isValidSync(data);
      this.setState({ valid });
      this.setFormErrors({
        errors: []
      });
    })
    .catch((err) => {
      console.log(err);
      const data = JSON.stringify(params, null, 2);
      const valid = schema.isValidSync(data);

      this.setState({ valid });
      this.setFormErrors([
        {
          path: field,
          errors: err.errors
        }
      ]);
      return false;
    });

  private setChangeOnState(
    field: string,
    value: string,
    noValidate: boolean = false
  ) {
    this.setState(
      { fields: { ...this.state.fields, [field]: value } },
      () => {
        if (isValidationSync && !noValidate) {
          this.handleValidationSync(field, this.state.fields);
        }
      }
    );
  }

  private handleInputChange = ({
    field,
    value,
    noValidate = false
  }: {
    field: string;
    value: string;
    noValidate: boolean;
  }) => {
    this.setChangeOnState(field, value, noValidate);
  };

  private clearField = (field: string) => {
    setTimeout(() => this.setChangeOnState(field, ""), 0);
  };

  private handleSetValues = (params: Object) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...params
      }
    });

    const data = JSON.stringify(params, null, 2);
    const valid = schema.isValidSync(data);

    this.setState({ valid });
  };

  render() {
    return (
      <Component
        errors={this.state.errors}
        setFormErrors={this.setFormErrors.bind(this)}
        onSubmit={this.onSubmit.bind(this)}
        inputChange={this.handleInputChange.bind(this)}
        clearField={this.clearField.bind(this)}
        fields={this.state.fields}
        valid={this.state.valid}
        // use setValues inside useEffect
        setValues={this.handleSetValues.bind(this)}
        {...this.props}
      />
    );
  }
};

export default withFormErrorsHandler;
