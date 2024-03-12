# Main props

The `VueFormLatte` component accepts the following props:

- **`components`** (array, required): An array of objects with the structure of the components you want to use in the form. Each object should contain the `componentType` and `props` properties. The `componentType` should be a string with the type of the component, and the `props` should be an object with the props of the component.
- **`dark`** (boolean, optional): A boolean to set the dark mode of the form. Default is `false`.
- **`format`** (string, optional): A string to set the format of the form. It accepts the following values:
  - **`grid`**: The form will be displayed in a grid format.
  - **`column`** (By default): The form will be displayed in a column format.
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

Check the interface below:

```typescript
export interface VueFormLatteProps {
  components: VueFormLatteItem[];
  dark?: boolean;
  format?: "grid" | "column";
  schema?: Schema;
  validateOnSubmit?: boolean;
}
```

## VueFormLatteProps

### `components - VueFormLatteItem`

The `components` prop is an array of objects with the following structure corresponding to the `VueFormLatteItem` interface:

- **`componentType`** (string, optional): It must be a string with the type of the component. **If you don't use the `customComponent` property, you should provide this property. Otherwise, you can avoid this prop and use the `customComponent` instead**.
- **`props`** (object, required): The props of the component. This object should contain the props of the component.
- **`customComponent`** (unknown, optional): A custom component to use in the form. If provided, it will be used instead of the default component.
- **`colspan`** (number | string, optional): A number or string to set the colspan of the component. If provided, it will be used to set the colspan of the component.

Check the interface below:

```typescript
export interface VueFormLatteItem {
  props: FormComponentProps[ComponentType];
  componentType?: ComponentType;
  customComponent?: unknown;
  colspan?: number | string;
}
```

### `componentType`

The `componentType` is used to render a specific component in the form. It should be one of the following names of the components:

- **`input`**
- **`textarea`**
- **`select`**
- **`multiselect`**
- **`radio`**
- **`checkbox`**
- **`slider`**

### `props`

Depending on the `componentType`, the `props` object should contain the props of the component. To ensure the correct props, you can use the `FormComponentProps` interface casting the `props` object:

```typescript
import { FormComponentProps } from "vue-form-latte";

const components: VueFormLatteItem[] = [
  {
    componentType: "input",
    props: {
      name: "name"
      initialValue: "",
    },
  } as FormComponentProps["input"], // Put his line to ensure the correct props
];
```

### `customComponent`

The `customComponent` is an unknown type that can be used to render a custom component in the form. If provided, it will be used instead of the default component. You can use it to render a custom component in the form. See the example below:

```typescript
import MyCustomTextarea from "./MyCustomTextarea.vue";

const components: VueFormLatteItem[] = [
  {
    customComponent: MyCustomTextarea,
    props: {
      name: "name"
      initialValue: "",
    } as FormComponentProps["textarea"],
  },
];
```

### `colspan`

The `colspan` prop allows you to set the colspan of the component. It can be a number or a string. If provided, it will be used to set the colspan of the component. To see effects of the `colspan` prop, you should use the `format` prop with the value `grid`.

See the example below:

```vue
<template>
  <VueFormLatte format="grid" :components="colspanExample" />
</template>

<script setup lang="ts">
const colspanExample = [
  {
    componentType: "input",
    props: {
      name: "firstInput",
      initialValue: "",
      placeholder: "First input",
      disabled: true,
    },
    colspan: 2,
  },
  {
    componentType: "input",
    props: {
      name: "secondInput",
      initialValue: "",
      placeholder: "Second input",
      disabled: true,
    },
    colspan: 10,
  },
  {
    componentType: "input",
    props: {
      name: "thirdInput",
      initialValue: "",
      placeholder: "Third input",
      disabled: true,
    },
    colspan: 4,
  },
  {
    componentType: "input",
    props: {
      name: "fourthInput",
      initialValue: "",
      placeholder: "Fourth input",
      disabled: true,
    },
    colspan: 8,
  },
  {
    componentType: "input",
    props: {
      name: "fifthInput",
      initialValue: "",
      placeholder: "Fifth input",
      disabled: true,
    },
    colspan: 6,
  },
  {
    componentType: "input",
    props: {
      name: "sixthInput",
      initialValue: "",
      placeholder: "Sixth input",
      disabled: true,
    },
    colspan: 6,
  },
];
</script>
```

See the result below:

<div class="p-5">
  <VueFormLatte format="grid" :components="colspanExample" />
</div>

<script setup lang="ts">
import { VueFormLatte } from "vue-form-latte";

const colspanExample = [
  {
    componentType: "input",
    props: {
      name: "firstInput",
      initialValue: "",
      placeholder: "First input",
      disabled: true,
    },
    colspan: 2,
  },
  {
    componentType: "input",
    props: {
      name: "secondInput",
      initialValue: "",
      placeholder: "Second input",
      disabled: true,
    },
    colspan: 10,
  },
  {
    componentType: "input",
    props: {
      name: "thirdInput",
      initialValue: "",
      placeholder: "Third input",
      disabled: true,
    },
    colspan: 4,
  },
  {
    componentType: "input",
    props: {
      name: "fourthInput",
      initialValue: "",
      placeholder: "Fourth input",
      disabled: true,
    },
    colspan: 8,
  },
  {
    componentType: "input",
    props: {
      name: "fifthInput",
      initialValue: "",
      placeholder: "Fifth input",
      disabled: true,
    },
    colspan: 6,
  },
  {
    componentType: "input",
    props: {
      name: "sixthInput",
      initialValue: "",
      placeholder: "Sixth input",
      disabled: true,
    },
    colspan: 6,
  }
];
</script>
