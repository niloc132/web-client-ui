/* eslint class-methods-use-this: "off" */
/* eslint no-unused-vars: "off" */
import TableColumnFormatter from './TableColumnFormatter';

class DefaultColumnFormatter extends TableColumnFormatter {
  format(value) {
    return `${value}`;
  }
}

export default DefaultColumnFormatter;
