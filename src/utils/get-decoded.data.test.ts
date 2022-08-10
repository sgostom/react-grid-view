import { getDecodedtext } from './get-decoded-text.util';

it("should entity in chars chain be decoded", () => {
  expect(getDecodedtext('lib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHx')).toEqual('lib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx');
});

it("should entity in text be decoded", () => {
  expect(getDecodedtext('Fish &amp; Chips')).toEqual('Fish & Chips');
});