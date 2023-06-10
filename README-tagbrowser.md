# Build

I don't have node installed - instead use docker for build via `npm.sh` script. E.g. `./npm.sh run build:chromium`

# Tag Browser Implementation Notes

* Tracking issue on original repo https://github.com/xbrowsersync/app/issues/453
* App direct link extension://lcbjdhceifofjlpecfpeimnnphbcjgnc/app.html
* Folder browser issue https://github.com/xbrowsersync/app/issues/16
* Folder browser commit https://github.com/xbrowsersync/app/commit/55004f6185ba567c427e1d0a40b04966be3e09af#diff-4bae6b96459c08f14efb44d37844862b9252d4642e8a6849277c1f80f25110cf
* Chrome Extensions 101 https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/
* Angular 1.8.2 docs https://devdocs.io/angularjs~1.8/

# Plan

[x] Add new Tag icon to search bar
[ ] On Tag click, show new page with close button
[ ] Display alphabetically-sorted list of distinct tags (with count of bookmarks per?)
[ ] On tag click, show list of distinct tags that 'AND' have that tag, and list of bookmarks below
[ ] Recursively all the way down
[ ] Localize/translate 
[ ] Upgrade Chromium to Manifest v3