'use strict'

 exports.handle = function handle(client) {
   const handleLocation = client.createStep({
     satisfied() {
       return false
     },

     prompt() {
       client.addResponse('location')
       client.done()
     }
   })

   client.runFlow({
     classifications: {
       location: 'location'
     },
     streams: {
       location: handleLocation,
       main: 'onboarding',
       onboarding: [sayWhere],
       end: [untrained]
     }
   })}
