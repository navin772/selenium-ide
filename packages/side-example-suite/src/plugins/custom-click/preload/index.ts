import { Api } from '@seleniumhq/side-api'

// @ts-expect-error - this is an exposed global
const api = window.sideAPI as Api
api.plugins.addRecorderPreprocessor((command, event) => {
  console.debug('Recorded command', command, event)
  if (command.command !== 'click') return
  return {
    action: 'update',
    command: {
      ...command,
      command: 'customClick',
    },
  }
})
