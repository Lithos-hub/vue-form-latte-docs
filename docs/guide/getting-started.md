# Getting Started

## Installation

Install the package with `npm`:

```bash
npm install vue-form-latte
```

In addition, if you want to apply validations, you need to install the `yup` package:

```bash
npm install yup
```

## Usage

Then, import the packages where you want to use it:

```javascript
import { VueFormLatte } from "vue-form-latte";
import * as yup from "yup";
```

Now, you can use the `VueFormLatte` component in your Vue application:

```vue
<template>
  <VueFormLatte :schema="schema" :components="components" />
</template>

<script setup lang="ts">
import { VueFormLatte } from "vue-form-latte";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().required().positive().integer(),
});

const components = [
    {
        componentType: "input",
        props: {
            name: "name",
            initialValue: "",
        }
    },
    {
        componentType: "input",
        props: {
            name: "email",
            initialValue: "",
        }
    },
    {
        componentType: "input",
        props: {
            name: "age",
            type: "number",
            initialValue: "",
        }
    }
]
```
