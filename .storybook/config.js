import { addDecorator, configure } from '@storybook/react';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { withInfo } from '@storybook/addon-info';
import enMessages from '../src/i18n/en';
import frMessages from '../src/i18n/fr';

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);

const getMessages = locale => messages[locale];

setIntlConfig({
  locales: ['fr'],
  defaultLocale: 'fr',
  getMessages,
});

const messages = {
  en: enMessages,
  fr: frMessages,
};

addDecorator(withIntl);
addDecorator((story, context) => withInfo('Documentation')(story)(context));
function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
