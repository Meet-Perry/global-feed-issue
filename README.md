1. Install dependencies with yarn - `yarn install`
2. Start the app with `yarn dev`
3. Observe following error:
    ```
    error - ReferenceError: self is not defined
        at Object.2903 (/Users/user/p/temp/global-feed-issue/node_modules/@amityco/js-sdk/build/client.min.js:2:185655)
        at r (/Users/user/p/temp/global-feed-issue/node_modules/@amityco/js-sdk/build/client.min.js:2:722756)
        at /Users/user/p/temp/global-feed-issue/node_modules/@amityco/js-sdk/build/client.min.js:2:735416
        at /Users/user/p/temp/global-feed-issue/node_modules/@amityco/js-sdk/build/client.min.js:2:1903168
        at /Users/user/p/temp/global-feed-issue/node_modules/@amityco/js-sdk/build/client.min.js:2:1903174
        at /Users/user/p/temp/global-feed-issue/node_modules/@amityco/js-sdk/build/client.min.js:2:81
        at Object.<anonymous> (/Users/user/p/temp/global-feed-issue/node_modules/@amityco/js-sdk/build/client.min.js:2:217)
        at Module._compile (node:internal/modules/cjs/loader:1126:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
        at Module.load (node:internal/modules/cjs/loader:1004:32) {
    page: '/'
    }
    ```