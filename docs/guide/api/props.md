# Main props

The `VueFormLatte` component accepts the following props:

- **`components`** (array, required): An array of objects with the structure of the components you want to use in the form. Each object should contain the `componentType` and `props` properties. The `componentType` should be a string with the type of the component, and the `props` should be an object with the props of the component.
- **`dark`** (boolean, optional): A boolean to set the dark mode of the form. Default is `false`.
- **`format`** (string, optional): A string to set the format of the form. It accepts the following values:
  - **`grid`** (By default): The form will be displayed in a grid format.
  - **`column`**: The form will be displayed in a column format.
- **`schema`** (object, optional): An object with the schema of the form using `yup` library.

Example of a schema using `yup`:

```typescript
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});
```

- **`validateOnSubmit`** (boolean, optional): A boolean to set if the form should be validated on submit. Default is `true`.

Check the interface for the `components` prop to see the props:

```typescript
export interface VueFormLatteProps {
  components: VueFormLatteItem[];
  dark?: boolean;
  format?: "grid" | "column";
  schema?: Schema;
  validateOnSubmit?: boolean;
}
```

# Nested props

## `components`

The `components` prop is an array of objects with the following structure:

- **`componentType`** (string, required): The type of the component. It should be a string with the type of the component.
- **`props`** (object, required): The props of the component. This object should contain the props of the component.
- **`customComponent`** (unknown, optional): A custom component to use in the form. If provided, it will be used instead of the default component.
- **`colspan`** (number | string, optional): A number or string to set the colspan of the component. If provided, it will be used to set the colspan of the component.

Check the interface for the `components` prop to see the props:

```typescript
export interface VueFormLatteItem {
  componentType: ComponentType;
  props: FormComponentProps[ComponentType];
  customComponent?: unknown;
  colspan?: number | string;
}
```

## `componentType`

The `componentType` is used to render a specific component in the form. It should be one of the following names of the components:

- **`input`**
- **`textarea`**
- **`select`**
- **`multiselect`**
- **`radio`**
- **`checkbox`**
- **`slider`**
