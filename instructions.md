# Instructions for KIWI Token Website

This document provides a detailed guide to creating a simple yet effective website for the $KIWI token. The website should be styled using **Tailwind CSS** and follow the design principles outlined below.

---

## **Color Palette**
Use the following color palette for the website (Dark theme)):

- Primary Dark Blue: `#09146E`
- Medium Blue: `#385BD1`
- Deep Navy: `#030848`

Additionally, use white (`#FFFFFF`) and light gray (`#F5F5F5`) for contrast and readability.

---

## **Website Structure**

### 1. **Navbar**
- The navigation bar should include links to social platforms:
  - **X (Twitter):** Link to your X profile.
  - **Telegram:** Link to your Telegram group.
- Use icons for the social links, placed on the right side of the navbar.
- The navbar should have a minimalistic design, with a background color of `#030848` and text/icons in white.

### 2. **Hero Section**
- Centered on the page, include:
  - A **countdown timer** to the token launch.
  - A heading: *"The Kiwi’s Journey to the Moon Starts Soon!"*
  - A subheading: *"Join the $KIWI revolution and be part of something big."*
- Add a simple, looping animation of a kiwi bird (use an SVG or GIF from the `images` folder).

### 3. **Footer**
- Include:
  - Links to social profiles (same as the navbar).
  - A short disclaimer: *"This is not financial advice. Cryptocurrencies involve risk."*
  - Copyright information: *"© 2025 KIWI Token. All rights reserved."*
- Use the color `#09146E` for the footer background and white for text.

---

## **File Organization**
- Place all images, including the kiwi animation or logo, in the `images` folder.
- Use Tailwind CSS for styling directly within the HTML or linked in a `styles.css` file.

---

## **Example Tailwind Structure**

### Example HTML Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$KIWI Token</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#030848] text-white font-sans">
    <!-- Navbar -->
    <nav class="flex justify-between items-center px-6 py-4 bg-[#030848]">
        <h1 class="text-xl font-bold">$KIWI Token</h1>
        <div class="flex space-x-4">
            <a href="https://twitter.com" target="_blank" class="hover:text-[#385BD1]">
                <img src="images/x-icon.svg" alt="X" class="w-6 h-6">
            </a>
            <a href="https://t.me" target="_blank" class="hover:text-[#385BD1]">
                <img src="images/telegram-icon.svg" alt="Telegram" class="w-6 h-6">
            </a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="flex flex-col justify-center items-center h-screen text-center">
        <h1 class="text-4xl font-bold mb-4">The Kiwi’s Journey to the Moon Starts Soon!</h1>
        <p class="text-lg mb-8">Join the $KIWI revolution and be part of something big.</p>

        <!-- Countdown Timer -->
        <div id="countdown" class="text-6xl font-mono text-[#385BD1]"></div>

        <!-- Animation -->
        <img src="images/kiwi-animation.gif" alt="Kiwi Animation" class="w-40 mt-8">
    </section>

    <!-- Footer -->
    <footer class="bg-[#09146E] text-center py-6">
        <div class="flex justify-center space-x-4 mb-4">
            <a href="https://twitter.com" target="_blank">
                <img src="images/x-icon.svg" alt="X" class="w-6 h-6">
            </a>
            <a href="https://t.me" target="_blank">
                <img src="images/telegram-icon.svg" alt="Telegram" class="w-6 h-6">
            </a>
        </div>
        <p class="text-sm">© 2025 KIWI Token. All rights reserved.</p>
        <p class="text-xs">This is not financial advice. Cryptocurrencies involve risk.</p>
    </footer>

    <script>
        // Countdown Timer Script
        const launchDate = new Date("2025-12-31T00:00:00Z").getTime();
        const countdownElement = document.getElementById('countdown');

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0) {
                countdownElement.textContent = "Launched!";
            }
        };

        setInterval(updateCountdown, 1000);
    </script>
</body>
</html>
