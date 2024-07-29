export default async function getMdxComponent(courseName?: string) {
  try {
    const component = await import(`@/content/${courseName}.mdx`);
    return component.default;
  } catch (error) {
    console.error('Failed to load course content:', error);
    return null;
  }
}
