const staticPostIds = [1, 2, 4, 5, 6, 7, 8, 9];

export const postPaths = staticPostIds.map((id) => ({
  params: { id: String(id) }
}));
