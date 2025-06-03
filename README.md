### 🌐 `ALOKIT` Components Storybook Documentation

📦 1. Card Component
The Card component is a flexible container used for displaying grouped content like text, media, and actions.

✅ Props
Prop	Type	Description
title	string	Optional header/title of the card
content	string	Main textual content or body of the card
footer	string	Optional footer (e.g., for CTA or meta info)
imageUrl	string	Optional image URL to be rendered at the top

🧪 Variants
Default: Title, content, and footer

With Image: Includes an image at the top of the card

No Footer: Hides the footer section

Only Content: Displays only the content without a title or footer

💡 Use Case
Use the Card component for dashboards, product previews, media blocks, or general-purpose containers in a layout.

🎠 2. Carousel Component
The Carousel is a wrapper for a slick-slider-powered carousel, supporting various item types.

✅ Props
Prop	Type	Description
type	'image' | 'card' | 'testimonial'	Specifies the layout and rendering logic
items	array	List of items to be displayed in the carousel

🎨 Modes
Image Carousel: Renders an image gallery (using src and alt)

Card Carousel: Renders a scrollable list of cards (e.g., feature cards)

Testimonial Carousel: Displays quotes with author names

🔁 Item Shape Examples
Image:

js
Copy
Edit
{ src: 'url', alt: 'image description' }
Card:

js
Copy
Edit
{ title: '...', description: '...' }
Testimonial:

js
Copy
Edit
{ quote: '...', author: '...' }
💡 Use Case
Ideal for image galleries, product showcases, user testimonials, or feature highlights.

🔽 3. Dropdown Component
A flexible dropdown component for single selection, with optional grouping and icons.

✅ Props
Prop	Type	Description
label	string	Placeholder or label for the dropdown
options	array	List of { label, value } pairs (used if grouped is false)
groups	object	Grouped options under named categories (used if grouped is true)
onSelect	function	Callback when an option is selected
grouped	boolean	Whether to show options as grouped

🧪 Variants
Default: Simple flat list of options

With Icons: Emoji or icon-enhanced option labels

Grouped: Options grouped under category headers like "Fruits", "Vegetables"

💡 Use Case
Perfect for filters, settings menus, user actions, or grouped selections in forms.

✏️ 4. Input Component
A reusable text input field with labeling and internal state handling.

✅ Props
Prop	Type	Description
label	string	Descriptive label shown above the input
placeholder	string	Input placeholder text
value	string	The controlled value of the input field
type	string	Input type (e.g., text, password, email)
disabled	boolean	If true, disables user interaction

🧪 Variants
Default: Basic text input

With Initial Value: Pre-filled with a default value

Password Input: Obscures input content

Disabled Input: Prevents user interaction

💡 Use Case
Used in forms, authentication flows, search bars, or admin interfaces.




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
