import Component from '@glimmer/component';

// This component is meant to test if component resolving is working in -classic scenarios,
// such as `lts_5_12-classic-macro-tests`
export default class TestComponent extends Component {
  foo = "bar";
}
