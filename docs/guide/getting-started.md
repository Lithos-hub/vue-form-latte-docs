# Getting Started

## Installation

Install the package with `npm`:

```bash
npm install vue-form-latte
```

The library also includes the following utilities:

- [Yup](https://www.npmjs.com/package/yup): A JavaScript schema builder for value parsing and validation.
- [Vue](https://vuejs.org/): A progressive framework for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [Flowbite](https://flowbite.com/): An open-source Tailwind CSS components and templates library.
- [@heroicons/vue](https://www.npmjs.com/package/@heroicons/vue/): A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.

## Usage

Then, import the packages where you want to use it. It is recommended to import the `IVueFormLatte` interface to type the components array:

```javascript
import { VueFormLatte, IVueFormLatte } from "vue-form-latte";
import * as yup from "yup";
```

Now, you can use the `VueFormLatte` component in your Vue application:

```vue
<template>
  <VueFormLatte :schema="schema" :components="components" />
</template>

<script setup lang="ts">
import { VueFormLatte, IVueFormLatte } from "vue-form-latte";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().required().positive().integer(),
});

const components: IVueFormLatte[] = [
    {
        componentType: "input",
        props: {
            name: "name",
            placeholder: "Write your name here",
            initialValue: "",
        }
    },
    {
        componentType: "input",
        props: {
            name: "email",
            type: "email",
            initialValue: "",
        }
    },
    {
        componentType: "input",
        props: {
            name: "age",
            type: "number",
            initialValue: 23,
        }
    }
]
```
