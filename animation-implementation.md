# Portfolio Animation Implementation

## Library: Framer Motion

GPU-accelerated, declarative animations with TypeScript support.

## SVG Explosion Effect

**Location:** `/src/App.tsx` - `SVG_ANIMATION_CONFIG`

Four corner SVGs create page transitions:
- **Explosion**: Scale 1→40x, rotate 75°, duration 0.6s
- **Hover**: Scale 1.2x + breathing (y: 0→-12→0, 3s loop)
- **Inactive**: Scale 0.5x, rotate -25°, opacity 0

```typescript
const SVG_ANIMATION_CONFIG = {
  explosion: { scale: 40, rotate: 75, opacity: 1, y: 0 },
  inactive: { scale: 0.5, rotate: -25, opacity: 0, y: 0 },
  hover: { scale: 1.2, rotate: 0, opacity: 1, y: [0, -12, 0] },
  default: { scale: 1, rotate: 0, opacity: 1, y: 0 }
};
```

**CSS:** Only positioning (fixed, z-index). All transforms via Framer Motion to avoid conflicts.

## Card Entrance

**Location:** All `*Card.tsx` components

```typescript
initial={{ opacity: 0, scale: scaleArr[0], y: 20 }}
animate={{ opacity: 1, scale: scaleArr[1], y: 0 }}
transition={{ type: "spring", stiffness: 260, damping: 20, delay: [0.1, 0.3, 0.5, 0.7] }}
```

**Scale:** Mobile `[0.5, 1]` | Desktop `[1.3, 1]`

## Page Transitions

**Location:** All `*Page.tsx` components

### Back Button & Content (Unified)
```typescript
// Back Button - delay: 0.3s
// Content - delay: 0.4s
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
transition={{ duration: 0.4, ease: "easeOut" }}
```

### Page Tag (Sidebar Title)
```typescript
initial={{ rotate: -90, x: -200, opacity: 0 }}
animate={{ rotate: -90, x: 0, opacity: 0.1 }}
exit={{ rotate: -90, x: -200, opacity: 0 }}
transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
```

**Critical:** Parent container has NO y-transform on exit to prevent page tag jitter (fixed positioning creates containing block issue).

## Timeline

**Card Click → Page:**
```
0ms   : SVG explosion starts
300ms : Back button fades in (y: -20→0)
400ms : Content fades in (y: -20→0)
600ms : SVG fully expanded
800ms : Page tag slides in (x: -200→0)
```

**Back to Home:**
```
0ms   : Content + button fade out (y: 0→-20)
300ms : Exit complete, cards reveal via onExitComplete
600ms : SVG shrinks to corner
```

## Key Implementation Details

### Exit Animation Fix
Page uses `AnimatePresence` with `onExitComplete` callback to delay card reveal:
```typescript
const handleExitComplete = () => {
  setShowCards(true);
  setCardsAnimating(true);
};

<AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
  {chosenCard && renderPage()}
</AnimatePresence>
```

### Cards Stay in DOM
Cards never unmount - prevents layout shift:
```typescript
<motion.div
  style={{
    visibility: cardSelected ? 'hidden' : 'visible',
    pointerEvents: cardSelected ? 'none' : 'auto'
  }}
  animate={{ opacity: cardSelected ? 0 : 1 }}
>
```

## File Reference

```
/src/App.tsx                - SVG config, exit timing
/src/components/*Card.tsx   - Card entrance
/src/components/*Page.tsx   - Page transitions, variants
/src/styles/sass/App.scss   - SVG positioning only
```

---

**Last Updated:** 2025-01-11
**Key Principle:** CSS for positioning, Framer Motion for transforms
