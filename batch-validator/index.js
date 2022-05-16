module.exports = async function (context, paymentFile) {
  context.log('JavaScript blob trigger function processed blob \n Blob:', context.bindingData.blobTrigger, '\n Blob Size:', paymentFile.length, 'Bytes')
  // TODO: actually validate the file
  const message = {
    filepath: context.bindingData.blobTrigger,
    validated: true,
    timestamp: new Date().toISOString()
  }
  context.log(message)
  context.bindings.processTopic = message
  context.log('Message sent')
}
