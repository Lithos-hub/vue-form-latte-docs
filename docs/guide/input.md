# Input

The `input` component is a simple text input. It's a wrapper around the native `input` element, so it supports all the same attributes and events. In addition, it supports the following props:

- `name` (string, required): The name of the input. This is used to identify the input in the form's state.
- `initialValue` (string, optional): The initial value of the input. If not provided, the input will be empty.
- `customStyles` (string, optional): Put here your CSS classes to customize the input. You can use Tailwind CSS classes or your own classes.
- `label` (string, optional): The label of the input. If not provided, the input will not have a label.

## Examples

### Basic input

<section class="p-5">
    <VueFormLatte :components="components" />
</section>

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
      initialValue: "",
      label: "Input label",
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

const components = [
    {
        componentType: "input",
        props: {
            name: "name",
            initialValue: "This is a default value",
            label: "Input label",
            placeholder: "Write something here",
            customStyles: "bg-blue-900 outline outline- text-cyan-500 p-3 rounded-md"
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
      customStyles: "bg-blue-900 outline outline- text-cyan-500 p-3 rounded-md",
    },
  },
];
</script>
```