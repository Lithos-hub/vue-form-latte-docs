# Textarea

The `textarea` component is used to create a textarea input in the form. It is used to collect long-form text from the user. It's a wrapper around the native `textarea` element, so it supports all the same attributes and events. In addition, it supports the following props:

- `name` (string, required): The name of the textarea. This is used to identify the textarea in the form's state.
- `initialValue` (string, optional): The initial value of the textarea. If not provided, the textarea will be empty.
- `customStyles` (string, optional): Put here your CSS classes to customize the textarea. You can use Tailwind CSS classes or your own classes.
- `label` (string, optional): The label of the textarea. If not provided, the textarea will not have a label.

## Usage

In order to use the `textarea` component, create an array of objects with the following structure:

- **componentType** (string, required): The type of the component. In this case, it should be `textarea`.
- **props** (object, required): The props of the component. This object should contain the `name` prop, so the input can be identified in the form's state. Also, you must provide the `initialValue` prop, so the input can have an initial value.

```javascript
const components = [
  {
    componentType: "textarea",
    props: {
      name: "name",
      initialValue: "",
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

## Examples

### Basic textarea

<section class="p-5">
    <VueFormLatte :components="basicTextarea" />
</section>

```vue
<template>
  <VueFormLatte :components="components" />
</template>

<script setup>
import { VueFormLatte } from "vue-form-latte";

const components = [
  {
    componentType: "textarea",
    props: {
      name: "name",
      initialValue: "",
      label: "Textarea label",
      placeholder: "Write something here",
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

const basicTextarea = [
  {
    componentType: "textarea",
    props: {
      name: "name",
      initialValue: "",
      label: "Textarea label",
      placeholder: "Write something here",
    },
  },
];

const components = [
    {
        componentType: "textarea",
        props: {
            name: "name",
            initialValue: "",
            label: "Textarea label",
            placeholder: "Write something here",
            customStyles: "bg-[#202020] outline text-red-500 p-3 rounded-0 transition-all"
        }
    },
]
</script>

```vue
<template>
  <VueFormLatte :components="components" />
</template>

<script setup>
import { VueFormLatte } from "vue-form-latte";

const components = [
  {
    componentType: "input",
    props: {
      name: "name",
      initialValue: "This is a default value",
      label: "Input label",
      placeholder: "Write something here",
      customStyles:
        "bg-[#202020] outline text-red-500 p-3 rounded-0 transition-all",
    },
  },
];
</script>
```
