# perf: use FlatList, memoized items, reducer-based menu hook

## Summary:
- Replace manual mapping with FlatList, add memoized MenuItem and MenuList components, and introduce a reducer-based useMenu hook to perform localized updates. This reduces re-renders and improves list/scroll performance.

## Changes:
- src/components/MenuItem.tsx (memoized, fixed height)
- src/components/MenuList.tsx (FlatList, getItemLayout, tuned props)
- src/hooks/useMenu.ts (reducer with add/update/remove)
- App.tsx (example usage)

## How to test:
- Checkout the branch: git checkout fix/performance
- npm install (or yarn)
- expo start
- Verify list scroll smoothness with 40+ items.
- Tap an item to trigger an update and confirm only the necessary UI updates.

## Notes:
- After merge: add image caching (Expo Asset or Fast Image), persist data (AsyncStorage/SQLite), and run a production-mode profile (expo start --no-dev --minify) for final verification.