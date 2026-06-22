# Skip-to-Main-Content Link Fix

## Issue
The "Skip to main content" link was visible at the top of the UK home page, when it should only be visible to keyboard users when focused.

## Root Cause
The `.uk-skip-link` class had no CSS styling, so the link appeared normally in the document flow.

## Solution
Added CSS to the `src/app/uk/layout.tsx` file to:
1. **Hide visually** — Position the link off-screen (`top: -40px`)
2. **Show on focus** — Move it into view when keyboard user tabs to it (`top: 0`)

## CSS Applied

```css
/* Skip to main content — hidden visually, visible on focus for keyboard navigation */
.uk-skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0052CC;
  color: #FFFFFF;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
  font-size: 14px;
  font-weight: 500;
}
.uk-skip-link:focus {
  top: 0;
}
```

## How It Works

### Default State
- Link is positioned 40px above the viewport (`top: -40px`)
- Not visible to users
- Still in the DOM (keyboard accessible)

### On Focus (Keyboard Tab)
- When a keyboard user presses Tab, the link receives focus
- CSS `:focus` selector triggers
- Link moves into view (`top: 0`)
- Shows as a blue button at the top of the page
- User can press Enter to skip to `#main-content`

## Benefits
✅ **Accessibility**: Keyboard users can skip the header and go directly to main content  
✅ **Hidden by default**: Doesn't clutter the visual design for mouse users  
✅ **Standard pattern**: Follows WCAG accessibility best practices  
✅ **Performance**: No JavaScript needed, pure CSS  

## Testing

### For Visual Users
- Page displays normally with no "Skip" link visible
- No change to design or layout

### For Keyboard Users
1. Press `Tab` when page loads
2. Blue "Skip to main content" button appears at top
3. Press `Enter` to skip to main content
4. Page jumps to `#main-content` anchor

## Files Modified
- `src/app/uk/layout.tsx` — Added CSS styles (lines 65-80)

## Status
✅ **Fixed** — Skip link now properly hidden until focused
