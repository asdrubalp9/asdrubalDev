<template>
  <template v-if="fields">
    <template v-for="(form, kk) in fields" :key="kk">
      <template v-if="['label'].includes(form.type)">
        <p></p>
      </template>
      <template v-if="['date'].includes(form.type)">
        <q-input
          :clear-icon="form.clearIcon"
          :error-icon="form.errorIcon"
          :cancel-icon="form.cancelIcon"
          clearable
          lazy-rules
          filled
          dark
          mask="##/##/####"
          v-model="form.value"
          :label="`${form.label} ${form.required ? '*' : ''}`"
          :placeholder="form.placeholder"
          :hint="form.hint"
          class="q-mt-sm full-width"
          :class="form.class"
          :rules="[isValidDate]"
        >
          <template #append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.value" mask="DD/MM/YYYY">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </template>
      <template v-if="['logo'].includes(form.type)">
        <q-file
          filled
          dark
          v-model="form.valueFile"
          :label="form.label"
          :placeholder="form.placeholder"
          class="q-mt-sm full-width"
          :class="form.class"
        >
          <template #prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </template>
      <template v-if="['file'].includes(form.type)">
        <q-item>
          <q-item-section>
            <q-item-label>
              <p class="q-ma-none">
                Subir
                {{ form.placeholder }}
              </p>
            </q-item-label>
            <q-item-label>
              <div class="row full-width">
                <div class="col">
                  <q-file
                    filled
                    dark
                    v-model="form.valueFile"
                    :label="form.label"
                    :placeholder="form.placeholder"
                    class="q-ma-sm"
                  >
                    <template #prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                </div>
                <div class="col-4">
                  <q-input
                    :clear-icon="form.clearIcon"
                    :error-icon="form.errorIcon"
                    :cancel-icon="form.cancelIcon"
                    clearable
                    lazy-rules
                    :rules="form.rules"
                    filled
                    dark
                    class="q-ma-sm"
                    v-model="form.valueVencimiento"
                    :label="`Fecha vencimiento ${form.label}`"
                    :placeholder="`Fecha vencimiento ${form.placeholder}`"
                    mask="date"
                  >
                    <template #append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="form.valueVencimiento">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-4">
                  <q-input
                    :clear-icon="form.clearIcon"
                    :error-icon="form.errorIcon"
                    :cancel-icon="form.cancelIcon"
                    clearable
                    lazy-rules
                    :rules="form.rules"
                    filled
                    dark
                    class="q-ma-sm"
                    v-model="form.notaValue"
                    label="Notas"
                    :placeholder="Notas"
                  />
                </div>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-if="['select'].includes(form.type)">
        <q-select
          filled
          dark
          class="q-mt-sm full-width"
          :class="form.class"
          :options="form.options"
          v-model="form.value"
          :label="`${form.label} ${form.required ? '*' : ''}`"
          @update:model-value="form.func"
        />
      </template>
      <template v-if="['checkbox'].includes(form.type)">
        <q-checkbox
          class="q-mt-md"
          :checked-icon="form.checkedIcon"
          :unchecked-icon="form.uncheckedIcon"
          :size="form.size"
          v-model="form.value"
          lazy-rules
          :rules="form.rules"
          :label="`${form.label} ${form.required ? '*' : ''}`"
          :placeholder="form.placeholder"
          :hint="form.hint"
          :class="form.class"
        />
      </template>
      <template v-if="['text', 'textarea', 'email'].includes(form.type)">
        <q-input
          :clear-icon="form.clearIcon"
          :error-icon="form.errorIcon"
          :cancel-icon="form.cancelIcon"
          clearable
          lazy-rules
          :rules="form.rules"
          filled
          dark
          :mask="form.mask"
          v-model="form.value"
          :label="`${form.label} ${form.required ? '*' : ''}`"
          :type="form.type"
          :placeholder="form.placeholder"
          :hint="form.hint"
          class="q-mt-sm full-width"
          :icon="form.icon"
          :class="form.class"
        />
      </template>
      <template v-if="['toggle'].includes(form.type)"> </template>
      <template v-if="['password'].includes(form.type)">
        <q-input
          :clear-icon="form.clearIcon"
          :error-icon="form.errorIcon"
          :cancel-icon="form.cancelIcon"
          v-model="form.value"
          filled
          dark
          :label="form.label"
          :hint="form.hint"
          class="q-mt-sm full-width"
          :type="isPwd[kk] ? 'text' : 'password'"
        >
          <template #append>
            <q-icon
              :name="isPwd[kk] ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd[kk] = !isPwd[kk]"
            />
          </template>
        </q-input>
      </template>
      <template v-if="['number'].includes(form.type)">
        <q-input
          :clear-icon="form.clearIcon"
          :error-icon="form.errorIcon"
          :cancel-icon="form.cancelIcon"
          clearable
          lazy-rules
          :rules="form.rules"
          filled
          dark
          v-model="form.value"
          :label="`${form.label} ${form.required ? '*' : ''}`"
          :type="form.type"
          :placeholder="form.placeholder"
          class="q-mt-sm full-width"
          :min="form.min"
          :max="form.max"
          :mask="form.mask"
          :class="form.class"
        />
      </template>
    </template>
  </template>
</template>

<script>
import { isValidDate } from "./../composables/isValidDate.js";
import { ref } from "vue";
export default {
  props: {
    fields: {
      type: Array,
      default: () => [
        {
          label: "",
          type: "",
          placeholder: "",
          value: null,
          mask: null,
          rules: [],
          class: "",
          hint: "",
        },
      ],
    },
  },
  setup(props) {
    const isPwd = ref([]);
    props.fields.forEach((e) => {
      if (e.type === "password") {
        isPwd.value.push(true);
      }
    });
    return {
      isPwd,
      isValidDate,
    };
  },
};
</script>

<style></style>
