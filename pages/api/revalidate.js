const handler = async (req, res) => {
  await res.revalidate("/");

  const pathToRevalidate = `/${
    req.body?.record?.id || req.body?.old_record?.id
  }`;
  await res.revalidate(pathToRevalidate);

  return res.send({ revalidated: true });
};

export default handler;
