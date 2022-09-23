# Global feed issue - HIGH priority issue
Global feed renders messages from the public group even if the user hasn't joined the group.

### Repro steps:
1. Install dependencies: `yarn install`
2. Start dev server: `yarn dev`
3. From home page open Global feed page first - http://localhost:3000/global-feed. Observe that the feed is empty.
4. Click "Go to Public Community" link at the top of the page. Observe that the feed renders a test message.
5. Click "Go to Global Feed" link at the top of the page. Observe that *it nows renders the test message from the public community*.
6. Refresh the page. Observe global feed is empty again.

### Expected behavior:
Global feed should consistently render only messages from the communities that the user has joined.

# Amity JS SDK issue
Starting from version 5.24.0 @amityco/js-sdk introduced a regression - rendering fails with following error:
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

### Repro steps:
1. Lock @amityco/js-sdk version in package.json file to 5.26.0 (reproducible starting from 5.24.0)
2. Install dependencies: `yarn install`
2. Start dev server: `yarn dev`
3. Open http://localhost:3000/global-feed page. Observe the error mentioned above.
