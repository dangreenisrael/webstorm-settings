import React from 'react';
import renderer from 'react-test-renderer';
import ${NAME} from './${NAME}';

test('${NAME} Renders Correctly', () => {
  const tree = renderer.create(
      <${NAME} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});