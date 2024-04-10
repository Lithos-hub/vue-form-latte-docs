# Select

The `select` component is a simple text select. It's a wrapper around the native `select` element, so it supports all the same attributes and events. In addition, it supports the following props:

- `name` (string, required): The name of the select. This is used to identify the select in the form's state.
- `selectData` (array, required): The data of the select. This array should contain objects with the following structure:
  - `value` (string, required): The value of the option.
  - `text` (string, required): The text of the option.
- `initialValue` (string, optional): The initial value of the select. If not provided, the select will be empty.
- `customStyles` (string, optional): Put here your CSS classes to customize the select. You can use Tailwind CSS classes or your own classes.
- `placeholder` (string, optional): The placeholder of the select. If not provided, the select will not have a placeholder.
- `label` (string, optional): The label of the select. If not provided, the select will not have a label.
- `readonly` (boolean, optional): If `true`, the select will be read-only. If not provided, the select will be editable.

## Usage

In order to use the `select` component, create an array of objects with the following structure:

- **componentType** (string, required): The type of the component. In this case, it should be `select`.
- **props** (object, required): The props of the component. This object should contain the `name` prop, so the select can be identified in the form's state. Also, you must provide the `selectData` prop, so the select can have options.

```javascript
const components = [
  {
    componentType: "select",
    props: {
      name: "name",
      selectData: [
        { value: "1", text: "Option 1" },
        { value: "2", text: "Option 2" },
        { value: "3", text: "Option 3" },
      ],
      initialValue: "",
      placeholder: "Select an option",
    },
  },
];
```

Then, pass the `components` array to the `VueFormLatte` component:

```vue
<template>
  <VueFormLatte :components="components" />
</template>
```

## TypeScript

This is the type of the `select` component props:

```typescript
import type { SelectHTMLAttributes } from "vue";

export interface BaseSelectItem {
  value: string | number;
  label: string;
}

export interface BaseSelectProps
  extends /* @vue-ignore */ SelectHTMLAttributes {
  selectData: BaseSelectItem[] | [];
  name: string;
  initialValue: string | number;
  placeholder?: string;
  label?: string;
  readonly?: boolean;
}
```

## Examples

### Basic select

<section class="p-5">
    <VueFormLatte :components="basicSelect" />
</section>

```vue
<template>
  <VueFormLatte :components="components" />
</template>

<script setup>
import { VueFormLatte } from "vue-form-latte";

const components = [
  {
    componentType: "select",
    props: {
      name: "name",
      selectData: [
        { value: "1", text: "Option 1" },
        { value: "2", text: "Option 2" },
        { value: "3", text: "Option 3" },
      ],
      initialValue: "",
      label: "Select label",
      placeholder: "Select an option",
    },
  },
];
</script>
```

### Using custom styles

<section class="p-5">
    <VueFormLatte :components="components" />
</section>

<script setup>
import { VueFormLatte } from 'vue-form-latte'

const basicSelect = [
  {
    componentType: "select",
    props: {
      name: "name",
      selectData: [
        { value: "1", text: "Option 1" },
        { value: "2", text: "Option 2" },
        { value: "3", text: "Option 3" },
      ],
      initialValue: "",
      label: "Select label",
      placeholder: "Select an option",
    },
  },
];

const components = [
  {
    componentType: "select",
    props: {
      name: "name",
      selectData: [
        { value: "1", text: "Option 1" },
        { value: "2", text: "Option 2" },
        { value: "3", text: "Option 3" },
      ],
      initialValue: "",
      label: "Select label",
      placeholder: "Select an option",
      customStyles: "border-2 border-blue-500 rounded-md p-2",
    },
  },
];
</script>

```vue
<template>
  <VueFormLatte :components="components" />
</template>

<script setup>
import { VueFormLatte } from 'vue-form-latte'

const components = [
  {
    componentType: "select",
    props: {
      name: "name",
      selectData: [
        { value: "1", text: "Option 1" },
        { value: "2", text: "Option 2" },
        { value: "3", text: "Option 3" },
      ],
      initialValue: "",
      label: "Select label",
      placeholder: "Select an option",
    },
  },
];
```
