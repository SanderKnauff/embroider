<template>
  <div data-test-macro-condition-in-gjs-component>
  {{#if (macroCondition (macroGetOwnConfig 'showRed'))}}
    red
  {{else}}
    blue
  {{/if}}
  </div>
</template>
