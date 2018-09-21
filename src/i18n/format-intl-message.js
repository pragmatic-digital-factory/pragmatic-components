export default (intl, id, values) => {
  const formatMessage = (messageId, messageValues) =>
    intl.formatMessage(
      {
        id: messageId,
        defaultMessage: 'Translation not found',
      },
      messageValues
    );
  return id ? formatMessage(id, values) : id;
};
