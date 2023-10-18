# seunghojang.com

## 1. Concept

The website about me, seunghojang.com.

## 2. Moodboard

<details>
<summary>🖼️ Moodboard image</summary>

![](/Midterm/ReadmeAssets/Moodboard/Moodboard.png)

</details>

## 3. Sitemap and Wireframe

<a href="https://www.figma.com/file/b9tdhg9q64ka04KFMAMQ7J/DM-UY-2193-Intro-to-Web-Development?type=design&node-id=0%3A1&mode=design&t=dOhSwSeQTsSUq9ue-1">🎨 Figma: Wireframe Design</a><br>
<a href="https://www.figma.com/proto/b9tdhg9q64ka04KFMAMQ7J/DM-UY-2193-Intro-to-Web-Development?page-id=0%3A1&type=design&node-id=13-31&viewport=158%2C-651%2C0.18&t=G81eDzx9lISq16DH-1&scaling=scale-down&starting-point-node-id=13%3A31&show-proto-sidebar=1&mode=design">🛠️ Figma: Wireframe Prototype</a><br>

<details>
<summary>🖼️ Sitemap and Wireframe image</summary>

![](/Midterm/ReadmeAssets/Sitemap%20and%20Wireframe/Sitemap.png)

![](/Midterm/ReadmeAssets/Sitemap%20and%20Wireframe/Work%20Wireframe%201.png)
![](/Midterm/ReadmeAssets/Sitemap%20and%20Wireframe/Work%20Wireframe%202.png)
![](/Midterm/ReadmeAssets/Sitemap%20and%20Wireframe/Work%20Wireframe%203.png)
![](/Midterm/ReadmeAssets/Sitemap%20and%20Wireframe/Work%20Wireframe%204.png)

</details>

## 4. Design

<a href="https://www.figma.com/file/b9tdhg9q64ka04KFMAMQ7J/DM-UY-2193-Intro-to-Web-Development?type=design&node-id=28%3A2&mode=design&t=hnl1e84whSAphNEs-1">🎨 Figma: Design</a>

![](/Midterm/ReadmeAssets/Design/Design.png)

## 5. Prototype

### 1) Desktop Prototype

<a href="https://www.figma.com/proto/b9tdhg9q64ka04KFMAMQ7J/DM-UY-2193-Intro-to-Web-Development?page-id=28%3A2&type=design&node-id=81-470&viewport=45%2C299%2C0.13&t=HRWC7Uh2wpJvhZ68-1&scaling=contain&starting-point-node-id=81%3A470&show-proto-sidebar=1&mode=design">🛠️ Figma: Desktop Prototype</a>

### 2) Mobile Prototype

<a href="https://www.figma.com/proto/b9tdhg9q64ka04KFMAMQ7J/DM-UY-2193-Intro-to-Web-Development?page-id=28%3A2&type=design&node-id=81-1248&viewport=45%2C299%2C0.13&t=HRWC7Uh2wpJvhZ68-1&scaling=contain&starting-point-node-id=81%3A1248&show-proto-sidebar=1&mode=design">🛠️ Figma: Mobile Prototype</a>

## 6. Develop

### 1) CSS

<a href="public/style.css" target="_blank">📄 Style Sheet</a><br>

<details>
<summary>⌨️ Code Snippets</summary>

#### (1) Widget

    /* Widget */

    * {
        margin: 0px;
        padding: 0px;
        text-decoration: none;
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }

    .column {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }

    .sizedBox16 {
        width: 16px;
        height: 16px;
    }

    .sizedBox24 {
        width: 24px;
        height: 24px;
    }

    .sizedBox32 {
        width: 32px;
        height: 32px;
    }

    .sizedBox64 {
        width: 64px;
        height: 64px;
    }

    .sizedBox128 {
        width: 128px;
        height: 128px;
    }

    .activeNavButton {
        padding: 32px;
    }

    .inActiveNavButton {
        padding: 32px;
    }

    .inActiveNavButton:hover {
        color: #1A1A1A;
        background-color: #EEEEEE;
    }

    .inActiveNavButton2 {
        padding: 32px;
    }

    .inActiveNavButton2:hover {
        color: #FFFFFF;
        background-color: #2B2B2B;
    }

    .activeTextButton {
        text-decoration: none;
    }

    .inActiveTextButton {
        text-decoration: none;
    }

    .inActiveTextButton:hover {
        color: #FFFFFF;
    }

    .thumbnail img {
        transition: all 1s ease;
    }

    .thumbnail:hover img {
        transform: scale(1.075);
    }

#### (2) Responsive Widget

    /* Responsive Widget */

    .rowColumn {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }

    .responsiveLRPadding {
        padding-left: 128px;
        padding-right: 128px;
    }

    .responsiveTPadding {
        padding-top: 128px;
    }

    .responsiveBPadding {
        padding-bottom: 128px;
    }

    .responsiveDesktop {
        display: inherit;
    }

    .responsiveMobile {
        display: none;
    }

#### (3) Media Query

    /* Media Query */

    @media only screen and (max-width: 1633px) {
        /* Text Style */

        .display {
            font-size: 48px;
        }

        .headline {
            font-size: 36px;
        }

        .titleBold {
            font-size: 24px;
        }

        .titleRegular {
            font-size: 24px;
        }

        .body {
            font-size: 16px;
        }

        .label {
            font-size: 12px;
        }

        /* Responsive Widget */

        .rowColumn {
            display: inline;
        }

        .responsiveLRPadding {
            padding-left: 64px;
            padding-right: 64px;
        }

        .responsiveTPadding {
            padding-top: 64px;
        }

        .responsiveBPadding {
            padding-bottom: 64px;
        }

        .responsiveDesktop {
            display: none;
        }

        .responsiveMobile {
            display: inherit;
        }
    }

</details>

### 2) HTML

<a href="public/index.html" target="_blank">📄 Developer Page</a><br>
<a href="public/researcher.html" target="_blank">📄 Researcher Page</a><br>
<a href="public/designer.html" target="_blank">📄 Designer Page</a><br>

<a href="public/OTLforKAIST.html" target="_blank">📃 OTL for KAIST Page</a><br>
<a href="public/TheVoice.html" target="_blank">📃 The Voice Page</a><br>
<a href="public/CFS.html" target="_blank">📃 CFS for CofferOS Page</a><br>

## 7. Deploy

<a href="https://seunghojang.web.app/">🔥 seunghojang.com</a>

## 8. Improvement

### 1) Dynamic

https://www.apple.com/iphone-15/  
https://www.apple.com/iphone-15-pro/

### 2) Interactive

### 3) Details
