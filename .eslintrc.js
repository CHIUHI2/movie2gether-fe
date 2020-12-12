module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['react', 'react-hooks', 'import', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/sort-comp': [
      'off',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'simple-import-sort/imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', 'ts', 'tsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
