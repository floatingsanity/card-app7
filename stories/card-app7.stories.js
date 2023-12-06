import { html } from 'lit';
import '../src/card-app7.js';

export default {
  title: 'CardApp7',
  component: 'card-app7',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <card-app7
      style="--card-app7-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </card-app7>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
