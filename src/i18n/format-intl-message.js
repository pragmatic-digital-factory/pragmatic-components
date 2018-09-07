export default (intl, id, values) => {
  const formatMessage = (messageId, values) =>
    intl.formatMessage(
      {
        id: messageId,
        defaultMessage: 'Translation not found',
      },
      values
    );
  return id ? formatMessage(id, values) : id;
};
