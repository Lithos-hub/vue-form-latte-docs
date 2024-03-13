# Exposed bindings

Using `ref` you can access the following methods and properties:

- **`model`** (object): The model of the form containing each field value.
- **`onSubmit`** (method): A method to submit the form.

### `model`

You can access the model of the form using the `model` property. It contains the values using as keys the name of each field:

```vue
<template>
  <VueFormLatte
    ref="formRef"
    format="grid"
    :components="components"
    :schema="schema"
  />
</template>

<script lang="ts" setup>
import {
  VueFormLatte,
  FormComponentProps,
  VueFormLatteItem,
} from "vue-form-latte";
import { ref } from "vue";

const formRef = ref<typeof VueFormLatte>(null!);

const formValues = computed(() => formRef.value?.model);

const components: VueFormLatteItem[] = [
  {
    componentType: "input",
    colspan: 6,
    props: {
      initialValue: "John Doe",
      name: "name",
      label: "Name",
    } as FormComponentProps["input"],
  },
  {
    componentType: "input",
    colspan: 6,
    props: {
      initialValue: "example@example.com",
      name: "email",
      type: "email",
      label: "Email",
    } as FormComponentProps["input"],
  },
];
</script>
```

Taking account the previous code, `formValues.value` should has the following data:

```typescript
{
    name: 'John Doe',
    email: 'example@example.com'
}
```

### `onSubmit`

Instead of using the `@submit` event, you can use the `onSubmit` method to submit the form. It will validate the form using the schema if provided, and then it will emit the `submit` event with the model as the payload:

```vue
<template>
  <VueFormLatte
    ref="formRef"
    format="grid"
    :components="components"
    :schema="schema"
  />
  <button @click="submitForm">Submit</button>
</template>

<script lang="ts" setup>
import {
  VueFormLatte,
  FormComponentProps,
  VueFormLatteItem,
} from "vue-form-latte";
import { ref } from "vue";

const formRef = ref<typeof VueFormLatte>(null!);

const submitForm = () => {
  formRef.value?.onSubmit();
};
</script>
```
