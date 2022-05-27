# Openfin Workspace

## BUG

When running the @openfin/workspace-platform v6.3.6 in React -- you will see the following error in the console after you click `Initialize OpenFin Workspace` for the Workspace Provider:

```
Provider.js:35 Error: Channel creation failed: channelName "interop-broker-workspace-provider" is already in use. Please note that only one channel may be registered per channelName.
    at Object.createChannel (:3000/Users/darrenfurr/OpenFin/runtime/23.96.68.3/OpenFin.app/Contents/Resources/app.asar/src/browser/api/channel.js:85)
    at ApiHandler.createChannel [as apiFunc] (:3000/Users/darrenfurr/OpenFin/runtime/23.96.68.3/OpenFin.app/Contents/Resources/app.asar/src/browser/api_protocol/api_handlers/channel.js:56)
    at :3000/Users/darrenfurr/OpenFin/runtime/23.96.68.3/OpenFin.app/Contents/Resources/app.asar/src/browser/api_protocol/transport_strategy/elipc_strategy.js:55
    at :3000/Users/darrenfurr/OpenFin/runtime/23.96.68.3/OpenFin.app/Contents/Resources/app.asar/src/browser/api_protocol/transport_strategy/base_handler.js:27
    at :3000/Users/darrenfurr/OpenFin/runtime/23.96.68.3/OpenFin.app/Contents/Resources/app.asar/src/browser/api_protocol/transport_strategy/ws_strategy.js:17
    at :3000/Users/darrenfurr/OpenFin/runtime/23.96.68.3/OpenFin.app/Contents/Resources/app.asar/src/browser/api_protocol/transport_strategy/base_handler.js:27
    at :3000/Users/darrenfurr/OpenFin/runtime/23.96.68.3/OpenFin.app/Contents/Resources/app.asar/src/browser/api_protocol/api_handlers/api_policy_processor.js:449

    VM6:3 Uncaught (in promise) Error: No registered Home providers
    at <anonymous>:3:38596
    at async ClassicStrategy.send (<anonymous>:3:38442)
    at async initPlatform (Provider.js:46)
```

## Run the Workspace Provider

- `npm i` to install dependencies
- `npm run start` to start the server
- `openfin:run` to launch the provider

## Configs

Config files are located in [./config](./config).
[workspace.json](./config/workspace.json) - This is the manifest file Openfin uses to run the workspace provider.
