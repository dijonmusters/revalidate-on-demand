const handler = async (req, res) => {
  const pathToRevalidate = req.body?.record?.id || req.body?.old_record?.id;
  await res.revalidate("/");
  await res.revalidate(pathToRevalidate);
  return res.send({ revalidated: true, paths: ["/", pathToRevalidate] });
};

export default handler;
