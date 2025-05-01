# 🌟 react-custom-rating-stars

[![npm version](https://img.shields.io/npm/v/react-custom-rating-stars)](https://www.npmjs.com/package/react-custom-rating-stars)
[![npm downloads](https://img.shields.io/npm/dt/react-custom-rating-stars)](https://www.npmjs.com/package/react-custom-rating-stars)
[![License: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight and customizable React rating component with support for fractional ratings, custom size, and raw color input. Works perfectly with React and Next.js.

---

## ✨ Features

- ✅ Supports fractional values (e.g., `3.5`, `4.3`)
- 🎨 Accepts raw color strings (e.g., `"yellow"`, `"green"`, `"#facc15"`)
- 📏 Custom star size
- ⚛️ Built with React
- 📦 Works in Next.js and other React projects

---

## 📦 Installation

```bash
npm install react-custom-rating-stars
# or
yarn add react-custom-rating-stars
```

🚀 Usage

```bash
import Rating from 'react-custom-rating-stars';

export default function App() {
  return (
    <div>
      <h2>Rating Example</h2>
      <Rating rating={4.3} size={24} color="#22c55e" />
    </div>
  );
}
```

🛠 Props

| Prop         | Type     | Default      | Description                                       |
| ------------ | -------- | ------------ | ------------------------------------------------- |
| `rating`     | `number` | **required** | The rating value (can be fractional)              |
| `totalStars` | `number` | `5`          | Total number of stars                             |
| `size`       | `number` | `16`         | Size of each star in pixels                       |
| `color`      | `string` | `"#facc15"`  | Raw color for stars (`yellow`, `#ff0`, `#facc15`) |

📷 Preview

<Rating rating={3.6} size={20} color="orange" />
<Rating rating={4.5} size={24} color="#0ea5e9" />
<Rating rating={2.2} size={18} color="red" />

📄 License
ISC

🙌 Contributing
Contributions are welcome! Feel free to submit pull requests or open issues.

---

You can save this as `README.md` in the root of your package directory.
Then after editing:

```bash
1. Run `npm version patch` (or `minor`/`major`)
2. Run `npm publish --access public`

Let me know if you want to add badges (npm version, downloads, etc.) too!
```
