<template>
  <div>
    <input
      :id="id"
      ref="input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :class="className"
      class="outline-none border-b w-full py-2 px-3 text-gray-700 leading-tight"
      autocomplete="off"
      @keyup.enter="$emit('enterClicked', true)"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' },
    className: { type: String, default: '' },
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  }
}
</script>
