<template>
  <div data-test-v2-macro-condition-in-gjs-component>
  {{#if (macroCondition (macroGetOwnConfig 'showGreen'))}}
    green
  {{else}}
    yellow
  {{/if}}
  </div>
</template>
