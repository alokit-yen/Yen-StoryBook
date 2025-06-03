### 🌐 `Hiten` Components Storybook Documentation

This README covers the following components:

* `Sidebar`
* `Spinner`
* `Avatar`

All components are built using React and styled with modular CSS, and can be previewed and controlled via Storybook.

---

## 🏠 Sidebar Component

A responsive sidebar with navigation support and customizable options.

### Props

| Prop       | Type     | Default  | Description                             |
| ---------- | -------- | -------- | --------------------------------------- |
| `heading`  | `string` | "My App" | Text shown at the top of the sidebar    |
| `width`    | `string` | "240px"  | Width of the sidebar                    |
| `position` | `string` | "left"   | Sidebar position: `"left"` or `"right"` |
| `navItems` | `array`  | `[]`     | Navigation button labels                |

### Notes

* Uses React Router: ensure `<BrowserRouter>` is provided in context.
* Navigation items redirect based on their name (e.g., `About` → `/about`).
* `Logout` is always shown at the bottom.

```jsx
<Sidebar
  heading="My App"
  width="240px"
  position="left"
  navItems={["Home", "Profile", "Settings", "Logout"]}
/>
```

---

## ➡️ Spinner Component

A loading spinner with customizable type, size, and color.

### Props

| Prop    | Type     | Default   | Description                              |
| ------- | -------- | --------- | ---------------------------------------- |
| `type`  | `string` | "default" | Spinner style: `default`, `dots`, `bars` |
| `size`  | `number` | `40`      | Diameter in pixels                       |
| `color` | `string` | `#4f46e5` | Spinner color (CSS color)                |

```jsx
<Spinner type="dots" size={50} color="#ff5733" />
```

---

## 📷 Avatar Component

A flexible avatar component that supports image, initials, or icon.

### Props

| Prop       | Type     | Required | Description                               |
| ---------- | -------- | -------- | ----------------------------------------- |
| `type`     | `string` | yes      | `image`, `initials`, or `icon`            |
| `src`      | `string` | image    | Image source URL (for `image` type)       |
| `initials` | `string` | initials | Initials to show (for `initials` type)    |
| `icon`     | `string` | icon     | Emoji or icon character (for `icon` type) |
| `size`     | `number` | yes      | Size in pixels                            |

### Examples

```jsx
<Avatar type="image" src="https://i.pravatar.cc/150?img=3" size={64} />
<Avatar type="initials" initials="JS" size={64} />
<Avatar type="icon" icon="👨‍💻" size={64} />
```

---

## 🌐 Storybook Navigation

All components are available under the `Hiten/` namespace:

* `Hiten/Sidebar`
* `Hiten/Spinner`
* `Hiten/Avatar`

Use the Storybook controls panel to modify props interactively.

---

## ✅ Requirements

* Ensure React and React Router are set up.
* Add any required decorators (like `<BrowserRouter>`) in Storybook for routing.
* Components use props and styles designed for flexibility and clarity.

Happy Developing! ✨
