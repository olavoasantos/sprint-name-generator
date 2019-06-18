export const imports = {
  'src/README.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-readme" */ 'src/README.mdx'
    ),
}
