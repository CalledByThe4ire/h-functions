// @flow
import { table, tr, td } from './tags';

export default (): HTMLElement =>
  table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions')),
  );

